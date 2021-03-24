import React, { Component } from 'react';
import CreateTaskInput from './CreateTaskInput';
import Task from './Task';
import { createTask, fetchTasksList, updateTask, deleteTask } from '../taskGateway';



class TasksList extends Component {
    state = {
        tasks: [],
    }
    componentDidMount() {
        this.fetchTasks()
    }

    fetchTasks = () => {
        fetchTasksList()
        .then(tasksList => {
            this.setState({ tasks: tasksList });
        })
    }

    onCreate = text => {
       const newTask = {
           text,
           done: false,
       };
       createTask(newTask)
       .then(() => this.fetchTasks())
    }

    handleTaskStatusChange = (id) => {
        
        const { done, text } = this.state.tasks.find(task => task.id === id);
        const updatedTask = {
            text,
            done: !done,
        };
        updateTask(id, updatedTask).then(() => this.fetchTasks());
    };

    handleTaskDelete = (id) => {
        deleteTask(id).then(() => this.fetchTasks())
    }

    render() {
        const sortedList = this.state.tasks.slice()
        .sort((a, b) => (a.done - b.done))
        return(
            <div className="todo-list">
                <CreateTaskInput onCreate={this.onCreate} />
            <ul className="list">
                {sortedList.map(item => (
                    <Task 
                        key={item.id} 
                       {...item} 
                       onDelete={this.handleTaskDelete}
                       onChange={this.handleTaskStatusChange}
                    // id={item.id} text={item.text} done={item.done}
                    />
                ))}
            </ul>
            </div>
        )
    }

}
export default TasksList;