import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ onDecrement, onIncrement, step }) => (
  <>
    <button type="button" onClick={onIncrement}>
      Increment by {step}
    </button>
    <button type="button" onClick={onDecrement}>
      Decrement by {step}
    </button>
  </>
);

Controls.propTypes = {
  step: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};
export default Controls;
