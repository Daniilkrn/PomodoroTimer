import { setModalSettingFromTimer } from "../../store/reducers2/popUpChecker";
import { setClickedFlag } from "../../store/reducers2/popUpChecker";
import { setClickedFlagBurger } from "../../store/reducers2/popUpChecker";
import { useDispatch, useSelector } from "react-redux";

const MenuBurger = () => {

    const defaultClickedFlagBurger = useSelector(state => state.popUp2.clickedFlagBurger)

    /*setModalSettingFromTimer*/
    const defaultSetModalSettingFromTimer = useSelector(state => state.popUp2.modalSettingFromTimer);
    const clickedFlag = useSelector(state => state.popUp2.clickedFlag);
    const dispatch = useDispatch();
    
    return (
        <div className={defaultSetModalSettingFromTimer ? "burger_menuNone" : "burger_menu" } onClick={(e) => {
            e.preventDefault()
            dispatch(setModalSettingFromTimer(true))
            dispatch(setClickedFlag(true))
            dispatch(setClickedFlagBurger(true))
        }}>
            <span></span>
        </div>
    )
}

export default MenuBurger