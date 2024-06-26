import React, { useEffect, useState } from 'react';

function TimerFun(props) {
    // 1
    const [time, setTime] = useState(new Date());

    const tic = () => {
        setTime(new Date());
    }

    useEffect(() => {
        setInterval(tic, 1000)
    })


    // 2
    return (
        <div>
             <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default TimerFun;