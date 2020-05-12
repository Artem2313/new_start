import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TaskEditor.module.css';
import Priority from '../../utils/Priority';
import PrioritySelector from '../PrioritySelector/PrioritySelector';

const options = Object.values(Priority);

export default class TaskEditor extends Component {
  state = {
    text: '',
    priority: Priority.NORMAL,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onAddTask } = this.props;
    onAddTask({ ...this.state });
    this.setState({ text: '', priority: 'normal' });
  };

  render() {
    const { text, priority } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="text"
          onChange={this.handleChange}
          value={text}
          placeholder="Enter task content..."
        />
        <label className={styles.label}>
          Select task priority:
          <PrioritySelector
            options={options}
            onChange={this.handleChange}
            value={priority}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    );
  }
}

TaskEditor.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};
