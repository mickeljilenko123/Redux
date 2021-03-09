import { createStore, combineReducers } from 'redux';
import cartReducer from './cart.reducer';
import languageReducer from './language.reducer';
import userReducer from './user.reducer';
const appReducer = combineReducers({
    languageReducer,
    userReducer,
    cartReducer,
})
const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;