// ACTION TYPES
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// ACTIONS
const actionInc = () => {
  store.dispatch({ type: INCREMENT });
};

const actionDec = () => {
  store.dispatch({ type: DECREMENT });
};

const INITIAL_STATE = {
  number: 0,
};

// REDUCER
const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        number: state.number + 1,
      }
    case DECREMENT:
      return {
        number: state.number - 1,
      }
    default:
      return state;
  }
}

// STORE
const store = Redux.createStore(reducer);

store.subscribe(() => {
  const { number } = store.getState();
  console.log(number);
})
