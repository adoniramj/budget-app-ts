import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/storeConfiguration'
import { addExpense, removeExpense } from './redux/actions/expensesAction'

import './index.css';
import App from './App';


store.subscribe(() => {
  const state = store.getState()
  console.log(state)
})

const item1 = store.dispatch(addExpense({ description: 'Gas bill', note: 'This payment is overdue', amount: 0, createdAt: 100}))
const item2 = store.dispatch(addExpense({ description: 'Rent', note: 'This payment is next month', amount: 100, createdAt: 200}))

const result = removeExpense(item1.expense)
store.dispatch(result)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
