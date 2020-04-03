import React from 'react'
import { connect } from 'react-redux'
import  { State } from '../types/types'
import { NavLink } from 'react-router-dom'

const EditExpense = (props: any) => {
  console.log(props)
  //console.log(props.match.params.id)
  return(
  <div>
    This is the edit page
    <NavLink to='/'>Home</NavLink>
  </div>
)}

const mapStateToProps = (state: State, props: any) => {
  //Route allows access of the match property to the EditExpense component
  return ({
    expense: state.expenses.find(expense => props.match.params.id === expense.id)
  })
}

export default connect(mapStateToProps)(EditExpense)