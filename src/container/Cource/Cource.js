
import React, { Component } from 'react';
import Fees from '../Fees/Fees';

export default class Cource extends Component {
    constructor(props) {
        super(props);
        this.state = {

            selectedCource: ''
        };
    }

    handleChange = (event) => {
        this.setState({ selectedCource: event.target.value });
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>Class Base Course</h1>
                
                    <label htmlFor="cource"> Select a Course :   </label>
                    <select id="cource" onChange={this.handleChange} value={this.state.selectedCource}>
                        <option value="">Select Course</option>
                        <option value="Full Stack">Full Stack</option>
                        <option value="web designing">Web Designing</option>
                        <option value="web development">Web Development</option>
                        <option value="Android development">Android Development</option>
                        <option value="Flutter development">Flutter Development</option>
                    </select>

                    {/* Pass selected course as props to Fees component */}
                    <Fees course={this.state.selectedCource} x={10} />
                
            </div>
        );
    }
}
