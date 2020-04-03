import { uuid } from 'uuidv4'

import { Expense, AddExpenseAction, RemoveExpenseAction, EditExpenseAction} from '../../types/types'

//The return value of each function is the action argument in expensesReducer function

export const addExpense = ({description = '', note = '', amount = 0, createdAt = 0}: Expense): AddExpenseAction => (
    {
      type: 'ADD_EXPENSE',
      expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
      }
    })


export const removeExpense = (id: string): RemoveExpenseAction => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const editExpense = (expense: Expense):EditExpenseAction => ({
    type: 'EDIT_EXPENSE',
    expense
  })


