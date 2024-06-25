import React, { Component } from 'react'

export default class Fees extends Component {

    render() {
        let fees = '';
        switch (this.props.course) {
            case 'Full Stack':
                fees = '70,000';
                break;
            case 'web designing':
                fees = '20,000';
                break;
            case 'web development':
                fees = '30,000';
                break;
            case 'Android development':
                fees = '40,000';
                break;
            case 'Flutter development':
                fees = '60,000';
                break;
            default:
                fees = '';
                break;
        }
        return (
            <div>
                
                <p>Fees : {fees}</p>

            </div>
        )
    }
}
