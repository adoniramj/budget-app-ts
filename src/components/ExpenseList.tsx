import React from 'react'
import { connect } from 'react-redux'


const ExpenseList: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <h2>Expense List</h2>
    </div>
  )
}

const mapStateToProps = (state: ) => {
  return {
    expenses: state.expenses
  }
}

export default connect(mapStateToProps)(ExpenseList)