import store, { increment, decrement, reset } from './store';
import './index.scss';


const resultElement = document.querySelector('.counter__result');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const resetBtn = document.querySelector('[data-action="reset"]');

const onIncrement = () => {
    store.dispatch(increment());
}
incrementBtn.addEventListener('click', onIncrement);

const onDecrement = () => {
    store.dispatch(decrement());
}
decrementBtn.addEventListener('click', onDecrement);

const onReset = () => {
   store.dispatch(reset());
}
resetBtn.addEventListener('click', onReset);

store.subscribe(() => {
    const state = store.getState();
    const currentValue = state.history.reduce((acc, value) => {
       return acc + value;
    },0);
    const historyString = state.history.map(e => e > 0 ? '+' + e : e).join('');
    resultElement.textContent =
    state.history.length === 0 
    ? '' 
    : `${historyString} = ${currentValue}`;
})