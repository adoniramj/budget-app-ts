import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortBy } from "../redux/actions/filterAction";
import { State } from "../types/types";

//to change the state in filters.
const ExpenseListFilters = (props: State | any) => {
  return (
    <div>
      <p style={{ background: "lightgray", color: "red" }}>
        ExpenseListFilters component. REMOVE WHEN DEPLOYING
      </p>
      <input
        type="text"
        value={props.filters.text}
        onChange={e => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      />
    <select onChange={(e) => {
      console.log(e.target.value)
      props.dispatch(sortBy(e.target.value))
    }}>
        <option value="date">Order by date newest first</option>
        <option value="date_asc">Order by date oldest first</option>
        <option value="amount">Order by amount highest first</option>
        <option value="amount_asc">Order by amount smallest first</option>
    </select>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
