import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      date: "",
      time: "",
      number: 0
    }
  }

  clearInputs = () => {
    this.setState({ name: "", date: "", time: "", number: ""  })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
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
        <button className="button" onClick={this.clearInputs}> Make Reservation </button>
      </div>
    )
  }
}

export default Form;