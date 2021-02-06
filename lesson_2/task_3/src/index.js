import store from './store'
import { addUser, deleteUser } from './user.actions'

store.dispatch(addUser({ id: 34, name: 'Tom' }));
store.dispatch(deleteUser(34));
console.log(store.getState());
store.subscribe(() => {
    console.log(store.getState());
})