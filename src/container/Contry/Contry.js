import React, { Component } from 'react'

// sc = rcc 
// class base component
export default class Contry extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            countryname : 'India',
            population: '120 Billion'
        }
    }

    change = () => {
        this.setState({
            countryname : 'Canada',
            population: '80 Billion'
        })
        
    }

    
  render() {
    return (
      <div>
        <h1>Contry class base component  </h1>
        <p>{this.state.countryname}</p>
        <p>{this.state.population}</p>

        <button onClick={this.change}>Change Contry</button>

      </div>
    )
  }
}
