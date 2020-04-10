import { createStore, combineReducers } from 'redux'
import expenseReducer from './reducers/expensesReducer'
import filtersReducer from './reducers/filtersReducer'

export const reducers = combineReducers({
  expenses: expenseReducer,
  filters: filtersReducer
})

export type AppState = ReturnType<typeof reducers>

//Creating store
export default createStore(reducers)