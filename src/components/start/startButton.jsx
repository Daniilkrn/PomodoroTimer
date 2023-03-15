// import '../../scss/timer.scss'
const StartButton = ({isStart,setStart, setConfirm , isConfirm}) => {
    const start = () => {
        setStart(true)
    }

    return(
        <div className="stop" onClick={start}>
           Start
        </div>
    )
} 


export default StartButton