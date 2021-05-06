import React from 'react'
import './ProjectItem.css'

function ProjectItem(props) {
  return (
    <>
      <li className='project-item'>
        <a className='project-item-link' href={props.path}>
          <figure className='project-image-wrapper'>
            <img
              className='project-item-image'
              alt={props.alt}
              src={props.src}
            />
            <div className='project-item-label-container'>
              <div className={`project-item-label ${props.label}`}>
                {props.label}
              </div>
              <div className={`project-item-label secondary ${props.secondary}`}>
                {props.secondary}
              </div>
            </div>

          </figure>
          <div className='project-item-description'>
            <h4 className='project-item-description-text'>{props.text}</h4>
            <h5>{props.desc}</h5>
          </div>
        </a>
      </li>
    </>
  )
}
export default ProjectItem;
