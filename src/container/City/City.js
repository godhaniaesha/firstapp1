
import React, { Component } from 'react'

export default class City extends Component {
    render() {
        return (
            <div>
                <p>hello {this.props.x}</p>
                <p>this is {this.props.cn}</p>
            </div>
        )
    }
}
