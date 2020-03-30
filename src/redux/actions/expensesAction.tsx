import { uuid } from 'uuidv4'

const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
  } = {}) => ({
    type: 'ADD_EXPENSE',
    expense : {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  }
)

const removeExpense = ({id}:any) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
}

export { addExpense, removeExpense }