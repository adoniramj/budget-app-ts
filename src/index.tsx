import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/storeConfiguration'

import AppRouter from './routers/AppRouter' 

import { addExpense, removeExpense } from './redux/actions/expensesAction'
import { setTextFilter, sortByAmount, sortByDate } from './redux/actions/filterAction'
import './index.css';



store.subscribe(() => {
  const state = store.getState()
  console.log(state)
})
//BEGINNING OF TEST DATA
const item1 = store.dispatch(addExpense({ description: 'Gas bill', note: 'This payment is overdue', amount: 0, createdAt: 100}))
const item2 = store.dispatch(addExpense({ description: 'Rent', note: 'This payment is next month', amount: 100, createdAt: 200}))

store.dispatch(setTextFilter('Bill'))
store.dispatch(sortByAmount())
store.dispatch(sortByDate())

store.dispatch(removeExpense(item1.expense))
//END OF TEST DATA
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
