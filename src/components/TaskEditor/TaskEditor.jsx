import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TaskEditor.module.css';
import Priority from '../../utils/Priority';
import PrioritySelector from '../PrioritySelector/PrioritySelector';

const options = Object.values(Priority);

export default class TaskEditor extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    text: PropTypes.string,
    priority: PropTypes.string,
  };

  static defaultProps = {
    text: '',
    priority: Priority.NORMAL,
  };

  state = {
    text: this.props.text,
    priority: this.props.priority,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSave } = this.props;
    onSave({ ...this.state });
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
        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={this.props.onCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
