const ADDUSER = 'ADDUSER'
const DELETE = 'DELETE'
export const addUser = () => {
    return {
        type: ADDUSER,
    }
};

export const deleteUser = () => {
    return {
        type: DELETE,
    }
}