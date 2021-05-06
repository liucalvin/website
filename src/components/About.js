import React from 'react'
import './About.css'
import '../App.css'

function About() {
  return (
    <>
      <div id='about' className='about-wrapper'>
        <div className='about-container'>
          <h2>Hi there! I'm a student studying Systems Design Engineering at
          the University of Waterloo. Currently I'm working as an
                      mobile developer intern over at theScore.</h2>
          <br />
          <h2>I'm passionate about making the tech community more equitable
          and inclusive to all, and I currently volunteer at
                      <a className='about-link' href='www.google.com'>Tech+ UW</a>
                      as a Logistics Organizer, where I create events and resources
                      to help under-represented groups get into the tech industry. </h2>
          <br />
          <h2>In my free time, when I'm not exploring new technologies or
          creating new project, I enjoy reading books, playing the piano,
                      doodling, and running. </h2>
          <br />
          <h2>I'm currently open to internships for Fall 2021!</h2>
        </div>
      </div>
    </>
  )
}

export default About
