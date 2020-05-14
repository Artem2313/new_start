/* eslint-disable */
import React, { Component, createContext } from 'react';

export const ReaderContext = createContext();

export default class Reader extends Component {
  static Consumer = ReaderContext.Consumer;
  state = {
    currentIdx: 0,
    publication: this.props.items[0],
    publications: this.props.items,
  };

  handleNext = () => {
    this.setState(prevState => ({
      currentIdx: prevState.currentIdx + 1,
      publication: this.props.items[prevState.currentIdx + 1],
    }));
  };

  handlePrev = () => {
    this.setState(prevState => ({
      currentIdx: prevState.currentIdx - 1,
      publication: this.props.items[prevState.currentIdx - 1],
    }));
  };

  render() {
    return (
      <ReaderContext.Provider
        value={{
          ...this.state,
          onNext: this.handleNext,
          onPrev: this.handlePrev,
        }}
      >
        <div className="reader">{this.props.children}</div>
      </ReaderContext.Provider>
    );
  }
}
