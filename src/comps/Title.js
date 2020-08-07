import React, { useState, useEffect } from 'react';
import quotes from '../data/quotes';

const Title = () => {
  const [quote, setQuote] = useState({ autor: '', phrase: '' });
  useEffect(() => {
    let index = 0;
    setInterval(() => {
      if (index === quotes.data.length) {
        index = 0;
      }
      const quote = quotes.data[index];
      setQuote({ autor: quote.autor, phrase: quote.quote });
      index += 1;
    }, 5000 * 5);
  }, []);
  return (
    <div className='title'>
      <h1>Firegram</h1>
      <div className='quote'>
        <p>"{quote.phrase}"</p>
        <span>— {quote.autor}</span>
      </div>
    </div>
  );
};

export default Title;
