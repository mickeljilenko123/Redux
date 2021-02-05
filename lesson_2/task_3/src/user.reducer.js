import { ADDUSER, DELETE } from './users.actions';
const initialState = {
    userList = []
}
export const addUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDUSER:
            return {
                ...state,
                userList: state.userList.concat(user)
            } //++
        case DELETE:
            return {
                ...state,
                userList: state.userList.filter(e => e.id !== 34)
            }
        default:
            return state;
    }
}