export const addUserReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADDUSER':
            return state.concat({ id: 34, name: 'Tom' }) //++
        case 'DELETE':
            return state.filter(e => e.id !== 34) //--
        default:
            return state;
    }
}