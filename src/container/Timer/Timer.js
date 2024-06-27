import React, { Component } from 'react'

export default class Timer extends Component {
    // 1 Mounting : inishlize state value
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

    tic = () => {
        this.setState({
            time: new Date()
        });
    }

    // 3 componentDidMount : get data in to server
    componentDidMount = () => {
        this.RefranceTime = setInterval(() => this.tic(), 1000);
    }

    //4 componentDidUpdate : used for after updating stste/props
    componentDidUpdate = (preProps, preState) => {
        if (this.state.time !== preState.time) {
            console.log("componentDidUpdate");
        }
    }

    // 5 componentWillUnmount : used to after nevigate 
    componentWillUnmount = () => {
        clearInterval(this.RefranceTime);
    }

    // 2 render : Display 
    render() {
        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        )
    }
}