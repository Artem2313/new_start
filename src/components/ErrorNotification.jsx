import React from 'react';
import passProps from '../hoc/passProps';

const ErrorNotification = ({ text }) => (
  <h1>Whoops, something went wrong: {text}</h1>
);

export default passProps({ text: 'hello' })(ErrorNotification);
