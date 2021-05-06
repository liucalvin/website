import React from 'react'
import Typed from 'react-typed';
import { IoIosArrowDown } from 'react-icons/io';
import './Header.css'
import '../App.css'
import { Link } from 'react-scroll';

function Header() {
  return (
    <>
      <div id='header' className='header-wrapper'>
        <div className='header-container'>
          <Typed className='header-words'
            strings={['', '',
              'Hi there. ^700 <br> I\'m Calvin Liu']}
            typeSpeed={40}
            contentType='html'
          />
          <div className='header-description'>
            <h2>
              I'm a student studying Systems Design Engineering at
              the University of Waterloo. I love creating impactful software 
              products and intuitive user experiences on web and mobile 
              applications.
            </h2>
            <h2>
              I'm passionate about making the tech community more equitable,
              accessible, and inclusive to all. I currently volunteer
              at Tech+ UW, where I help to create events and resources
              to help under-represented groups get into the tech industry.
            </h2>
            <h2>
              In my free time, when I'm not exploring new skills or
              working on projects, I enjoy reading books, playing the piano,
              doodling, and running.
            </h2>
            <h2>
              Feel free to check out some of my work below!
            </h2>
          </div>
        </div>
        <div className='header-button-wrapper'>
          <Link
            activeClass='active'
            to='experience'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500} >
            <IoIosArrowDown className='header-button' />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
