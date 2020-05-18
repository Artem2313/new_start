import React, { Component } from 'react';
import TaskEditor from './TaskEditor/TaskEditor';
import TaskFilter from './TaskFilter/TaskFilter';
import TaskList from './TaskList/TaskList';
import filterTasks from '../helpers/filterTasks';
import Modal from './Modal/Modal';
import Legend from './Legend/Legend';
import Priority from '../utils/Priority';
import * as TaskAPI from '../services/task-api';

const containerStyles = {
  maxWidth: 1200,
  minWidth: 800,
  marginLeft: 'auto',
  marginRight: 'auto',
};

const headerStyles = { display: 'flex', justifyContent: 'space-between' };

const legendOptions = [
  { priority: Priority.LOW, color: '#4caf50' },
  { priority: Priority.NORMAL, color: '#2196f3' },
  { priority: Priority.HIGH, color: '#f44336' },
];

export default class App extends Component {
  state = {
    tasks: [],
    filter: '',
    isCreating: false,
    isEditing: false,
    selectedTaskId: null,
  };

  componentDidMount() {
    TaskAPI.fetchTasks().then(tasks => {
      this.setState({ tasks });
    });
  }

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  addTask = task => {
    const newTask = {
      ...task,
      completed: false,
    };

    TaskAPI.postTask(newTask)
      .then(addedTask => {
        this.setState(prevState => ({
          tasks: [addedTask, ...prevState.tasks],
        }));
      })
      .finally(this.handleIsCreating);
  };

  deleteTask = id => {
    TaskAPI.deleteTask(id).then(() => {
      this.setState(prevState => ({
        tasks: prevState.tasks.filter(task => task.id !== id),
      }));
    });
  };

  updatePriority = (id, priority) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.id === id ? { ...task, priority } : task,
      ),
    }));
  };

  updateCompleted = id => {
    const task = this.state.tasks.find(t => t.id === id);

    TaskAPI.updateTask(id, { completed: !task.completed }).then(updatedTask => {
      this.setState(prevState => ({
        tasks: prevState.tasks.map(t => (t.id === id ? updatedTask : t)),
      }));
    });
  };

  handleIsCreating = () => {
    this.setState(prevState => ({ isCreating: !prevState.isCreating }));
  };

  /* Update task */

  handleEditing = id => {
    this.setState({
      isEditing: true,
      selectedTaskId: id,
    });
  };

  closeEditTaskModal = () => {
    this.setState({
      isEditing: false,
      selectedTaskId: null,
    });
  };

  updateTask = ({ text, priority }) => {
    TaskAPI.updateTask(this.state.selectedTaskId, { text, priority }).then(
      updatedTask => {
        this.setState(
          prevState => ({
            tasks: prevState.tasks.map(task =>
              task.id === prevState.selectedTaskId ? updatedTask : task,
            ),
          }),
          this.closeEditTaskModal,
        );
      },
    );
  };

  render() {
    const { tasks, filter, isCreating, isEditing, selectedTaskId } = this.state;
    const filteredTasks = filterTasks(tasks, filter);
    const taskInEdit = tasks.find(t => t.id === selectedTaskId);

    return (
      <div style={containerStyles}>
        <header style={headerStyles}>
          <button type="button" onClick={this.handleIsCreating}>
            Add task
          </button>
          <Legend items={legendOptions} />
        </header>
        <hr />
        <TaskFilter value={filter} onChangeFilter={this.changeFilter} />
        <TaskList
          items={filteredTasks}
          onDeleteTask={this.deleteTask}
          onUpdateCompleted={this.updateCompleted}
          onEditTask={this.handleEditing}
        />
        {isCreating && (
          <Modal onClose={this.handleIsCreating}>
            <TaskEditor
              onSave={this.addTask}
              onCancel={this.handleIsCreating}
            />
          </Modal>
        )}
        {isEditing && (
          <Modal onClose={this.closeEditTaskModal}>
            <TaskEditor
              onSave={this.updateTask}
              onCancel={this.closeEditTaskModal}
              text={taskInEdit.text}
              priority={taskInEdit.priority}
            />
          </Modal>
        )}
      </div>
    );
  }
}
