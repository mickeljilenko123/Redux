import { createStore } from 'redux';
import createUser from './users.reducer';
const store = createStore(createUser);
export default store;