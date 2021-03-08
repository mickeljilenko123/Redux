import { ADD, DELETE } from './users.actions'
const initialState = {
    userList: []
}

const createUser = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                userList: state.userList.concat({ id: 76, name: 'Sarah' })
            }
        case DELETE:
            return {
                ...state,
                userList: state.userList.filter(e => e.id !== 76)
            }
    }
}

export default createUser;