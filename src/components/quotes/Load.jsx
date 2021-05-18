import React from 'react';
import PropTypes from 'prop-types';

function Load({ getQuotes }) {
  return (
    <div>
      <button value="getQuotes" name="getQuotes" onClick={getQuotes}>
        Get Quotes!
      </button>
    </div>
  );
}

Load.propTypes = {
  getQuotes: PropTypes.func.isRequired,
};

export default Load;
