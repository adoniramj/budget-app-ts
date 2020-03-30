import { createStore, combineReducers } from 'redux'
import expenseReducer from './reducers/expensesReducer'

const reducers = combineReducers({
  expenses: expenseReducer
})

export default createStore(reducers)