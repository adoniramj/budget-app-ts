import { Expense, Filters } from "../../types/types";
import moment from 'moment'

const filteringExpenses = (expenses: Expense[], filters: Filters): Expense[] => {
  return expenses
  .filter((expense):boolean => { 
    const createdAtMoment = moment(expense.createdAt)
    const startDateMatch = filters.startDate ? filters.startDate.isSameOrBefore(createdAtMoment, 'day') : true
    const endDateMatch = filters.endDate ? filters.endDate.isSameOrAfter(createdAtMoment, 'day') : true
    const textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase());
      return textMatch && startDateMatch && endDateMatch;
  })
  .sort((a:Expense, b:Expense): number => {
    switch(filters.sortBy){
      case 'date':
        return a.createdAt < b.createdAt ? 1 : -1;
      case 'date_asc':
        return a.createdAt < b.createdAt ? -1 : 1;
      case 'amount':
        return a.amount < b.amount ? 1 : -1
      case 'amount_asc':
        return a.amount < b.amount ? -1 : 1
    }
  })
};

export default filteringExpenses;
