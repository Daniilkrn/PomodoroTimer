const StartButton = ({setStart}) => {
    
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