import React from 'react';
import withReaderContext from '../Hoc/withReaderContext';

const Controls = ({ onPrev, onNext, currentIdx, publications }) => (
  <section className="controls">
    <button
      type="button"
      className="button"
      disabled={currentIdx === 0}
      onClick={onPrev}
    >
      Prev
    </button>
    <button
      type="button"
      className="button"
      disabled={currentIdx === publications.length - 1}
      onClick={onNext}
    >
      Next
    </button>
  </section>
);

export default withReaderContext(Controls);
