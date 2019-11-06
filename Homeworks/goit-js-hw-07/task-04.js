const refs = {
  blockWithButtons: document.querySelector('#counter'),
  spanOfCounter: document.querySelector('#value')
};
const state = {
  counterValue: 0,
  increment() {
    state.counterValue += 1;
    refs.spanOfCounter.textContent = state.counterValue;
  },
  decrement() {
    state.counterValue -= 1;
    refs.spanOfCounter.textContent = state.counterValue;
  }
};
const handleClicks = ({ target }) => state[target.dataset.action]();
refs.spanOfCounter.textContent = state.counterValue;
refs.blockWithButtons.addEventListener('click', handleClicks);
