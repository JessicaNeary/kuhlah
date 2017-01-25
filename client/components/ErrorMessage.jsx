import React from 'react'

const ErrorMessage = props => (
  <div>
    <h2>Oh no! Something went wrong ...</h2>
    <h4 style={{color: 'red'}}>{props.message}</h4>
  </div>
)

export default ErrorMessage
