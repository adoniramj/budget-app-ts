import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortBy, setStartDate, setEndDate } from "../redux/actions/filterAction";
import { State } from "../types/types";
//import DateRangePicker from react-dates


class ExpenseListFilters extends React.Component<any, any> {
  state = {
    calendarFocused: null
  }

  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }
  onFocusChange = (calendarFocused) => this.setState({ calendarFocused})
  render() {
    return (
      <div>
        <p style={{ background: "lightgray", color: "red" }}>
          ExpenseListFilters component. REMOVE WHEN DEPLOYING
        </p>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
      <select onChange={(e) => {
        console.log(e.target.value)
        this.props.dispatch(sortBy(e.target.value))
      }}>
          <option value="date">Order by date newest first</option>
          <option value="date_asc">Order by date oldest first</option>
          <option value="amount">Order by amount highest first</option>
          <option value="amount_asc">Order by amount smallest first</option>
      </select>
      <DateRangePicker
        startDate={this.props.filters.startDate}
        startDateId='startDate'
        endDate={this.props.filters.endDate}
        endDateId='endDate'
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
      />
      </div>
    );
  }
}
// const ExpenseListFilters = (props: State | any) => {
 
// };

const mapStateToProps = (state: State) => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
