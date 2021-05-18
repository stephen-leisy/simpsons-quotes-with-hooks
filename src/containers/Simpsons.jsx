import React, { useState } from 'react';
import Quotes from '../components/quotes/Quotes';
import Load from '../components/quotes/Load';
import { getSimpsonsQuote } from '../service/simpsonsApiCall';

export default function Simpsons() {
  const [quote, setQuote] = useState({});

  const handleSubmit = async () => {
    const quote = await getSimpsonsQuote();
    setQuote(quote);
  };
  console.log('main:', quote);

  return (
    <>
      <Load getQuotes={handleSubmit} />
      <Quotes {...quote} />
    </>
  );
}
