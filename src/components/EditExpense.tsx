import React from 'react'
import { connect, ConnectedProps} from 'react-redux'
import  { State, Expense} from '../types/types'
import { NavLink } from 'react-router-dom'
import ExpenseForm from './ExpenseForm'
import { editExpense } from '../redux/actions/expensesAction'


// type PropsFromRedux = ConnectedProps<typeof connector>

// type Props = PropsFromRedux & {
//   expense: Object
// }
// interface UserProps {
  //   expense: Object,
  //   dispatch: Function
  // }
  
  const EditExpense = (props: any) => {
    console.log(props)
    return(
      <div>
      This is the edit page
      <NavLink to='/'>Home</NavLink>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense: Expense) => {
          props.dispatch(editExpense(expense))
        }} />
    </div>
)}

const mapStateToProps = (state: State, props: any) => {
  //Route allows access of the match property to the EditExpense component
  return ({
    expense: state.expenses.find(expense => props.match.params.id === expense.id)
  })
}


export default connect(mapStateToProps)(EditExpense)