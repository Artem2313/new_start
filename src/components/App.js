import React from 'react';
import TimerContainer from './Timer/TimerContainer';
import StepSelector from './StepSelector/StepSelector';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};

const App = () => (
  <div style={containerStyle}>
    <TimerContainer />
    <StepSelector />
  </div>
);

export default App;
