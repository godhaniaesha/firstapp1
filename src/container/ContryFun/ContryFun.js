import React from 'react';
import { useState } from 'react';

// sc = rfc
//  function base component
// hook usestata
const ContryFun = () => {
    const [contry, setContry] = useState('India')
    function handleClick() {
        
        setContry('Canada');
      }

    return (
        <div>
            <h1>Contry function base component </h1>
            <h1>Countryname function {contry} component </h1>
            <button onClick={handleClick}>Update</button>
        </div>
    );
};

export default ContryFun;


