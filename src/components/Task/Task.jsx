import React from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.css';
import Priority from '../../utils/Priority';
import PrioritySelector from '../PrioritySelector/PrioritySelector';

const options = Object.values(Priority);

const Task = ({
  text,
  priority,
  completed,
  onDeleteTask,
  onUpdateCompleted,
  onUpdatePriority,
  id,
}) => (
  <div className={`${styles.task} ${styles[`${priority}Priority`]}`}>
    <p className={styles.text}>{text}</p>
    <hr />
    <div className={styles.actions}>
      <button type="button" onClick={onDeleteTask}>
        Delete
      </button>
      <PrioritySelector
        options={options}
        value={priority}
        onChange={e => onUpdatePriority(id, e.target.value)}
      />
      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onUpdateCompleted(id)}
        />
      </label>
    </div>
  </div>
);

Task.propTypes = {
  text: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onUpdatePriority: PropTypes.func.isRequired,
  onUpdateCompleted: PropTypes.func.isRequired,
};

export default Task;
