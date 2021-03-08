import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions'
const initialState = {
    userList: [],
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                userList: state.userList.concat(action.payload.userData),
            }
        case DELETE_USER:
            return {
                ...state,
                userList: state.userList.filter(e => e.id !== action.payload.userId),
            }
        case UPDATE_USER:
            const newList = state.userList.map(e => {
                if (e.id === action.payload.userData) {
                    return {
                        ...user,
                        ...action.payload.userData,
                    };
                }
                return e;
            });
            return {
                ...state,
                userList: newList,
            }
        default:
            return state;
    }
}
export default usersReducer;