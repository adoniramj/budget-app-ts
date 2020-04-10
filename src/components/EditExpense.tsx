import React from 'react'
import { connect, ConnectedProps} from 'react-redux'
import  { State, Expense} from '../types/types'
import { NavLink } from 'react-router-dom'
import ExpenseForm from './ExpenseForm'
import { editExpense } from '../redux/actions/expensesAction'

//The argument to EditExpense comes from the connect method.
//connect combines all the props and sends them as an argument to EditExpense.
const EditExpense = (props: any) => {
  return(
    <div>
    This is the edit page
    <NavLink to='/'>Home</NavLink>
    {/* An interface is required in ExpenseForm to allow the props that are sent from this component */}
    <ExpenseForm 
      expense={props.expense}
      onSubmit={(expense: Expense) => {
        props.dispatch(editExpense(props.expense.id, expense))
        props.history.push('/')
      }} />
  </div>
)}

const mapStateToProps = (state: State, ownProps: any) => {
  //Route allows access of the match property to the EditExpense component.
  //ownProps is required to access the match property.
  return ({
    expense: state.expenses.find(expense => ownProps.match.params.id === expense.id)
  })
}


export default connect(mapStateToProps)(EditExpense)