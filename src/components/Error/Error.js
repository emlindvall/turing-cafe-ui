import React, { Component } from 'react';

const Error = ({ error }) => {
  return(
    <div className="error-container">
      <p>Whoops! Something's gone wrong. Please try again.</p>
    </div>
  )
}

export default Error;