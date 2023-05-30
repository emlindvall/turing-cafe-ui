import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      date: "",
      time: "",
      number: 0
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  clearInputs = () => {
    this.setState({ name: "", date: "", time: "", number: ""  })
  }

  submitReservation = (event) => {
    event.preventDefault();
    const newReservation = {
     key: 10,
     id: 10,
     name: this.state.name,
     date: this.state.date,
     time: this.state.time,
     number: this.state.number
    }
    this.props.makeReservation(newReservation);
    this.clearInputs();
  }

  render = () =>  {
    return(
      <div className="booking-container">
          <form>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            className="form-field"
            onChange={event => this.handleChange(event)}
          />
          <input
            type="date"
            placeholder="Date (mm/dd)"
            name="date"
            value={this.state.date}
            className="form-field"
            onChange={event => this.handleChange(event)}
          />
          <input
            type="time"
            placeholder="Time"
            name="time"
            value={this.state.time}
            className="form-field"
            onChange={event => this.handleChange(event)}
          />
          <input
            type="number"
            placeholder="Number of guests"
            name="number"
            value={this.state.number}
            className="form-field"
            onChange={event => this.handleChange(event)}
          />
        </form>
        <button className="button" onClick={event => this.submitReservation(event)}> Make Reservation </button>
      </div>
    )
  }
}

export default Form;