import { createStore } from 'redux';

const INCREMENT = "COUNTER/INREMENT";
const DECREMENT = "COUNTER/DECREMENT";

const increment = () => {
    return {
        type: INCREMENT 
    } 
}

const decrement = () => {
   return {
        type: DECREMENT
    }
}

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case INCREMENT :
            return state + 1;
        case DECREMENT :
            return state - 1;
        default:
            return state;        
    }
}
const store = createStore(counterReducer);
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
console.log(store.getState());