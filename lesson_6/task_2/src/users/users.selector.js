export const isFetchingSelector = state =>
    state.users.isFetching;
export default isFetchingSelector;

export const userDataSelector = state =>
    state.users.userData;