import React, { Component, createRef } from 'react';

const listStyles = {
  height: 400,
  border: '1px solid #212121',
  overflow: 'auto',
};

export default class MessageFeed extends Component {
  listRef = createRef();

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   // scrollHeight - полная высота контента включая тот который не виден
  //   // scrollTop - высота невидимого контента сверху
  //   // offsetHeight - высота элемента
  //   if (prevProps.items !== this.props.items) {
  //     const { scrollHeight, scrollTop, offsetHeight } = this.listRef.current;
  //     const distanceFromBottom = scrollHeight - (scrollTop + offsetHeight);

  //     return { shouldScroll: distanceFromBottom < 150 };
  //   }

  //   return null;
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.items !== this.props.items) {
  //     console.log(this.listRef);

  //     const listRef = this.listRef.current;

  //     listRef.scrollTop = listRef.scrollHeight;
  //   }
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: ', snapshot);
    if (snapshot && snapshot.shouldScroll) {
      const listRef = this.listRef.current;
      listRef.scrollTop = listRef.scrollHeight;
    }
  }

  getSnapshotBeforeUpdate() {
    if (prevProps.items !== this.props.items) {
      const { scrollHeight, scrollTop, offsetHeight } = this.listRef.current;
      const distanceFromBottom = scrollHeight - (scrollTop + offsetHeight);

      return { shouldScroll: distanceFromBottom < 150 };
    }

    return null;
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log('componentDidUpdate: ', snapshot);
  //   if (snapshot && snapshot.shouldScroll) {
  //     const listRef = this.listRef.current;
  //     listRef.scrollTop = listRef.scrollHeight;
  //   }
  // }

  render() {
    return (
      <ul ref={this.listRef} style={listStyles}>
        {this.props.items.map(item => (
          <li key={item.id}>
            <p>{item.text}</p>
            <p>
              <b>Created at:</b> {new Date(item.createdAt).toLocaleString()}
            </p>
            <hr />
          </li>
        ))}
      </ul>
    );
  }
}
