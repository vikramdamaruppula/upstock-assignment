import React, { useState } from 'react'
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import { menuItems } from './AllData/data';
import { useNavigate } from 'react-router-dom';

import './header.css'



const Header = ({setIsAuthenticated}) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMenuOpen,setIsMenuOpen] =useState(false)

  const navigate= useNavigate()

  const handleToggle=()=>{
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout=()=>{
    setIsAuthenticated(false)
    navigate('/')
  }

  const handleAccount=()=>{
    navigate('/stock')
  }
  
// const handleMouseEnter=(sectionName)=>{
//   setHoveredItem(sectionName)
// }

// const handleMouseLeave=()=>{
//   setHoveredItem(null)
// }

  return (
    <header className='header'>
      <div className='logo'>
        <img src='	https://upstox.com/app/themes/upstox/dist/img/logo/mobile-logo.svg' alt='logo-upstox' />
      </div>
      <nav className={`nav-menu ${isMenuOpen ? 'active':''}`}>
        {menuItems.map((item,i)=>{
          return(
            <div 
              className='menu-item'
              key={i}
              onMouseEnter={()=>setHoveredItem(item?.name)}
              onMouseLeave={()=>setHoveredItem(null)}
              >
              {item?.name}
              {hoveredItem === item?.name &&(
                <div className='dropdown'>
                  <div className='dropdown-content'> 
                    {item?.details?.map((section,secIndex)=>(
                      <div 
                       key={secIndex} 
                       className={`dropdown-section `}  
                      //  onMouseEnter={()=>handleMouseEnter(section?.title)}
                      //  onMouseLeave={handleMouseLeave}            
                       >
                          <h4> 
                            {section?.title}
                          </h4>
                          <ul>
                            {section?.links.map((link,linkIndex)=>(
                              <li key={linkIndex}> {link} </li>
                            ))}
                          </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </nav>
      <div className='btn-input-container'>
        <div className="search-bar">
        <FaSearch className="search-icon" />
          <input type="text" placeholder="Search any stock, MF (E.g: AXI)" />
        </div>
      <div className="actions">
        <button className="open-account-btn" onClick={handleAccount} >Click here for stock</button>
        <button className="sign-in-btn" onClick={handleLogout}>Logout</button>
      </div>
      </div>

      <div className='hamburger-menu' onClick={handleToggle}> 
        <button className="sign-in-btn" onClick={handleLogout}>logout</button>
        {isMenuOpen ? <FaTimes size={30} className='close-icon' /> : <FaBars size={30} className='open-icon'  /> }
      </div>
    </header>
  )
}

export default Header 