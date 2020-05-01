import React from 'react';
import PropTypes from 'prop-types';

const CommentList = ({ items = [] }) => (
  <div>
    {items.length > 0 && (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <p>{item.text}</p>
            <p>{item.createdAt}</p>
          </li>
        ))}
      </ul>
    )}
  </div>
);

CommentList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default CommentList;
