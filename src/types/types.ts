export interface Expense {
  id?: string;
  description: string;
  note?: string;
  amount: number;
  createdAt: number;
}

export interface Filters {
  text: string;
  sortBy: "date" | "amount" | "date_asc" | "amount_asc";
  startDate: undefined;
  endDate: undefined;
}

export interface State {
  expenses: Expense[];
  filters: Filters;
}

const ADD_EXPENSE = "ADD_EXPENSE";
const EDIT_EXPENSE = "EDIT_EXPENSE";
const REMOVE_EXPENSE = "REMOVE_EXPENSE";
// const SET_EXPENSES = "SET_EXPENSES";


//Interfaces used in expenseActions.ts. Indicates what each action function returns to the reducer
export interface AddExpenseAction {
  type: typeof ADD_EXPENSE;
  expense: Expense;
}

export interface RemoveExpenseAction {
  type: typeof REMOVE_EXPENSE;
  id: string;
}

export interface EditExpenseAction {
  type: typeof EDIT_EXPENSE;
  expense: Expense;
}

export type ExpenseActionTypes =
  | EditExpenseAction
  | RemoveExpenseAction
  | AddExpenseAction;
