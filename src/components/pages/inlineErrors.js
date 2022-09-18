import React from 'react'
import PropTypes from 'prop-types';

const InlineErrors = props => {
  return (
    <div>
      { props.message }
    </div>
  )
}

InlineErrors.propTypes = {
    message: PropTypes.string.isRequired
};


export default InlineErrors;
