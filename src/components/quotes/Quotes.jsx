import React from 'react';
import PropTypes from 'prop-types';

function Quotes({ quote, character, image }) {
  return (
    <figure>
      <img src={image} alt={character} />
      <figcaption>{quote}</figcaption>
    </figure>
  );
}

Quotes.propTypes = {};

export default Quotes;
