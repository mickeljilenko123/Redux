import { SET_USER, REMOVE_USER } from './user.actions'
const initialState = {
    user: []
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: state.user.concat(action.payload.userData),
            }
        case REMOVE_USER:
            return {
                ...state,
                user: state.user.filter(e => e !== action.payload.userData),
            }
        default:
            return state;
    }
}
export default userReducer;