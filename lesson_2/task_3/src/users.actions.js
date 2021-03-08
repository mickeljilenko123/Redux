export const ADD = "ADD/USER";
export const DELETE = "DELETE/USER";

export const addUser = (user) => {
    return {
        type: ADD,
        user
    }
};
export const deleteUser = (id) => {
    return {
        type: DELETE,
        id
    }
}