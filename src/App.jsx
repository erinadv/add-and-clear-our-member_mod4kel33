import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import State from '../src/pages/learn-useState/index';
import Effect from '../src/pages/learn-useEffect/index';
import Context from '../src/pages/learn-useContext/index';
import Tugas from '../src/pages/tugas-ganjil/index';

function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
            <Link to="/use-state">Use State</Link>
            </li>
            <li>
              <Link to="/use-effect">Use Effect</Link>
            </li>
            <li>
              <Link to="/use-context">Use Context</Link>
            </li>
            <li>
              <Link to="/tugas-ganjil">Tugas Ganjil</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' exact element={<State />}></Route>
          <Route path='/use-state' exact element={<State />}></Route>
          <Route path='/use-effect' exact element={<Effect />}></Route>
          <Route path='/use-context' exact element={<Context />}></Route>
          <Route path='/tugas-ganjil' exact element={<Tugas />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
