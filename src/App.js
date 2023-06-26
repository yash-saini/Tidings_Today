import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './components/News';


function App() {
  return (
  <Router>

  <Navbar></Navbar>
   {/* <About></About> */}
   <Routes>
        <Route exact path="/about" element={<About/>} />
   </Routes>

   <Routes>
        <Route exact path="/" element={<News/>} />
   </Routes>

  
   </Router>
  );
}

export default App;
