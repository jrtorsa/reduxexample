import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// STORE -- globalized state

// ACTION -- increment / decrement
// const increment = () => {
//   return {
//     type: 'INCREMENT',
//   };
// };
// const decrement = () => {
//   return {
//     type: 'DECREMENT',
//   };
// };

// REDUCER -- check what action happened
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// };

// let store = createStore(counter);

// Display it on  console
// store.subscribe(() => console.log(store.getState()));

// DISPATCH
// store.dispatch(increment());
// store.dispatch(decrement());
