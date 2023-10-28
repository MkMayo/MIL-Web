
import './App.css'
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";

//import pages
import Home from './components/pages/Home.js';
import Subjugator from './components/pages/Subjugator.js';
import Navigator from './components/pages/Navigator.js';
import Media from './components/pages/Media.js';
import Sponsors from './components/pages/Sponsors.js';
import Donate from './components/pages/Donate.js';

function App() {
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/subjugator' element={<Subjugator/>} />
        <Route path='/navigator' element={<Navigator/>} />
        <Route path='/media' element={<Media/>} />
        <Route path='/sponsors' element={<Sponsors/>} />
        <Route path='/donate' element={<Donate/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App
