import React, { useState } from 'react';

function QuoteBox() {
  const [quote, getQuote] = useState([]);

  return (
    <div id="quote-box">
      <div id="text"></div>
      <div id="author"></div>
      <button type="button" id="new-quote">new quote</button>
      <a href="#" id="tweet-quote">tweet quote</a>
    </div>
  );
}

export default QuoteBox;
