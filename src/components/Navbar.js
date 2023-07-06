import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  useEffect(() => {
    document.body.style.paddingTop = `${document.querySelector('.navbar').offsetHeight}px`;
  }, []);
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.dorl} bg-${props.dorl} fixed-top`}>
  <div className="container-fluid" >
    <Link className="navbar-brand mb-0.5" to="/" style={{color:props.dorl==='light'? 'black':'white'}}>Tidings Today</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
{/*     <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
 */} 
<div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
          </Link>
          <ul className={`dropdown-menu dropdown-menu-${props.dorl} bg-${props.dorl}`} aria-labelledby="navbarDarkDropdownMenuLink">
            <li><Link className="dropdown-item" to="/business">Business</Link></li>
            <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item" to="/health">Health</Link></li>
            <li><Link className="dropdown-item" to="/science">Science</Link></li>
            <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
            <li><Link className="dropdown-item" to="/technology">Technology</Link></li>

          </ul>
        </li>
      </ul>
    </div>  
     <div className='container '>
       <div className="form-check form-switch d-flex justify-content-end">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.darkmode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color : props.dorl ==='light' ? 'black':'white'}}>{props.buttonlabel}</label>
  </div>
    </div>

 
  </div>
</div>
</nav>
      
   
  )
}
