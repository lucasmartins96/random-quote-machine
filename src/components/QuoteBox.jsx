import React, { useEffect, useState } from 'react';
import getQuotes from '../services/requestAPI';

function QuoteBox() {
  const [quote, getQuote] = useState([]);

  useEffect(() => {
    const makeRequest = async () => {
      const apiResponse = await getQuotes();
      getQuote(apiResponse);
    }
    makeRequest();
  }, []);

  return (
    <div id="quote-box">
      <div id="text">{ quote.quote }</div>
      <div id="author">{ quote.author }</div>
      <button type="button" id="new-quote">new quote</button>
      <a href="#" id="tweet-quote">tweet quote</a>
    </div>
  );
}

export default QuoteBox;
