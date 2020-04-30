import React from 'react';
import PropTypes from 'prop-types';

const MessageUpdater = ({ updateMessage }) => (
  <button type="button" onClick={updateMessage}>
    Update Message
  </button>
);

MessageUpdater.propTypes = {
  updateMessage: PropTypes.func.isRequired,
};

export default MessageUpdater;
