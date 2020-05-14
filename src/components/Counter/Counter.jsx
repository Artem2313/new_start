import React from 'react';
import withReaderContext from '../Hoc/withReaderContext';

const Counter = ({ currentIdx, publications }) => (
  <p>
    {currentIdx + 1}/{publications.length}
  </p>
);

export default withReaderContext(Counter);
