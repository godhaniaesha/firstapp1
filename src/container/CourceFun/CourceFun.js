import React, { useState } from 'react';
import FeesFun from '../FeesFun/FeesFun';

function CourceFun(props) {

    
    const [selectedCource, setSelectedCource] = useState('');

    function handleChange(event) {
        setSelectedCource(event.target.value);
        console.log(`Selected Course: ${event.target.value}`);
    }
    return (
        <div>
            <h1>Function Base Course</h1>

            <label htmlFor="cource"> Select a Course :   </label>
            <select id="cource" onChange={handleChange} value={selectedCource}>
                <option value="">Select Course</option>
                <option value="Full Stack">Full Stack</option>
                <option value="web designing">Web Designing</option>
                <option value="web development">Web Development</option>
                <option value="Android development">Android Development</option>
                <option value="Flutter development">Flutter Development</option>
            </select>

            {/* Pass selected course as props to Fees component */}
            <FeesFun course={selectedCource} x={10} />

        </div>
    );
}

export default CourceFun;