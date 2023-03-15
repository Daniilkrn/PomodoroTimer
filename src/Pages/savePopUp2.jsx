import { setPopUp } from "../store/reducers2/popUpChecker"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { store } from "../store/store"

const SavePopUp2 = ({children}) => {

    const popUp2 = useSelector(state => state.popUp2.checked)
    const dispatch = useDispatch();

    const [spanPopUpTarget, setSpanPopUpTarget] = useState(popUp2)

    const targetSaveSpanHandler = () => {
        setSpanPopUpTarget(!spanPopUpTarget)
        dispatch(setPopUp(true))
    }
    
   
    return (
        <div className="savePopUp2">
            <p>{children}</p>
            <div className="controls">
                <button className="agree" onClick={targetSaveSpanHandler}>
                    yes
                </button>
                <button className="disagree">
                    no
                </button>
            </div>
        </div>
    )
}

export default SavePopUp2