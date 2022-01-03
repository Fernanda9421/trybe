const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const createColor = () => {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let color = '#';
  const randomColor = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    color += oneChar[randomColor()];
  }
  return color;
}

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      }
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      }
    case 'RANDOM_COLOR':
      return {
        ...state,
        colors: [...state.colors, createColor()],
        index: state.colors.length,
      }
    default:
      return state;
  };
}

const buttonNext = document.querySelector('#next');
buttonNext.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });
});

const buttonPrevious = document.querySelector('#previous');
buttonPrevious.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' });
});

const buttonRandom = document.querySelector('#randomColor');
buttonRandom.addEventListener('click', () => {
  store.dispatch({ type: 'RANDOM_COLOR'});
})

const store = Redux.createStore(reducer);

store.subscribe(() => {
  const { colors, index } = store.getState();
  document.querySelector('#value').innerHTML = colors[index];
  document.querySelector('#container').style.backgroundColor = colors[index];
});
