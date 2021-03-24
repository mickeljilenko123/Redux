import * as tasksGateway from './taskGateway';
import { tasksListSelector } from './tasksSelectors';

export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';

export const tasksListRecieved = (tasksList) => {
    const action = {
        type: TASKS_LIST_RECIEVED,
        payload: {
            tasksList,
        }
    };
    return action;
}

export const getTasksList = () => {
    const thunkAction = function(dispatch) {
        tasksGateway.fetchTasksList()
            .then(tasksList => dispatch(tasksListRecieved(tasksList)))
    };
    return thunkAction;
}

export const updateTask = (taskId) => {
    const thunkAction = function(dispatch, getState) {
        const state = getState();
        const tasksList = tasksListSelector(state);
        const task = tasksList.find(task => task.id === taskId);

        const updatedTasks = {
            ...task,
            done: !task.done,
        };
        tasksGateway
            .updateTask(taskId, updatedTasks)
            .then(() => dispatch(getTasksList()), )
    };
    return thunkAction;
}

export const deleteTask = (taskId) => {
    const thunkAction = function(dispatch) {
        tasksGateway
            .deleteTask(taskId)
            .then(() => dispatch(getTasksList()), )
    };
    return thunkAction;
}

export const createTask = (text) => {
    const thunkAction = function(dispatch) {
        const taskData = {
            text,
            done: false,
        }
        tasksGateway
            .createTask(taskData)
            .then(() => dispatch(getTasksList()), )
    };
    return thunkAction;
}