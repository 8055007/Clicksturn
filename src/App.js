
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Home from './Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Career from './components/pages/Career';
import Marketing from './components/pages/Marketing';
import Recruit from './components/pages/Recruit';




function App() {
  return (
    
    <>
   
   <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Career" element={<Career/>} />
        <Route path="/Marketing" element={<Marketing />} />
        <Route path="/Recruit" element={<Recruit />} />
        
      </Routes>
    </Router>
 
</>
    
 );
}

export default App;
