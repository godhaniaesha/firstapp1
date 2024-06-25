import React from 'react';

function CityFun(props) {
    return (
        <div>
            <p> hello !! {props.x}</p>
            <p>{props.cn === 'India' ? 'Surat' : 'New York'}</p>
        </div>
    );
}

export default CityFun;
