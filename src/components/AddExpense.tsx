import React from 'react'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
//import Expenseform from './Expenseform'

const AddExpense = () => {
  return (
    <div>
      <p>This is the AddExpenseComponent. </p>
      <ExpenseForm />
    </div>
  )
}

export default AddExpense