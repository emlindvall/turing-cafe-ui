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

  render = () =>  {
    return(
      <div className="booking-container">
          <form>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            className="form-field"
            // onChange={event => this.handleChange(event)}
          />
          <input
            type="date"
            placeholder="Date (mm/dd)"
            value={this.state.date}
            className="form-field"
            // onChange={event => this.handleChange(event)}
          />
          <input
            type="time"
            placeholder="Time"
            value={this.state.time}
            className="form-field"
            // onChange={event => this.handleChange(event)}
          />
          <input
            type="number"
            placeholder="Number of guests"
            value={this.state.number}
            className="form-field"
            // onChange={event => this.handleChange(event)}
          />
        </form>
        <button className="button"> Make Reservation </button>
      </div>
    )
  }
}

export default Form;