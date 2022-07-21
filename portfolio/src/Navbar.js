import {Link} from 'react-router-dom'
import { useState } from 'react'
import { SidebarData } from './SidebarData'
import './Navbar.css';
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons';



const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
      console.log (sidebar)
        setSidebar(!sidebar);
    }
  return (
    <>
          <IconContext.Provider value={{ color: 'yellow' }}>
    <div className="navbar">
<Link to='#' className='menu-bars' >
        <FaIcons.FaBars  onClick={showSidebar} />
      </Link>                 
    </div>


     <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items'>
        <li className='navbar-toggle'>
          <Link to='#' className='menu-bars'>
            <AiIcons.AiOutlineClose onClick={showSidebar}/>
          </Link>
        </li>


        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path} className='nav-text'>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        }
        )}
</ul>

</nav>
</IconContext.Provider>
   </>
  )
}

export default Navbar