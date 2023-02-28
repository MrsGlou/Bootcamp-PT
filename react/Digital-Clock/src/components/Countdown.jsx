import React, {useState, useEffect} from 'react'

const Countdown = () => {
    const [time, setTime] = useState("");
    useEffect(() => {
        //La fecha se puede cambiar
        let countDownDate = new Date("Feb 28, 2024 10:30:00").getTime();
        let x = setInterval (() =>{
            let now = new Date().getTime();            
            let distance = countDownDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

            if (distance < 0) {
                clearInterval(x)
                setTime("COUNTDOWN FINISHED")
            }
        }, 1000)
    }, []);
    return <div className="countdown">🗓️ {time}</div>;
}

export default Countdown;