import store from './store';
import { addUser, deleteUser, updateUser  } from './users.actions';
import { increment, decrement, reset } from "./counter.actions";

store.dispatch(increment());
store.dispatch(addUser({id: 1, name: 'Tom'}))
store.dispatch(updateUser(2, {id: 3, name: "Roki"}))

console.log(store.getState());
