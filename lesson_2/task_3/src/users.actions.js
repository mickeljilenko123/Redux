export const ADD = "ADD/USER";
export const DELETE = "DELETE/USER";

export const addUser = () => {
    return {
        type: ADD
    }
};
export const deleteUser = () => {
    return {
        type: DELETE
    }
}