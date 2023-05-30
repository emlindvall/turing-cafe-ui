import React, { Component } from 'react';
import './Reservations.css';

class Reservation extends Component {
  constructor(props) {
    super(props)
    this.state =  {
      reservations: props.reservations
    }
  }

  render = () =>  {
    console.log("in reservation component", this.state.reservations)
    return(
      <div>
        <p>reservations will go here</p>
      </div>
    )
  }
}

export default Reservation;