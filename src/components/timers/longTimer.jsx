import {GiTomato} from 'react-icons/gi'
import React from 'react'
const LongTimer = ({countPomodoro, minutes, seconds}) => {
    return(
        <div className="timer_circle">
            <p className="counterPomodoro">{`pomodoros: ${countPomodoro}`}
                <span><GiTomato size={40}/></span>
            </p>
            <div className="timer_body">
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </div>
        </div>
    )
} 


export default LongTimer