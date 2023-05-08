import {CgLoadbarSound} from 'react-icons/cg'
import { useEffect, useState } from "react"

const TimingPlayer = ({minutes,seconds,audioBackground, playBackground, musicDependencies}) => {

    useEffect(() => {
        if(playBackground) srcFn(audioBackground.getAttribute('src'))
    }, [playBackground])
    
    const [res1,setRes] = useState('')

    const srcFn = (src) => {
        let split = src.split('')
        let temp = ''
        let idx;
        const arr = []
        for(let i = 0; i < split.length; i++){
            if(split[i] === '-'){
                idx = split.indexOf(split[i])
                split = split.slice(idx)
            }
        }
        let res = split.forEach(el => temp += el)
        let result = temp
        setRes(result)
    }

    return(
        <div className="timingMusicPlayer">
                <div className="sec_min">
                    <span>{musicDependencies ? minutes : ''}</span>
                    <span>{musicDependencies ? ':' : ''}</span>
                    <span>{musicDependencies ? seconds : ''}</span>
                </div>
                {
                    res1 ? 
                    <div className="infoTrack" >
                        <CgLoadbarSound size={24} className={playBackground ? "svgActive" : "svg"}/> 
                    <p>{res1}</p>
                </div> 
                    : 
                    ''
                }
        </div>
    )
} 

export default TimingPlayer