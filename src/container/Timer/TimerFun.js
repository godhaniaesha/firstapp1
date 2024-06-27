import React, { useEffect, useState } from 'react';

function TimerFun(props) {
    // 1   Mounting
    const [time, setTime] = useState(new Date());

    const tic = () => {
        setTime(new Date());
    }
    //3 componentDidMount
    useEffect(() => {
        const interval = setInterval(tic, 1000);

        //5 componentWillUnmount
        return () => {
            clearInterval(interval);
        };

        //4 componentDidUpdate
    }, [])


    // 2   render : display
    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default TimerFun;

//utgh4d3