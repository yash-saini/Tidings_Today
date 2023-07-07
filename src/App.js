import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './components/News';
import React, {useState} from 'react'
import LoadingBar from 'react-top-loading-bar'

function App() {
     const [buttonlabel,changelabel] = useState("Dark Mode On")

     const [dorl,navbarchange] = useState('light')

     const[load_bar,progressLoadBar]=useState(0)

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
  <LoadingBar
        color='#f11946'
        progress={load_bar}
       
      />   
   <Routes>
        <Route exact path="/about" element={<About progressLoadBar={progressLoadBar}/>} />
   </Routes>

   <Routes>
        <Route exact path="/" element={<News progressLoadBar={progressLoadBar} dorl={dorl} pageSize={5} country={"in"} category={"general"}/>} />
   </Routes>
   <Routes>
        <Route exact path="/health" element={<News progressLoadBar={progressLoadBar} dorl={dorl} pageSize={5} country={"in"} category={"health"}/>} />
   </Routes>
   <Routes>
        <Route exact path="/entertainment" element={<News progressLoadBar={progressLoadBar} dorl={dorl} pageSize={5} country={"in"} category={"entertainment"}/>} />
   </Routes>
   <Routes>
        <Route exact path="/business" element={<News progressLoadBar={progressLoadBar} dorl={dorl} pageSize={5} country={"in"} category={"business"}/>} />
   </Routes>
   <Routes>
        <Route exact path="/science" element={<News progressLoadBar={progressLoadBar} dorl={dorl} pageSize={5} country={"in"} category={"science"}/>} />
   </Routes>
   <Routes>
        <Route exact path="/sports" element={<News progressLoadBar={progressLoadBar} dorl={dorl} pageSize={5} country={"in"} category={"sports"}/>} />
   </Routes>
   <Routes>
        <Route exact path="/technology" element={<News progressLoadBar={progressLoadBar} dorl={dorl} pageSize={5} country={"in"} category={"technology"}/>} />
   </Routes>




  
   </Router>
  );
}

export default App;
