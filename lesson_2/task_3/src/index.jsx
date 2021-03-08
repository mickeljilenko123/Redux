import store from './store';
import { addUser, deleteUser } from './users.actions'

store.dispatch(addUser({id: 28, name: "Mikhailo"}));
store.dispatch(addUser({id: 30, name: "Anton"}));
store.dispatch(deleteUser(28))
console.log(store.getState());