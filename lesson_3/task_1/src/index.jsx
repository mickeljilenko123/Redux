import store from './store';
import { addProduct, removeProduct } from './cart.actions';
import { setLanguage } from './language.actions';
import { setUser, removeUser } from './user.actions';


store.dispatch(setLanguage('en'));
store.dispatch(addProduct({ id: 76, name: 'milk' }));
store.dispatch(setUser({ name: 'Bob' }));
console.log(store.getState());
