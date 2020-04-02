import React from 'react'
import { NavLink } from 'react-router-dom'
import moment from 'moment'


const ExpenseListItem = (props: any) => {
  return (
    <div>
      <NavLink to={`/edit/${props.id}`}>
        <h3>Description: {props.description}</h3>
      </NavLink>
      <p>Date: {moment(props.createdAt).format('DD MMM YYYY')}</p>
      <p>Note: {props.note}</p>
      <p>Amount: {props.amount}</p>
    </div>
  )
}

export default ExpenseListItem