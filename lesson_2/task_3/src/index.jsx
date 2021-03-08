import store from './store';
import { addUser, deleteUser } from './users.actions'

store.dispatch(addUser());
console.log(store.getState());