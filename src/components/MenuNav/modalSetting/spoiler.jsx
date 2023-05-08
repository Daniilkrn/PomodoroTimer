const Spoiler = ({defaultSetflagToSettingLT, autoPlayBrake, autoPlayLongBrake, autoPlayBrakeHandler, autoPlayLongBrakeHandler, settingSetterLT,setSettingSetterLT}) => {
    return (
        <>
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
        </>
    )
}

export default Spoiler