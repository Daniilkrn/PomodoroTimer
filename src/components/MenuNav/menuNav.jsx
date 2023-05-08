
import { useState } from 'react';
import '../MenuNav/menuNav.scss'
import '../../scss/modalSettings.scss'
import ModalSettings from './modalSetting/modalSetting';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const MenuNav = ({refHeight}) => {

    const defaultClickedFlagBurger = useSelector(state => state.popUp2.clickedFlagBurger)
    const defaultSetModalSettingFromTimer = useSelector(state => state.popUp2.modalSettingFromTimer)
    const clickedFlag = useSelector(state => state.popUp2.clickedFlag)

    const [modalSetting,setModalSetting] = useState(false)

    useEffect(() => {
        defaultSetModalSettingFromTimer && clickedFlag ? setModalSetting(true) : setModalSetting(false)
    }, [clickedFlag,defaultSetModalSettingFromTimer])
    
    const settingHandler = () => {
        setModalSetting(true)
    }
    
    const bottomDown = () => {
        window.scrollTo({
            top: refHeight.current.offsetHeight,
            behavior: 'smooth',
        })
    }
    return(
        <div className={'menu_container'} style={{
            padding:'20px 10px', 
            width:'50%',
            }}>
            <ul className="menu_content" style={{
                display:'flex',
                flexDirection: 'row',
                justifyContent: 'center',
            }}> 
            {   defaultClickedFlagBurger ? '' : <Link to='#' onClick={bottomDown}>About Pomodoro</Link>
                 }
            {   defaultClickedFlagBurger ? '' : <Link to='#' onClick={settingHandler}>Settings</Link>
                            }
                {
                    modalSetting ? <ModalSettings modalSetting= {modalSetting} setModalSetting = {setModalSetting}/> : ''
                }    
            </ul>
        </div>
    )
} 

export default MenuNav