import React, { Component } from 'react';
import faker from 'faker';
import PropTypes from 'prop-types';

export default class CommentForm extends Component {
  static propTypes = {
    onAddComment: PropTypes.func.isRequired,
  };

  state = {
    text: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onAddComment } = this.props;
    const { text } = this.state;

    onAddComment(text !== '' ? text : faker.lorem.sentence());

    this.setState({ text: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            type="text"
            name="text"
            value={text}
            onChange={this.handleChange}
            placeholder="Add comment..."
          ></textarea>
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
}
