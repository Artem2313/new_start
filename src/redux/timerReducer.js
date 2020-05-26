import { Type } from './actionTypes';

const timerReducer = (state = 0, action) => {
  switch (action.type) {
    case Type.INCREMENT:
      return state + action.payload;

    case Type.DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};

export default timerReducer;
