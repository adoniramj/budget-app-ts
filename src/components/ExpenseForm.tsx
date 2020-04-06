//import React from 'react'
import React from 'react';
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

interface Props {}
interface State {
  calendarFocused: boolean
  createdAt: any
  description: string
  amount: string
}


class ExpenseForm extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props)
    this.state = {
      calendarFocused: false,
      createdAt: moment(),
      description: '',
      amount: ''
    }
  }

  onDateChange = (createdAt:any) => {
    if(createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }

  onFocusChange = ({ focused }:any) => {
    this.setState(() => ({ calendarFocused: focused}))
  }

  // https://blaipratdesaba.com/react-typescript-cheatsheet-form-elements-and-onchange-event-types-8c2baf03230c
  // https://github.com/desktop/desktop/issues/297
  onDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist()  //https://reactjs.org/docs/events.html#event-pooling
    this.setState(() => ({ description: event.target.value }))
  }

  onAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist()  //https://reactjs.org/docs/events.html#event-pooling
    this.setState(() =>({ amount: event.target.value }))
  }
  render() {
    return (
      <div>
        <form>

        <input
          type="text"
          placeholder="Description(required)"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}

        />
        <input 
          type="text"
          placeholder="Amount(required)"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          id='singleDate' //this property is required in tsx but will work in js if excluded
        />
        </form>
      </div>
    )
  }
}

export default ExpenseForm