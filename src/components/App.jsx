import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class App extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    const persistedComments = localStorage.getItem('comments');

    if (persistedComments) {
      this.setState({ comments: JSON.parse(persistedComments) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps: ', prevProps);
    console.log('prevState: ', prevState);
    console.log('this.state: ', this.state);

    if (prevState.comments !== this.state.comments) {
      localStorage.setItem('comments', JSON.stringify(this.state.comments));
    }
  }

  addComment = text => {
    const newComment = {
      id: uuidv4(),
      text,
      createdAt: new Date().toISOString(),
    };

    return this.setState(prevState => ({
      comments: [...prevState.comments, newComment],
    }));
  };

  render() {
    const { comments } = this.state;
    return (
      <div>
        <CommentForm onAddComment={this.addComment} />
        <CommentList items={comments} />
      </div>
    );
  }
}
