const ADDUSER = 'ADDUSER'
const DELETE = 'DELETE'
export const addUser = (user) => {
    return {
        type: ADDUSER,
        user
    }
};

export const deleteUser = (id) => {
    return {
        type: DELETE,
        id
    }
}