import React from 'react'
import { connect } from 'react-redux'
import { addExpense } from '../redux/actions/expensesAction'

import ExpenseForm from './ExpenseForm'

const AddExpense = (props: any):JSX.Element => (
    <div>
      <p>This is the AddExpenseComponent. </p>
      <ExpenseForm onSubmit={(expense: any) => {
        props.dispatch(addExpense(expense))
        props.history.push('/')
      }} />
    </div>
  )
  
// requires connect() to access dispatch
export default connect()(AddExpense)