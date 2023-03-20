
import {useState, useEffect,} from 'react';
import StartButton from './start/startButton';
import {padZero} from '../Pad/padZeros.jsx'
import {RiRestartLine} from 'react-icons/ri'
import outOfTimer from '../../src/sounds/clockEndSound2.mp3'
import ProgressBar from '../components/progressBar/progressBar.jsx'
import 'react-circular-progressbar/dist/styles.css';
import BrakeTimer from './timers/brakeTimer';
import SessionTimer from './timers/sessionTimer';
import { useSelector, useDispatch } from 'react-redux';
import { setDefaultSession, setflagToSettingLT } from '../store/reducers2/sessionSlice';
import { setModalSettingFromTimer } from '../store/reducers2/popUpChecker';
import { setClickedFlag } from '../store/reducers2/popUpChecker';
import { setStartedDeafult } from '../store/reducers2/musicTimerDepend';
import { setClickedFlagBurger } from '../store/reducers2/popUpChecker';
import '../scss/timer.scss'
import LongTimer from './timers/longTimer';
import {FiSettings} from 'react-icons/fi'

const Timer = () => {    
    const defaultClickedFlagBurger = useSelector(state => state.popUp2.clickedFlagBurger)
    const defaultSetflagToSettingLT = useSelector(state => state.sessions.flagToSettingLT)
    const defaultSession = useSelector(state => state.sessions.countDefaultSession);
    const defaultBrake = useSelector(state => state.sessions.countDefaultBrake);
    const flag = useSelector(state => state.sessions.flag);
    const flagAutoPlay = useSelector(state => state.autoPlay.flag);
    const flagAutoLongPlay = useSelector(state => state.autoPlay.flagLongTimer);
    const defaultLongBrake = useSelector(state => state.sessions.countDefaultLongTimer);
    const defaultSetSetterLongTImer = useSelector(state => state.sessions.setterLongTImer)
    /*musicTimerDependencies*/
    const defaultMusicDependencies = useSelector(state => state.musicDependencies.startedDefault)
    /*setModalSettingFromTimer*/
    const defaultSetModalSettingFromTimer = useSelector(state => state.popUp2.modalSettingFromTimer)
    const clickedFlag = useSelector(state => state.popUp2.clickedFlag)
    const dispatch = useDispatch();
    
    const [stateCorrectBtn,setCorrectBtn] = useState({})

    /*pomodoros counter*/
    const [count, setCount] = useState(0)
    /*all counter stack*/
    const [countStack, setCountStack] = useState(0)
    
    const [isStart,setIsStart] = useState(false)
    const [minutesBlock,setMinutesBlock] = useState(defaultSession * 60)
    const [minutesBlockBrake,setMinutesBlockBrake] = useState(defaultBrake * 60)
    const [longBrake, setLongBrake] = useState(defaultLongBrake * 60)
    const [brake,setBrake] = useState(false)
    /*Confirm setter*/
    const [isConfirm, setConfirm] = useState(false)
    
    const minutes = padZero(Math.floor(minutesBlock / 60))
    const seconds = padZero(minutesBlock - minutes * 60) 
    const minutesBrake = padZero(Math.floor(minutesBlockBrake / 60))
    const secondsBrake = padZero(minutesBlockBrake - minutesBrake * 60)
    const minutesLong = padZero(Math.floor(longBrake / 60))
    const secondsLong = padZero(longBrake - minutesLong * 60) 
    /*soundEnd*/
    const [playing, setPlaying] = useState(false)
    const soundOfEndTimer = new Audio(outOfTimer)
    soundOfEndTimer.volume = 0.1
    soundOfEndTimer.loop = false
    
    /*ProgressBar*/
    // const [isRunning,setIsRunning] = useState(false)
    
    /*setTimer if redux sessionMinutes > 0*/
    useEffect(()=>{
        if(flag){
            setMinutesBlock(defaultSession * 60)
        } 
    },[flag,dispatch,defaultSession])

    useEffect(()=>{
        if(minutesBlock === 0 && count != defaultSetSetterLongTImer){
            setPlaying(()=>soundOfEndTimer.play())
            setMinutesBlockBrake(defaultBrake * 60)
            setBrake(true)
            setIsStart(false)
            if(flagAutoPlay) setTimeout(()=>setIsStart(true),2000)  
        } 
    },[minutesBlock,])

    useEffect(()=>{
        if(minutesBlockBrake === 0 && count != defaultSetSetterLongTImer){
            setPlaying(()=>soundOfEndTimer.play())
            setMinutesBlock(defaultSession*60)
            setBrake(false)
            setIsStart(false)
            setCount(count + 1)
            setCountStack(countStack + 1)
        } 
       
    },[minutesBlockBrake])

    useEffect(()=>{
        if(count == defaultSetSetterLongTImer){
            setLongBrake(defaultLongBrake*60)
            setBrake(false)
            setIsStart(false)
            if(flagAutoLongPlay) setTimeout(()=>setIsStart(true),2000)
        } 
    },[count])

    useEffect(()=>{
        if(count == defaultSetSetterLongTImer && isStart){
            dispatch(setStartedDeafult(true))
        } 
    },[count,isStart])

    useEffect(()=>{
        if(count == defaultSetSetterLongTImer ){
            dispatch(setflagToSettingLT(true))
        } 
    },[count])

    
    useEffect(()=>{
        if(longBrake === 0){
            setPlaying(()=>soundOfEndTimer.play())
            setMinutesBlock(defaultSession*60)
            setBrake(false)
            setIsStart(false)
            setCountStack(countStack)
            setCount(0)
            dispatch(setflagToSettingLT(!defaultSetflagToSettingLT))
        } 
    },[longBrake])


    useEffect(() => {
        const interval = setInterval(()=>{
            isStart && count != defaultSetSetterLongTImer && setMinutesBlock((minutesBlock) => minutesBlock >=1 ? minutesBlock - 1 : 0)
            brake && isStart && count != defaultSetSetterLongTImer && setMinutesBlockBrake((minutesBlockBrake) => minutesBlockBrake >=1 ? minutesBlockBrake - 1 : 0)
            count == defaultSetSetterLongTImer && isStart && setLongBrake((longBrake) => longBrake >=1 ? longBrake - 1 : 0)
        },1000)
        if(isStart || brake || count == defaultSetSetterLongTImer){
            setCorrectBtn({
                opacity:'0.5',
                cursor: 'not-allowed'
            })
        } else {
            setCorrectBtn({opacity:'1'})
        }
        return () => {
            clearInterval(interval)
        }
    },[isStart])

    const stop = () => {
        setIsStart(false)    
        setConfirm(true)
    }

    const restart = () =>{
        setIsStart(false)
        setMinutesBlock(defaultSession * 60)
        setMinutesBlockBrake(defaultBrake * 60)
        setLongBrake(defaultLongBrake * 60)
    }

    const decrease = () => {
        if(!isStart && minutesBlock > 60){
            setMinutesBlock(minutesBlock - 60)
            dispatch(setDefaultSession((minutesBlock - 60)/60))    
        }
    }

    const increase = () => {
        if(!isStart){
            setMinutesBlock(minutesBlock + 60) 
            dispatch(setDefaultSession((minutesBlock + 60)/60))    
        } 
    }
    
    return(
            <div className="timer">
                <ProgressBar minutesBlock = {minutesBlock} brakeBlock = {minutesBlockBrake} longBrakePB = {longBrake}
                startedTimer = {isStart} percent={0}
                />
                <div className="desc">
                    <p className="timer_desc" style={{fonFamily:'Prompt', fontSize:'28px', padding:'10px', letterSpacing:'0.03em', color:'white'}}>
                        {count == defaultSetSetterLongTImer ? 'Long brake!' 
                            : 
                            brake ? 'Let\'s Brake! ' : 'Your Session!'
                        }
                    </p>
                </div>
                <div className="nav-plus-content">
                    <div className="circles">
                        {count == defaultSetSetterLongTImer && !brake ? <LongTimer countPomodoro = {countStack} minutes = {minutesLong} seconds = {secondsLong} />
                            :
                            brake ? 
                            <BrakeTimer minutes={minutesBrake} seconds={secondsBrake} countPomodoro = {countStack}/> 
                            :
                            <SessionTimer minutes={minutes} seconds={seconds} countPomodoro = {countStack}/>
                        }
                    </div>
                    <div className="nav">
                        <div className="nav_content">
                            <div className="buttons" style={{display:'flex',justifyContent:'space-between', alignItems: 'center'}}>
                                <div className="restart_button" style={{display:'flex',justifyContent:'center', alignItems: 'center'}}>
                                    <RiRestartLine size={70} color="gray" onClick={restart}/>
                                </div>
                                <div className="stop_start">
                                {
                                isStart ? <div className="start" style={{padding:'40px 80px', backgroundColor: 'white'}} onClick={stop}>
                                    Stop
                                </div>
                                : <StartButton isStart={isStart} setStart = {setIsStart}  
                                setConfirm = {setConfirm} isConfirm = {isConfirm}/>    
                                }
                                </div>
                            </div>
                            <div className="set_timer">
                                <div className="selectors">
                                    <div className="plus_" onClick={increase} style={stateCorrectBtn}>
                                        <span className="plus" ></span>
                                    </div>
                                    <div className="minus_" onClick={decrease} style={stateCorrectBtn}>
                                        <span className="minus"></span>
                                    </div>
                                </div>
                                {defaultClickedFlagBurger ? ''
                                    :
                                    <div className="toSetting2" onClick={() => {
                                        dispatch(setModalSettingFromTimer(true))
                                        dispatch(setClickedFlag(true))
                                        }}>
                                        <p>Settings</p>
                                        <div className="setting">
                                            <FiSettings size={38}/>
                                        </div>
                                    </div> 
                                    
                                }
                                {defaultClickedFlagBurger ? '' :
                                    <div className="toSetting" onClick={() => {
                                                dispatch(setModalSettingFromTimer(true))
                                                dispatch(setClickedFlag(true))
                                                dispatch(setClickedFlagBurger(true))
                                            }}>
                                        <p>Settings</p>
                                        <div className="setting">
                                            <FiSettings size={38}/>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Timer