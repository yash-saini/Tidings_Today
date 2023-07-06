import React from 'react'
import { useState,useEffect } from 'react'
import Spinner from './Spinner'

export default function About() {
  const[loadSpinner,Spinner_Loading]=useState(true)

  const run_spinner = () =>{
    <Spinner> </Spinner>
    setTimeout(() => {
      Spinner_Loading(null)
    }, 2000);
  }

  useEffect(() => {
    const timing= setTimeout(() => {
        Spinner_Loading(false)
      }, 2000);
    return ()=>{clearTimeout(timing)};
  }, 
    []);
    if (loadSpinner)
    {
      return <Spinner></Spinner>
    }
  
  return (
    <>

    <div className='container my-3' style={{display:"flex",width: "500rem",justifyContent: 'center'}}>
      <div className="card my-10" >
     
  <img src="/developer_pic.jpeg" className="card-img-top" alt="Developer Yash"/>
  
  
  <div className="card-body">
    <p className="card-text"><strong>Developer Yash Saini: </strong> I have pursued Masters in Computer Science & Engineering with specialization in Artificial Intelligence from State University of New York at Buffalo. Previously, I have worked as a consultant with Deloitte Consulting India Private Limited (Deloitte US-India). As an EPM developer in the Finance Technology & Innovation business line, I gained experience with Data Relationship Management (DRM), Enterprise Planning & Budgeting Cloud Service (EPBCS), Data Management (DM/FDMEE), Application Lifecycle Management (ALM), Python, Groovy, Windows Batch Scripting, and EPM automation scripting.
                                 In addition, I studied software engineering for my Bachelor's degree at Delhi Technological University (Formerly Delhi College of Engineering). I am skilled in Python, Java, React.js, C/C++, Machine Learning, Natural Language Processing, DBMS (MS-SQL), OOP, Data Structures and Algorithms.
</p>
  </div>


</div>
    </div>
 </>
  )
}
