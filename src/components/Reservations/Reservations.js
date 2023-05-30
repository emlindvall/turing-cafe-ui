import React, { Component } from 'react';
import './Reservations.css';
import ReservationCard from '../ReservationCard/ReservationCard';

const Reservations = ({ reservations  }) => {
  const reservationCards = reservations.map(reservation =>  {
    return(
      <ReservationCard 
        key={reservation.id}
        id={reservation.id}
        date={reservation.date}
        name={reservation.name}
        number={reservation.number}
        time={reservation.time}
      />
    )
  })

  return(
    <div className="reservation-grid">
      {reservationCards}
    </div>
  )
}

export default Reservations;