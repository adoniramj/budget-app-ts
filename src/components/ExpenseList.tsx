import React from "react";
import { connect } from "react-redux";
import { State, Expense }  from "../types/types"
import ExpenseListItem from "./ExpenseListItem"
import ExpenseListFilters from './ExpenseListFilters'

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
    expenses: state.expenses
  };
};

export default connect(mapStateToProps)(ExpenseList);
