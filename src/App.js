import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './components/News';
import React, {useState,useEffect} from 'react'


function App() {
     const [buttonlabel,changelabel] = useState("Dark Mode On")

     const [dorl,navbarchange] = useState('light')

     const darkmode = () =>{
          if (dorl==='light')
          {
              navbarchange('dark')
              changelabel("Dark Mode on")
              document.body.style.backgroundColor=  "#166D90"
      
          }
          else
          {
              navbarchange('light')
              changelabel("Light Mode on")
              document.body.style.backgroundColor='white'
      
      
          }
          
      }
      
      
         
  return (
  <Router>

  <Navbar darkmode={darkmode} dorl={dorl} buttonlabel={buttonlabel}  ></Navbar>
   {/* <About></About> */}
   <Routes>
        <Route exact path="/about" element={<About/>} />
   </Routes>

   <Routes>
        <Route exact path="/" element={<News dorl={dorl}/>} />
   </Routes>

  
   </Router>
  );
}

export default App;
