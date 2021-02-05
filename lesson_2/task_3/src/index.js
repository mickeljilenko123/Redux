import store from './store'
import { addUser } from './user.action'

store.dispatch(addUser());


console.log(store.getState());
store.subscribe(() => {
    console.log(store.getState());
})