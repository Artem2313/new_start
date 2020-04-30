import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls';

export default class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  static propTypes = {
    step: PropTypes.number,
    initialValue: PropTypes.number,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    const { step } = this.props;
    this.setState(prevState => ({
      value: prevState.value + step,
    }));
  };

  handleDecrement = () => {
    const { step } = this.props;
    this.setState(prevState => {
      return {
        value: prevState.value - step,
      };
    });
  };

  render() {
    const { value } = this.state;
    const { step } = this.props;

    return (
      <div>
        <span>{value}</span>
        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
          step={step}
        />
      </div>
    );
  }
}
