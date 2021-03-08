import { ADD, DELETE } from './users.actions'
const initialState = {
    usersList: []
}

const createUser = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                usersList: [
                    ...state.usersList,
                    action.user
                ]
            }
        case DELETE:
            return {
                ...state,
                usersList: state.usersList.filter(e => e.id !== action.id)
            }
        default:
            return state;
    }
}

export default createUser;