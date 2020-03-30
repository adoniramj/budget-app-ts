import { createStore, combineReducers } from 'redux'
import expenseReducer from './reducers/expensesReducer'
import filtersReducer from './reducers/filtersReducer'

const reducers = combineReducers({
  expenses: expenseReducer,
  filters: filtersReducer
})

export default createStore(reducers)