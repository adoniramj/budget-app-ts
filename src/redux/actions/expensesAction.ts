import { uuid } from 'uuidv4'

import { Expense, ExpenseActionTypes } from '../../types/types'

//The return value of each function is the action argument in expensesReducer function
//These functions are executes via the dispatch method of the store object
export const addExpense = ({description = '', note = '', amount = 0, createdAt = 0}: Expense): ExpenseActionTypes => (
    { //argument input comes from ExpenseForm. The argument object is destructured to create the new action object that includes id.
      type: 'ADD_EXPENSE',
      expense: {
        id: uuid(),
        description,//the expensesReducer will return the previous state if addExpense sends an object where description is falsy.
        note,
        amount,
        createdAt
      }
    })

export const removeExpense = (id: string): ExpenseActionTypes => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const editExpense = (id: string, updates: Expense): ExpenseActionTypes => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  })


