
import { Expense, ExpenseActionTypes } from '../types/types'

const expenseReducerDefaultState: Expense[] = []

//Reducer function have to be pure functions

const expensesReducer = (state = expenseReducerDefaultState, action: ExpenseActionTypes): Expense[] => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id)
    default:
      return state
  }
}

export default expensesReducer