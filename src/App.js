import '../src/scss/app.scss';
import '../src/scss/media.scss'
import { React } from 'react';
import { HashRouter} from 'react-router-dom';
import {Route,Routes} from 'react-router-dom'
import Layout from './components/layout';
import NFP from './Pages/NFP';
import Timer from './components/timer';

function App() {
  return (
      <div className="App">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Timer/>}></Route>
              <Route path='*' element={<NFP/>}></Route>
            </Route>
          </Routes>
        </HashRouter>
      </div>
  );
}

export default App;
