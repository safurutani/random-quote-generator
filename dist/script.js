function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Quote extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "getNewQuote",







    () => this.setState(prevState => {
      const quote = prevState.quotes[Math.floor(Math.random() * prevState.quotes.length)];
      const tweet = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote.quote + '"\n–' + quote.author);
      const bgColors = {
        "Bikini Bottom Con Man": "#D1A2FF",
        "Spongebob Squarepants": "#f7ea48",
        "Squidward Tentacles": "#a3d3c3",
        "Patrick Star": "#Ff808b",
        "Sandy Cheeks": "#FFD389",
        "Mr. Krabs": "#ff3b3b",
        "Plankton": "#8cd49e" };

      document.body.style.background = bgColors[quote.author];
      document.getElementById("tweet-quote").style.background = bgColors[quote.author];
      document.getElementById("new-quote").style.background = bgColors[quote.author];
      return { quote, tweet };
    }));this.state = { quotes: [], quote: {}, tweet: "" };this.getNewQuote = this.getNewQuote.bind(this);}
  async componentDidMount() {
    const response = await fetch("https://gist.githubusercontent.com/safurutani/c03341674739d2c26f776ef7daa9cb07/raw/09ab9b293e1e7e43e6776040a9797f52e541aed2/spongebobQuotes.json");
    const result = await response.json();

    this.setState({ quotes: result.quotes });
    this.getNewQuote();
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("div", { id: "words" }, /*#__PURE__*/
      React.createElement("p", { id: "text" }, "\"", this.state.quote.quote, "\""), /*#__PURE__*/
      React.createElement("p", { id: "author" }, "- ", this.state.quote.author)), /*#__PURE__*/

      React.createElement("div", { id: "clickables" }, /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", href: this.state.tweet, target: "_blank" }, "Tweet Quote"), /*#__PURE__*/
      React.createElement("button", { id: "new-quote", onClick: this.getNewQuote }, "New Quote"))));



  }}

ReactDOM.render( /*#__PURE__*/React.createElement(Quote, null), document.getElementById("root"));