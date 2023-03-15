// import { createRef, useState } from "react"
// import { useEffect, useRef, useMemo, forwardRef} from "react"
// import { useSelector, useDispatch } from 'react-redux';
// // import Track1 from "../../sounds/- Чили - Лето.mp3"
// // import Track2 from "../../sounds/01 - Dream On.MP3"
// // import Track3 from "../../sounds/02 - Shine.MP3"
// // import Track4 from "../../sounds/03 - The Sweetest Condition.MP3"
// // import Track5 from "../../sounds/04 - When the Body Speaks.MP3"
// // import Track6 from "../../sounds/05 - The Dead of Night.MP3"
// // import Track7 from "../../sounds/06 - Lovetheme.MP3"
// // import Track8 from "../../sounds/07 - Freelove.MP3"
// // import Track9 from "../../sounds/08 - Comatose.MP3"
// // import Track10 from "../../sounds/09 - I Feel Loved.MP3"

// import { padZero } from "../../Pad/padZeros"
// import { MdSkipNext } from "react-icons/md"
// import {ImPlay3} from "react-icons/im"
// import {BsPause} from "react-icons/bs"

// import { setDeafultDuration } from "../../store/reducers2/musicTimerDepend";
// import ProgressBarAndTimer from "./progressBarAndTimer";

// const MusicPlayer = ({}) => {
//     const [prevStateButton,setPrevStateButton] = useState(false)
//     // const [musickit,setMusicKit] = useState([
//     //     {id:1, track: Track1}, 
//     //     {id:2, track: Track2},
//     //     {id:3, track: Track3},
//     //     {id:4, track: Track4},
//     //     {id:5, track: Track5},
//     //     {id:6, track: Track6},
//     //     {id:7, track: Track7},
//     //     {id:8, track: Track8},
//     //     {id:9, track: Track9},
//     //     {id:10, track: Track10}
//     // ])

//     const [count,setCount] = useState(0)

//     const setPrevButton = () => {
//         setPrevStateButton(true)
//     }

//     useEffect(() => {
//         if(count === 10 ) setCount(0)
//     }, [count])
    
//     const [nextFlag,setNextFlag] = useState(false)
//     const [prevFlag,setPrevFlag] = useState(false)
//     // const audioBackground = useMemo(() => new Audio(musickit[count].track), [count]);
//     audioBackground.volume = 0.1
//     audioBackground.controls = true
    
//     const playerHandler = () => {
//         setPlayBackground(!playBackground)
//         setPlayState(!playState)
//         console.log(playBackground)
//         playBackground ? audioBackground.pause() : audioBackground.play()
//     }
    
//     const nextHandler = () => {
//         setPrevStateButton(false)
//         setNextFlag(true)
//         setCount(count + 1)
//         setMinutesBlock(Math.floor(audioBackground.duration))
//         dispatch(setDeafultDuration(minutesBlock))
//         dispatch(setDeafultDuration((Math.floor(audioBackground.duration))))
//         setPlayBackground(!playBackground)
//         setPlayState(!playState)
//         if(nextFlag === false){
//             console.log('dq')
//             // setPlayBackground(!playBackground)
//             // setPlayState(!playState)
//             playBackground ? audioBackground.play() : audioBackground.pause()
//         } else {
//             playBackground ? audioBackground.play() : audioBackground.pause()
//         }
//     }

//     const prevHandler = () => {
//         if(count > 0){
//             setNextFlag(false)
//             setPrevFlag(!prevFlag)
//             setCount(count - 1)
//             setMinutesBlock(Math.floor(audioBackground.duration))
//             dispatch(setDeafultDuration(minutesBlock))
//             dispatch(setDeafultDuration((Math.floor(audioBackground.duration))))
//             if(nextFlag === false){
//                 setPlayBackground(!playBackground)
//                 setPlayState(!playState)
//                 console.log(playBackground)
//                 audioBackground.paused ? audioBackground.play() : audioBackground.pause()
//             } else {
//                 playBackground ? audioBackground.play() : audioBackground.pause()
//             }
//         } else {
//             setPrevButton()
//         }
//     }

//     const refW = useRef();
 
//     /*musicTimerDependencies*/
//     const defaultMusicDependencies = useSelector(state => state.musicDependencies.startedDefault)
//     const defaultDuration = useSelector(state => state.musicDependencies.duration)
    
//     const dispatch = useDispatch()
//     const [musicDependencies, setMusicDependencies] = useState(defaultMusicDependencies)

//     useEffect(()=>{
//         if(defaultMusicDependencies){
//             setMusicDependencies(!musicDependencies)
//             setMinutesBlock(Math.floor(audioBackground.duration))
//             dispatch(setDeafultDuration(minutesBlock))
//             dispatch(setDeafultDuration((Math.floor(audioBackground.duration))))
//             playerHandler()
//         } 
//     },[defaultMusicDependencies])

//     const [minutesBlock, setMinutesBlock] = useState('')

//     const [playBackground,setPlayBackground] = useState(false)
//     const [playState, setPlayState] = useState(false)

//     const minutes = padZero(Math.floor(minutesBlock / 60))
//     const seconds = padZero(Math.floor(minutesBlock - minutes * 60)) 

//     useEffect(() => {
//         if(playBackground){
//             const interval = setInterval(()=>{
//                 playState && playBackground && setMinutesBlock((minutesBlock) => minutesBlock >=1 ? minutesBlock - 1 : 0)
//             },100)
//             return () => {
//                 clearInterval(interval)
//             }   
//         }
//     },[playState])


//     useEffect(() => {
//         if(minutesBlock === 0){
//             setMinutesBlock(Math.floor(audioBackground.duration))
//             dispatch(setDeafultDuration(minutesBlock))
//             dispatch(setDeafultDuration((Math.floor(audioBackground.duration))))
//             setCount(count + 1)
//             setPlayBackground(!playBackground)
//             setPlayState(!playState)
//             playerHandler()

//         } 
//     }, [minutesBlock])
    
//     return(
//         <div className={musicDependencies ? "music_playerContainer" : "music_playerContainerNON"} style={{
//             padding:'20px 10px', 
//             width: '50%'
//         }}>
//             {
//                 musicDependencies ?             
//                     <button onClick={playerHandler} style={{
//                         padding: "20px"
//                     }}>
//                     {
//                         playBackground ? <BsPause size={20}/> : <ImPlay3 size={20}/>   
//                     }
//                     </button>
//                     :
//                     ''
//             }
//             {
//                 musicDependencies ?             
//                     <button onClick={prevHandler} style={{
//                         padding: "20px"
//                     }} className = {prevStateButton ? "prevNav-revNotActive" : ''}>
//                     {
//                         <MdSkipNext size={20} className="prevNav-rev"/> 
//                     }
//                     </button>
//                     :
//                     ''
//             }
//             {
//                 musicDependencies ?             
//                     <button onClick={nextHandler} style={{
//                         padding: "20px"
//                     }}>
//                     {
//                         <MdSkipNext size={20} /> 
//                     }
//                     </button>
//                     :
//                     ''
//             }
//             <div className="audioBlock" ref = {refW}>
//                 <div className="progress_block">
//                     <ProgressBarAndTimer minutesBlock = {minutesBlock} refW = {refW}
//                     minutes={minutes} seconds={seconds} 
//                     audioBackground={audioBackground} playBackground={playBackground} musicDependencies = {musicDependencies}/>
//                 </div>
//             </div>
//         </div>
//     )
// } 

// export default MusicPlayer