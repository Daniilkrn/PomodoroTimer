import { useState, useRef, useEffect} from "react"
import SavePopUp from "../../../UI/savePopUp"
import {CSSTransition} from "react-transition-group"

import { useSelector, useDispatch } from "react-redux"
import { setDefaultSession } from "../../../store/reducers2/sessionSlice"
import { setDefaultBrake } from "../../../store/reducers2/sessionSlice"
import { setFlag } from "../../../store/reducers2/sessionSlice"
import { setDefaultAutoPlay } from "../../../store/reducers2/autoPlaySettings"
import { setDefaultLongTimer } from "../../../store/reducers2/sessionSlice"
import { setFlagLongTimer } from "../../../store/reducers2/autoPlaySettings"
import { setSetterLongTImer } from "../../../store/reducers2/sessionSlice"
import { setModalSettingFromTimer } from "../../../store/reducers2/popUpChecker"
import { setClickedFlag } from "../../../store/reducers2/popUpChecker"
import { setClickedFlagBurger } from "../../../store/reducers2/popUpChecker"
import SavePopUp2 from "../../../Pages/savePopUp2"
import swal from "sweetalert"
// import { store } from "../../../store/store"

const ModalSettings = ({setModalSetting,}) => {
    const defaultClickedFlagBurger = useSelector(state => state.popUp2.clickedFlagBurger)
    const defaultSetflagToSettingLT = useSelector(state => state.sessions.flagToSettingLT)
    const defaultSession = useSelector(state => state.sessions.countDefaultSession);
    const defaultBrake = useSelector(state => state.sessions.countDefaultBrake);
    const defaultAutoPlay = useSelector(state => state.autoPlay.flag);
    const defaultLongTimerAutoPlay = useSelector(state => state.autoPlay.flagLongTimer);
    const defaultLongBrake = useSelector(state => state.sessions.countDefaultLongTimer);
    const defaultSetSetterLongTImer = useSelector(state => state.sessions.setterLongTImer)
    const defaultSetModalSettingFromTimer = useSelector(state => state.popUp2.modalSettingFromTimer)
    const clickedFlag = useSelector(state => state.popUp2.clickedFlag)
    let popUp2 = useSelector(state => state.popUp2.checked);
    const dispatch = useDispatch();
    
    const [valueSession, setValueSession] = useState(defaultSession)
    const [settingBrake, setSettingBrake] = useState(defaultBrake)
    const [settingLongTimer, setSettingLongTimer] = useState(defaultLongBrake)
    const [spanIsClose, setSpanClose] = useState(false)
    const [savePopUpAction, setSavePopUpAction] = useState(false)
      
    /*setSetter long timer*/
    const [settingSetterLT, setSettingSetterLT] = useState(defaultSetSetterLongTImer)
    /*autoPlayBrake handler*/
    const [autoPlayBrake, setAutoPlayBrake] = useState(defaultAutoPlay)
    /*autoPlayLongBrakeTimer handler*/
    const [autoPlayLongBrake, setAutoPlayLongBrake] = useState(defaultLongTimerAutoPlay)
    /*popUp2 checker state*/
    const [spanPopUp, setSpanPopUp] = useState(false)
    
    const nodeRef = useRef(null);
    const regexp = /^[0-9]+$/gm

    const spanHandler = () => {
        if(valueSession == defaultSession && settingBrake == defaultBrake && settingLongTimer == defaultLongBrake && settingSetterLT == defaultSetSetterLongTImer &&
            autoPlayBrake == defaultAutoPlay && settingSetterLT == defaultSetSetterLongTImer){
            setSpanClose(true)
            setTimeout(()=>{
                setModalSetting(false)
            },500)
            setTimeout(()=>{
                dispatch(setClickedFlag(false))
                dispatch(setModalSettingFromTimer(false))
                dispatch(setClickedFlagBurger(false))
            },500)
        } else {
            swal({
                title: "Save your changes?",
                dangerMode: true,
                buttons: "yes",
              })
              .then((willSave) => {
                if (willSave) {
                    if(valueSession.toString().match(regexp) === null || valueSession <= 0 ||
                    settingBrake.toString().match(regexp) === null || settingBrake <= 0 ||
                    settingLongTimer.toString().match(regexp) === null || settingLongTimer <= 0 ||
                    settingSetterLT.toString().match(regexp) === null || settingSetterLT <= 0){
                        swal({
                            title: 'enter a valid value: an integer greater than zero!',
                            buttons: 'ok'
                        })
                        setValueSession(defaultSession)
                        setSettingBrake(defaultBrake)
                        setSettingLongTimer(defaultLongBrake)
                    } 
                    else {
                        setSavePopUpAction(!savePopUpAction)
                        dispatch(setDefaultSession(valueSession))
                        dispatch(setFlag(true))
                        dispatch(setDefaultBrake(settingBrake))
                        dispatch(setDefaultLongTimer(settingLongTimer))
                        dispatch(setDefaultAutoPlay(autoPlayBrake))
                        dispatch(setFlagLongTimer(autoPlayLongBrake))
                        dispatch(setSetterLongTImer(settingSetterLT))
                        dispatch(setClickedFlag(false))
                        dispatch(setModalSettingFromTimer(false))
                        setSpanClose(true)
                        setTimeout(()=>{
                            setModalSetting(false)
                        },500)
                    }
                } else {
                    swal({
                        title: "No saves were applied",
                        buttons: 'ok'
                    })
                setSpanClose(true)
                setTimeout(()=>{
                    setModalSetting(false)
                },500)
                }
            });  
        }
    }

    const autoPlayBrakeHandler = () => {
        setAutoPlayBrake(!autoPlayBrake)
    }

    const autoPlayLongBrakeHandler = () => {
        setAutoPlayLongBrake(!autoPlayLongBrake)
    }

    const saveHandler = () => {
        if( valueSession.toString().match(regexp) === null || valueSession <= 0 ||
            settingBrake.toString().match(regexp) === null || settingBrake <= 0 ||
            settingLongTimer.toString().match(regexp) === null || settingLongTimer <= 0 ||
            settingSetterLT.toString().match(regexp) === null || settingSetterLT <= 0){
                swal({
                    title: 'enter a valid value: an integer greater than zero!'
                })
        } 
        else {
            setSavePopUpAction(!savePopUpAction)
            dispatch(setDefaultSession(valueSession))
            dispatch(setFlag(true))
            dispatch(setDefaultBrake(settingBrake))
            dispatch(setDefaultLongTimer(settingLongTimer))
            dispatch(setDefaultAutoPlay(autoPlayBrake))
            dispatch(setFlagLongTimer(autoPlayLongBrake))
            dispatch(setSetterLongTImer(settingSetterLT))
        }
    }
    console.log(defaultClickedFlagBurger);
    return(
            <div className={defaultClickedFlagBurger ? "settings__container burger" : "settings__container"}>
                {
                    spanPopUp ? <SavePopUp2>Save your changes?</SavePopUp2> : ''
                }
                <div className="closeSpanDiv">
                    <span onClick={spanHandler} className={spanIsClose ? "spanClose" : "spanOpen"}></span>
                </div>
                <div className="list_settings">
                    <div className="set_session">
                        <p>Session time</p>
                        <input type="text"  value={valueSession} onChange={(e)=>setValueSession(e.target.value)}/>
                        <p>minutes</p>
                    </div>
                    <div className="set_brake">
                        <p>Brake time</p>
                        <input type="text" value={settingBrake} onChange={(e)=>setSettingBrake(e.target.value)}/>
                        <p>minutes</p>
                    </div>
                    <div className="set_longTimer">
                        <p>Long brake</p>
                        <input type="text" value={settingLongTimer} onChange={(e)=>setSettingLongTimer(e.target.value)}/>
                        <p>minutes</p>
                    </div>
                    <div className="set_autoPlayBrake">
                        <p>Auto play your brake</p>
                        <div className="checkbox">
                            <div className={autoPlayBrake ? "checker_box" : "checker_box_non"}>
                                <div className="checker" onClick={autoPlayBrakeHandler}></div>
                            </div>
                        </div>
                    </div>
                    <div className="set_autoPlayLongTimer">
                        <p>Auto play your long brake</p>
                        <div className="checkbox">
                            <div className={!autoPlayLongBrake ? "checker_box_non" : "checker_box"}>
                                <div className="checker" onClick={autoPlayLongBrakeHandler}></div>
                            </div>
                        </div>
                    </div>
                    {defaultSetflagToSettingLT ? <p>The value of the counter settings can be changed when you switch to the session timer.</p> :
                        <div className="set_counterLongTimer">
                            <p>Timer setting counter</p>
                            <input type="text" value={settingSetterLT} onChange={(e)=>setSettingSetterLT(e.target.value)}/>
                        </div>
                    }
                </div>
                <div className="save">
                    <button className="save_button" onClick={saveHandler}>Save</button>
                </div>
                <CSSTransition nodeRef={nodeRef} in={savePopUpAction} classNames="alert" timeout={2000} unmountOnExit
                        onEnter={() => setSavePopUpAction(false)}
                        >
                        <div ref={nodeRef}>
                            {
                                <SavePopUp></SavePopUp>
                            }    
                        </div> 
                </CSSTransition>
            </div>
    )
} 

export default ModalSettings