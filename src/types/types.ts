import moment from 'moment' 

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
  startDate: moment.Moment;
  endDate: moment.Moment;
}

export interface State {
  expenses: Expense[];
  filters: Filters;
}

const ADD_EXPENSE = "ADD_EXPENSE";
const EDIT_EXPENSE = "EDIT_EXPENSE";
const REMOVE_EXPENSE = "REMOVE_EXPENSE";
const SET_EXPENSES = "SET_EXPENSES";


//Interfaces used in expenseActions.ts. Indicates what each action function returns to the reducer.
export interface AddExpenseAction {
  type: "ADD_EXPENSE";
  expense: Expense;
}

export interface RemoveExpenseAction {
  type: "REMOVE_EXPENSE";
  id: string;
}

export interface EditExpenseAction {
  type: "EDIT_EXPENSE";
  id: string;
  updates: Expense;
}

export interface SetExpenseAction {
  type: "SET_EXPENSES";
  expenses: Expense[];
}

export type ExpenseActionTypes =
  | EditExpenseAction
  | RemoveExpenseAction
  | AddExpenseAction
  | SetExpenseAction;


export interface SetTextFilter {
  type: "SET_TEXT_FILTER";
  text: string
}

export interface SortByAmount {
  type: "SORT_BY_AMOUNT"
}

export type FilterActionTypes = SetTextFilter | SortByAmount


export type AllActionTypes = ExpenseActionTypes | FilterActionTypes