
import { Expense, ExpenseActionTypes } from '../../types/types'

const expenseReducerDefaultState: Expense[] = []

//Reducer functions have to be pure functions

const expensesReducer = (state = expenseReducerDefaultState, action: ExpenseActionTypes): Expense[] => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      if(action.expense.description){
        return [...state, action.expense]
      } else {
        return state //Required to exit switch if description is false
      }
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id)
    default:
      return state
  }
}

export default expensesReducer