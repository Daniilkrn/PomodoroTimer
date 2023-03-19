
import {GiTomato} from 'react-icons/gi'
// import Timer from './timer';
import MenuNav from '../components/MenuNav/menuNav';
import { Outlet } from 'react-router-dom';
import MusicPlayer from '../components/musicPlayer/musicPlayer';
import { useRef, React} from 'react';
import { useSelector } from 'react-redux';
import MenuBurger from './MenuBurger/menuBurger';

function Layout() {
    const refApp = useRef()
    /*musicTimerDependencies*/
    const defaultMusicDependencies = useSelector(state => state.musicDependencies.startedDefault)
    return (
        <div className="layout" ref={refApp}>
            <header>
              <div className='header__container'>
                <MenuNav refHeight={refApp}></MenuNav>
                <MenuBurger></MenuBurger>
              </div>
            </header>
            <main>
              <div className='content__container'>
                <Outlet/>
              </div>
            </main>
            <footer>
              <div className='footer__container'>
                <div className='about'>
                  <GiTomato size={80} className="tomato"/>
                  "The Tomato Method" - a time management technique proposed by Francesco Cirillo in the late 1980s. The technique assumes an increase in work efficiency with less time spent due to deep concentration and short breaks. In the classical technique, the time intervals — "tomatoes" last half an hour: 25 minutes of work and 5 minutes of rest.
                </div>
                <div className='mainPrinciples'>
                  <legend>Basic principles</legend>
                  <li>Decide on the tasks that you plan to perform, set priorities</li>
                  <li>Set the timer for 20-25 minutes</li>
                  <li>Work without being distracted by anything until the timer signal</li>
                  <li>Take a short break (5 minutes)</li>
                  <li>After each 4th "tomato" take a long break (15-30 minutes)</li>
                </div>
              </div>
            </footer>
        </div>
    );
  }
  
  export default Layout;