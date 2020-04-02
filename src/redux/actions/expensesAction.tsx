import { uuid } from 'uuidv4'

import { Expense, AddExpenseAction, RemoveExpenseAction, EditExpenseAction} from '../types/types'

//The return value of each function is the action argument in expensesReducer function

export const addExpense = (expense: Expense): AddExpenseAction => ({
  type: 'ADD_EXPENSE',
  expense
})

export const removeExpense = (id: string): RemoveExpenseAction => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const editExpense = (expense: Expense):EditExpenseAction => ({
    type: 'EDIT_EXPENSE',
    expense
  })


