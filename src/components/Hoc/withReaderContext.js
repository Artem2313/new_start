import React from 'react';
import Reader from '../Reader.js/Reader';

const withReaderContext = BaseComponent => props => {
  return (
    <Reader.Consumer>
      {context => <BaseComponent {...props} {...context} />}
    </Reader.Consumer>
  );
};

export default withReaderContext;
