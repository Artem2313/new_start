import React from 'react';
import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';

// export default class App extends Component {
//   state = {
//     message: '',
//   };

//   updateMessage = () => {
//     this.setState({ message: `Updated at ${Date.now()}` });
//   };

//   render() {
//     const { message } = this.state;
//     return (
//       <div>
//         <p>{message || 'Hello'}</p>
//         <button type="button" onClick={this.updateMessage}>
//           update
//         </button>
//         <MessageUpdater updateMessage={this.updateMessage} />
//         {/* <Counter step={1} initialValue={5} />
//         <Dropdown isOpen={false} /> */}
//       </div>
//     );
//   }
// }

const App = () => (
  <div>
    <Counter step={1} initialValue={5} />
    <Dropdown isOpen={false} />
  </div>
);

export default App;
