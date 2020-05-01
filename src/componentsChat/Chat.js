import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MessageFeed from './MessageFeed';
import Editor from './Editor';

const chatStyles = {
  maxWidth: 640,
  marginLeft: 'auto',
  marginRight: 'auto',
};

export default class Chat extends Component {
  state = {
    messages: [],
  };

  addMessage = text => {
    const message = {
      id: uuidv4(),
      text,
      createdAt: new Date().toISOString(),
    };

    this.setState(state => ({
      messages: [...state.messages, message],
    }));
  };

  render() {
    return (
      <div style={chatStyles}>
        <Editor onAddMessage={this.addMessage} />
        <MessageFeed items={this.state.messages} />
      </div>
    );
  }
}
