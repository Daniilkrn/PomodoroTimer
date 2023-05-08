import React from 'react'
import { useEffect, useState } from 'react'
import TimingPlayer from './timingPlayer'
import { useSelector } from 'react-redux'

const ProgressBarAndTimer = ({minutesBlock, refW, minutes, seconds, audioBackground, playBackground, musicDependencies}) => {

    const defaultDuration = useSelector(state => state.musicDependencies.duration)
    const [timer,setTimer] = useState(0)
    
    /*progress*/
    const [filled,setFilled] = useState(0)

    useEffect(()=>{
        if(defaultDuration){
            setTimer(defaultDuration)
        } 
    },[defaultDuration,])

    /*progress useEffect*/
    useEffect(()=>{
        if(playBackground && minutesBlock > 0){
            setFilled(filled + (refW.current.clientWidth / parseInt(defaultDuration)))
        } 
        else {
            setFilled(0)
        }
    },[minutesBlock])

    return(
        <div className="musicBar">
            <div className="bar" style={{
                width: `${filled}px`,
                transition: '0.5s'
            }}>
            </div>
            <TimingPlayer minutes={minutes} seconds={seconds} minutesBlock={minutesBlock} 
            audioBackground={audioBackground} playBackground={playBackground} musicDependencies = {musicDependencies}></TimingPlayer>
        </div>
    )
} 

export default ProgressBarAndTimer