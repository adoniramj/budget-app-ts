
import { Expense, ExpenseActionTypes } from '../../types/types'

const expenseReducerDefaultState: Expense[] = []

//Reducer functions have to be pure functions

//The reducer updates the state. The expenses state is an array with object of the type Expense that is why this reducer returns Expense[]
const expensesReducer = (state = expenseReducerDefaultState, action: ExpenseActionTypes): Expense[] => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      if(action.expense.description){
        return [...state, action.expense] //using the spread operator to add new expense
      } else {
        return state //Required to exit switch if description is false
      }
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id) //destructuring id from the action object
    default:
      return state
  }
}

export default expensesReducer