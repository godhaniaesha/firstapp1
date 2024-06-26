import React, { Component } from 'react'

export default class Timer extends Component {
    // 1  inishlize state value
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }
    
    tic = () => {
        this.setState ({
            time: new Date()
        });
    }

    // 3  get data in to server
    componentDidMount = () => {
      this.RefranceTime =  setInterval(() => this.tic(), 1000);
    }

    //4 used for after updating stste/props
    componentDidUpdate = (preProps, preState) => {
        if (this.state.time !== preState.time )  {
                 console.log("componentDidUpdate");       
        }
    }

    // 5 used to after nevigate 
    componentWillUnmount = () => {
       clearInterval(this.RefranceTime);
    }
    
    // 2 Display 
    render() {
        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        )
    }
}