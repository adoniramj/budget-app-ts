import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter } from '../redux/actions/filterAction'
import { State } from '../types/types'


const ExpenseListFilters = (props: State|any) => {
  return (
    <div>
      <p style={{background: "lightgray", color: 'red'}}>ExpenseListFilters component. REMOVE WHEN DEPLOYING</p>
      <input 
        type='text'
        value={props.filters.text}
        onChange={e =>{
          props.dispatch(setTextFilter(e.target.value))
        }}
      />
    </div>
  )
}

const mapStateToProps = (state: State) => ({
  filters: state.filters
})

export default connect(mapStateToProps)(ExpenseListFilters)