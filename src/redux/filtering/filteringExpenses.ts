import { Expense, Filters } from "../../types/types";

const filteringExpenses = (expenses: Expense[], filters: Filters): Expense[] => {
  return expenses
  .filter((element):boolean => {
    const textMatch = element.description.toLowerCase().includes(filters.text.toLowerCase());
      return textMatch;
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
