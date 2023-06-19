import React, { useEffect, useState } from 'react'


const DigitalClock = () => {
    const [clockState, setClockState] = useState();
    useEffect (() =>{
        setInterval(()=>{
            const date = new Date ();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []);

  return (
    <div className='digital-clock'>🕐 {clockState}</div>
  )
}

export default DigitalClock;