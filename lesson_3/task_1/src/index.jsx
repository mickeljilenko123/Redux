import store from './store';
import { addUser, deleteUser, updateUser  } from './users.actions';
import { increment, decrement, reset } from "./counter.actions";

store.subscribe(() => console.log(store.getState()))

// store.dispatch(addUser({ id: 76, name: 'Sarah' }));
// store.dispatch(addUser({ id: 15, name: 'Alex' }));

// store.dispatch(deleteUser(15));
// console.log(store.getState())

store.dispatch(addUser({id: 1, name: 'Roli'}))

store.dispatch(updateUser(1, { id: 56, name: 'Jane', age: 23 }));
