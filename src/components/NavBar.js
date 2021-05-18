import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'
import { FaBars, FaHome, FaTimes } from 'react-icons/fa';
import Button from './Button';
import './NavBar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-home'>
            {/* <RouterLink className='navbar-home-icon'
              to='/'
              onClick={closeMenu} >
              <FaHome />
            </RouterLink> */}
            <Link className='navbar-home-icon'
              activeClass='active'
              to='header'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu} >
              <FaHome />
            </Link>
          </div>
          <div className='nav-menu-container'>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link className='nav-link'
                  activeClass='active'
                  to='header'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu} >
                  About Me
              </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link'
                  activeClass='active'
                  to='experience'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu} >
                  Experience
              </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link'
                  activeClass='active'
                  to='projects'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu} >
                  Projects
              </Link>
              </li>
              <li className={click ? 'nav-button-dropdown' : 'nav-item'}>
                <Button className='nav-link'
                  link='\documents\Calvin Liu Resume.pdf'
                  target='_blank'
                  children='Resume' />
              </li>
            </ul>
            <div className='navbar-menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
          </div> 
        </div>
      </nav>
    </>
  );
}

export default Navbar;