import React from "react";
import { connect } from "react-redux";
import { State, Expense }  from "../redux/types/types"
import ExpenseListItem from "./ExpenseListItem"

const ExpenseList = (props: any) => {
  return (
    <div>
      <h2>Expense List!</h2>
      {
        props.expenses.map((expense: Expense) => (
        <ExpenseListItem key={expense.id} {...expense}/>
        ))}
      
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    expenses: state.expenses
  };
};

export default connect(mapStateToProps)(ExpenseList);
