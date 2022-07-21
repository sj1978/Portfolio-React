import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'



const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }
  return (
    <>
    <div className="navbar">
<Link to='#' className='menu-bars' >
        <FaIcons.FaBars  onClick={showSidebar} />
      </Link>                 
    </div>


     <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items'>
        <li className='navbar-toggle'>
          <Link to='#' className='menu-bars'>
            <AiIcons.AiOutlineClose/>
          </Link>
        </li>
<li className='navbar-toggle'>
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

</nav>
   </>
  )
}

export default Navbar