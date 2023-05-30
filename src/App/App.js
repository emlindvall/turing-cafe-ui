import React, { Component } from 'react';
import './App.css';
import Reservations from '../components/Reservations/Reservations'
import Form from '../components/Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      error: "",
      reservations: []
    }
  }

  componentDidMount = () =>  {
    fetch("http://localhost:3001/api/v1/reservations")
    .then((response) => {
      if(!response.ok)  {
        throw new Error(`${response.status}`);
      } else {
        return response.json();
      }
    })
    .then((data) => this.setState({ reservations: data }))
    .catch((err)  => this.setState({  error: err  }))
  }

  render = () => {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
