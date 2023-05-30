import React, { Component } from 'react';
import './ReservationCard.css';

const ReservationCard = (key, id, date, name, number, time) => {
  return(
    <div className="reservation-container" id={name}>
      <h4>{key.name}</h4>
      <p>{key.date}</p>
      <p>{key.time}</p>
      <p>Number of guests: {key.number}</p>
      <button>Cancel</button>
    </div>
  )
} 

export default ReservationCard;