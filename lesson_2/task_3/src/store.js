import { createStore } from 'redux'
import { addUserReducer } from './user.reducer'

const store = createStore(addUserReducer);
export default store;