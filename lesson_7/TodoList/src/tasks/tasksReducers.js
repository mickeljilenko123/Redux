import { TASKS_LIST_RECIEVED } from './tasksActions';

const initialState = {
    tasksList: [],
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case TASKS_LIST_RECIEVED:
            return {
                ...state,
                tasksList: action.payload.tasksList,
            }

        default:
            return state;
    }
}

export default taskReducer;