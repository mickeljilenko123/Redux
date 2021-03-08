import store from './store';
import { addUser, deleteUser } from './users.actions'

store.dispatch(addUser({id: 28, name: "Mikhailo"}));
store.dispatch(addUser({id: 30, name: "Anton"}));
store.dispatch(addUser({id: 36, name: "Anton11"}));
console.log(store.getState());

