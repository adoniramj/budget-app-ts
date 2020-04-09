import React from 'react'
import { connect } from 'react-redux'
import { addExpense } from '../redux/actions/expensesAction'
import { Expense } from '../types/types'
import ExpenseForm from './ExpenseForm'

const AddExpense:React.FunctionComponent<{}> = (props:any):JSX.Element => {

  return (
    <div>
      <p>This is the AddExpenseComponent. </p>
      <ExpenseForm onSubmit={(expense: Expense) => {
        props.dispatch(addExpense(expense))
        props.history.push('/')
      }} />
    </div>
  )}
  
// requires connect() to access dispatch
export default connect()(AddExpense)