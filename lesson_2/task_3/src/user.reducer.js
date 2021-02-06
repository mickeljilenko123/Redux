import { ADDUSER, DELETE } from './users.actions';
const initialState = {
    userList = []
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDUSER:
            return {
                ...state,
                userList: [
                    ...state,
                    action.user
                ]
            } //++
        case DELETE:
            return {
                ...state,
                userList: state.userList.filter(({ id }) => id !== action.id)
            }
        default:
            return state;
    }
}