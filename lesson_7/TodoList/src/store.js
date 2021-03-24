import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import taskReducer from './tasks/tasksReducers';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    tasks: taskReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;