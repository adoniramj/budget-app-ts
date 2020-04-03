import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/storeConfiguration";

import AppRouter from "./routers/AppRouter";

import { addExpense, removeExpense } from "./redux/actions/expensesAction";
import {
  setTextFilter,
  sortByAmount,
  sortByDate
} from "./redux/actions/filterAction";
import "./index.css";

store.subscribe(() => {
  const state = store.getState();
  //console.log(state);
});
//BEGINNING OF TEST DATA
const item1 = store.dispatch(
  addExpense({
    description: "Gas bill",
    note: "This payment is overdue",
    amount: 0,
    createdAt: 1530000000000
  })
);
const item2 = store.dispatch(
  addExpense({
    description: "Rent",
    note: "This payment is next month",
    amount: 100,
    createdAt: 1540000000000
  })
);
store.dispatch(
  addExpense({
    description: "",
    note: "This payment is next month",
    amount: 100,
    createdAt: 1540000000000
  })
);
store.dispatch(
  addExpense({
    description: "Car payment",
    note: "This payment is next month",
    amount: 200,
    createdAt: 1550000000000
  })
);
store.dispatch(
  addExpense({
    description: "Cable bill",
    note: "This payment is next month",
    amount: 100,
    createdAt: 1520000000000
  })
);
store.dispatch(
  addExpense({
    description: "Gym membership",
    note: "This payment is next month",
    amount: 100,
    createdAt: 1510000000000
  })
);
// store.dispatch(setTextFilter('Bill'))
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

//store.dispatch(removeExpense(item1.expense))
//END OF TEST DATA
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
