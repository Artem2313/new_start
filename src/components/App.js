/* eslint-disable */
import React, { Component } from 'react';
import Reader from './Reader.js/Reader';
import publications from '../publications.json';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <Reader items={publications}>
          <Publication />
          <Counter />
          <Controls />
        </Reader>
      </div>
    );
  }
}
