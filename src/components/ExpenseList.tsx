import React from "react";
import { connect } from "react-redux";

//DATA TYPES
import { State, Expense }  from "../types/types"

//COMPONENTS
import ExpenseListItem from "./ExpenseListItem"
import ExpenseListFilters from './ExpenseListFilters'
import filteringExpenses from "../redux/filtering/filteringExpenses";

const ExpenseList = (props: any) => {
  return (
    <div style={{background: 'gray'}}>
      <p style={{ color: 'red' }}>ExpenseList component. REMOVE WHEN DEPLOYING</p>
      <h2>Expense List!</h2>
      <ExpenseListFilters />
      {
        props.expenses.map((expense: Expense) => (
        <ExpenseListItem key={expense.id} {...expense}/>
        ))
      }
      
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    expenses: filteringExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
