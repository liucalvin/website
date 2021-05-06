import React from 'react'
import './ExperienceItem.css'

function ExperienceItem(props) {
  return (
    <>
      <li className='experience-item'>
          <a className='experience-title' href={props.link} >{props.title}</a>
          <h6 className='experience-date'>{props.date}</h6>
          <div className='experience-description'>{props.desc}</div>
      </li>
    </>
  )
}

export default ExperienceItem
