import {GiTomato} from 'react-icons/gi'


const SessionTimer = ({minutes,seconds,countPomodoro}) => {



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


export default SessionTimer