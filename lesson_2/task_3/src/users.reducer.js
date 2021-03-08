import { ADD, DELETE } from './users.actions'
const initialState = {
    userList: []
}

const createUser = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                userList: [
                    ...state.userList,
                    action.user
                ]
            }
        case DELETE:
            return {
                ...state,
                userList: state.userList.filter(e => e.id !== action.id)
            }
    }
}

export default createUser;