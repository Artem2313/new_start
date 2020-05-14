import React, { Component } from 'react';
import shortid from 'shortid';
import TaskEditor from './TaskEditor/TaskEditor';
import TaskFilter from './TaskFilter/TaskFilter';
import TaskList from './TaskList/TaskList';
import filterTasks from '../helpers/filterTasks';

const containerStyles = {
  maxWidth: 1200,
  minWidth: 800,
  marginLeft: 'auto',
  marginRight: 'auto',
};

export default class App extends Component {
  state = {
    tasks: [],
    filter: '',
  };

  componentDidMount() {
    const persistedTasks = localStorage.getItem('tasks');
    if (persistedTasks) {
      try {
        const tasks = JSON.parse(persistedTasks);

        this.setState({ tasks });
      } catch (error) {
        console.log(error);
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
  }

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  addTask = task => {
    const newTask = {
      ...task,
      id: shortid.generate(),
      completed: false,
    };

    this.setState(prevState => ({ tasks: [newTask, ...prevState.tasks] }));
  };

  deleteTask = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== id),
    }));
  };

  updatePriority = (id, priority) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.id === id ? { ...task, priority } : task,
      ),
    }));
  };

  render() {
    const { tasks, filter } = this.state;
    const filteredTasks = filterTasks(tasks, filter);
    return (
      <div style={containerStyles}>
        <TaskEditor onAddTask={this.addTask} />
        <hr />
        <TaskFilter value={filter} onChangeFilter={this.changeFilter} />
        <TaskList
          items={filteredTasks}
          onDeleteTask={this.deleteTask}
          onUpdateCompleted={this.updateCompleted}
        />
      </div>
    );
  }
}
