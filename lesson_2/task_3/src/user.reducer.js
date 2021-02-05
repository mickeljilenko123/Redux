import { ADDUSER, DELETE } from './users.actions';
const initialState = {
    userList = []
}
export const addUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDUSER:
            return {
                ...state,
                userList: state.userList.concat({ id: 34, name: 'Tom' })
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