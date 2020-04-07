//import React from 'react'
import React from 'react';
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'


interface UserProps {
  onSubmit: Function
}
interface State {
  calendarFocused: boolean
  createdAt: any
  description: string
  amount: string
  note?: string,
  error: string
}

class ExpenseForm extends React.Component<UserProps, State>{
  constructor(props: any) {
    super(props)
    this.state = {
      calendarFocused: false,
      createdAt: moment(),
      description: '',
      amount: '',
      note: '',
      error: ''
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
    event.persist()
    const amount = event.target.value 
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() =>({ amount: event.target.value }))
    }
  }

  onNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.persist()
    this.setState(() => ({ note: event.target.value }))
  }

  onSubmit = (event: React.FormEvent):void => {
    event.preventDefault()
    if(!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Description and amount are required!'}))
    } else {
      this.setState(() => ({ error: ''}))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
   
  }

  render() {
    console.log('class component')
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name='description'
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
        <textarea
          placeholder="Notes(optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <button
          >Submit form
        </button>
        </form>
        {
          this.state.error && <p>{this.state.error}</p>
        }
      </div>
    )
  }
}

export default ExpenseForm