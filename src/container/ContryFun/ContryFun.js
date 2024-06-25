import React from 'react';
import { useState } from 'react';
import CityFun from '../CityFun/CityFun';

// sc = rsf
//  function base component
// hook usestata
const ContryFun = () => {
    const [contry, setContry] = useState('India')
    const [population, setPopulation] = useState('35 Billion')
    function handleClick() {
        setContry('Canada');
        setPopulation('30 Billion')
      }

    return (
        <div>
            <h1>Contry function base component </h1>
            <p>Countryname  {contry}  </p>
            <p>population  {population}  </p>
            <button onClick={handleClick}>Update</button>

            <CityFun cn={contry} x={10}/>
        </div>
        
    );
};

export default ContryFun;


