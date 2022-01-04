const showCountValue = (counter) => {
  const titleValue = document.querySelector('#counter');
  titleValue.innerHTML = counter;
}

showCountValue(0);

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
  const types = {
    INCREMENT: { number: state.number + 1 },
    DECREMENT: { number: state.number - 1 },
  };

  return types[action.type];

  // switch(action.type) {
  //   case INCREMENT:
  //     return {
  //       number: state.number + 1,
  //     }
  //   case DECREMENT:
  //     return {
  //       number: state.number - 1,
  //     }
  //   default:
  //     return state;
  // }
}

// STORE
const store = Redux.createStore(reducer);

store.subscribe(() => {
  const { number } = store.getState();
  showCountValue(number);
});

const btnInc = document.querySelector('#inc');
const btnDec = document.querySelector('#dec');

btnInc.addEventListener('click', actionInc);
btnDec.addEventListener('click', actionDec);
