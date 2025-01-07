

import './App.css';
import Game from './components/game';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home'


function App() {
  

  return(
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App;
