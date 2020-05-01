import React, { Component } from 'react';
import faker from 'faker';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    font: 'inherit',
    padding: 8,
  },
};

export default class Editor extends Component {
  state = {
    text: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddMessage(
      this.state.text !== '' ? this.state.text : faker.lorem.sentence(),
    );

    this.setState({ text: '' });
  };

  handleChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Start typing message..."
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}
