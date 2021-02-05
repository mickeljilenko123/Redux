import './index.scss';
import store, { increment, decrement, reset } from './store';
const resultElem = document.querySelector('.counter__result');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const resetBtn = document.querySelector('[data-action="reset"]');

const onIncrement = () => {
    store.dispatch(increment())
}

incrementBtn.addEventListener('click', onIncrement)

const onDecrement = () => {
    store.dispatch(decrement())
}
decrementBtn.addEventListener('click', onDecrement)

const onReset = () => {
    store.dispatch(reset())
}
resetBtn.addEventListener('click', onReset)

store.subscribe(() => {
   const state = store.getState();
   const currentValue = state.value;
   const historyString = state.history.join(' ');
   resultElem.textContent = `${historyString} = ${currentValue}`;
})