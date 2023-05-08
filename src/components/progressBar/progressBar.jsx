import { useEffect } from 'react'
import { useState, useRef, } from 'react'
import { useSelector } from 'react-redux';

import '../../scss/progressBar.scss'

const ProgressBar = ({minutesBlock, startedTimer, brakeBlock, longBrakePB}) => {

    const defaultSession = useSelector(state => state.sessions.countDefaultSession);
    const defaultBrake = useSelector(state => state.sessions.countDefaultBrake);
    const defaultLongBrake = useSelector(state => state.sessions.countDefaultLongTimer);

    const [filled,setFilled] = useState(0)
    const [filledBrake, setFilledBrake] = useState(0)
    const [filledLongBrake, setFilledLongBrake] = useState(0)
    const [percentCount,setPercent] = useState(0)
    const refWidth = useRef()
    useEffect(()=>{
        if(startedTimer && minutesBlock > 0){
            setFilled(filled + (refWidth.current.clientWidth / parseInt(defaultSession * 60)))
            setPercent(percentCount + 100/(defaultSession * 60))  
        } 
        else {
            setFilled(0)
            setPercent(0)
        }
    },[minutesBlock])

    useEffect(()=>{
        if(startedTimer && brakeBlock > 0){
            setFilledBrake(filledBrake + (refWidth.current.clientWidth / parseInt(defaultBrake * 60)))
            setPercent(percentCount + 100/(defaultBrake * 60))
        } 
        else {
            setFilledBrake(0)
            setPercent(0)
        }   
    },[brakeBlock])

    useEffect(()=>{
        if(startedTimer && longBrakePB > 0){
            setFilledLongBrake(filledLongBrake + (refWidth.current.clientWidth / parseInt(defaultLongBrake * 60)))
            setPercent(percentCount + 100/(defaultLongBrake * 60))
        } 
        else {
            setFilledLongBrake(0)
            setPercent(0)
        }   
    },[longBrakePB])

    return (
        <div className="progress_block">
            <div className='percent' style={{
                fontSize:'26px'
            }}>
                {Math.trunc(percentCount)}%
            </div>
            <div ref = {refWidth} className="ProgressBar_container" style={{
                justifyContent: 'flex-start',
            }}>
                <div className="bar" style={{
                    width: `${filled||filledBrake||filledLongBrake}px`,
                    transition: '0.5s'
                    
                }}>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar

