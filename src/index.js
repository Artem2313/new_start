import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
// import Player from './player/player';
// import ModalApp from './ModalWindowComponents/ModalApp';
import './index.css';
import Chat from './componentsChat/Chat';

// ReactDOM.render(<App />, document.querySelector('#root'));

// ReactDOM.render(
//   <Player source="http://techslides.com/demos/sample-videos/small.mp4" />,
//   document.getElementById('root'),
// );

ReactDOM.render(<Chat />, document.querySelector('#root'));
