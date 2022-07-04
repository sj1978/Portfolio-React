import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'



const Navbar = () => {
  return (
    <div className="navbar">
<ul>
<li>
  <Link to="/"> Home</Link>
  </li>
  <li> 
   <Link to="/projects"> Projects</Link>
   </li>
   <li> 
   <Link to="/contact"> Contact</Link>
   </li>
   <li> 
   <Link to="/about"> About</Link>
   </li>
</ul>

    </div>
  
  )
}

export default Navbar