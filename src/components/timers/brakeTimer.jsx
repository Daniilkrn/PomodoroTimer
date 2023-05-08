import {GiTomato} from 'react-icons/gi'
import React from 'react';
const BrakeTimer = ({minutes,seconds,countPomodoro}) => {

    return(
        <div className="brake_timer">
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

export default BrakeTimer