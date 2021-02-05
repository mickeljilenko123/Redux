import store from './store'
import { addUser, deleteUser } from './user.action'

store.dispatch(addUser());
store.dispatch(deleteUser());


console.log(store.getState());
store.subscribe(() => {
    console.log(store.getState());
})