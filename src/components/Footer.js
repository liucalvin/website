import React from 'react'
import { GoMarkGithub, GoMail } from 'react-icons/go';
import { GrLinkedin } from 'react-icons/gr';
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container' >
        <div className='footer-text'>
          <h4>Let's get in touch.</h4>
        </div>

        <div className='icon-container'>
          <a className='footer-icon' href='https://github.com/liucalvin'>
            <GoMarkGithub />
          </a>
          <a className='footer-icon' href='mailto:calvin.liu@uwaterloo.ca'>
            <GoMail />
          </a>
          <a className='footer-icon' href='https://www.linkedin.com/in/c3liu/'>
            <GrLinkedin />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
