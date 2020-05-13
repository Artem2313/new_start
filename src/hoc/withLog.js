import React from 'react';

// function withLog

const withLog = BaseComponent => {
  return function WithLog(props) {
    console.log(`Calling ${BaseComponent.name} with props: ${props}`);
    return <BaseComponent {...props} />;
  };
};

export default withLog;

// Class withLog

// const withLogClass = function(BaseComponent) {
//   return class WithLogClass extends Component {
//     render() {
//       console.log(`Calling ${BaseComponent.name} with props: ${props}`);
//       return <BaseComponent {...props} />;
//     }
//   };
// };

// const filterNumbers = numbers => {
//   numbers.filter(n => n > 2);
// };

// const withLog = function(fn) {
//   return function(...args) {
//     console.log('Args: ', args);
//     return fn(...args);
//   };
// };

// const filterNumberswithLog = withLog(filterNumbers);

// filterNumberswithLog([1, 2, 3, 4, 5]);
