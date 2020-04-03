import { Expense, Filters} from '../../types/types'

const filteringExpenses = (expenses: Expense[], filters: Filters):Expense[] => {
  return expenses.filter( element => {
    const textMatch = element.description.toLowerCase().includes(filters.text.toLowerCase())
    return textMatch
  })
}

export default filteringExpenses