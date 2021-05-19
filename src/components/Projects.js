import React from 'react'
import ProjectItem from './ProjectItem'
import './Projects.css'

function Projects() {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='projects-container'>
        <div className='projects-wrapper'>
          <ul className='project-items'>
            <ProjectItem
              path='https://github.com/liucalvin/8-Puzzle'
              text='8 Puzzle'
              desc='The 8 Puzzle game on Android, with an interactive UI and puzzle solver. 
                The solver uses the A* algorithm to find the optimal solution to the puzzle.'
              src='/images/8-puzzle-demo.png'
              alt='8 Puzzle Image'
              label='kotlin' />
            <ProjectItem
              path='https://github.com/liucalvin/Seam-Carver'
              text='Seam Carver'
              desc='An implementation of seam carving using topological sort, by removing
                "seams" of pixels to resize images without losing key elements of the image'
              src='/images/seam-carver-demo.png'
              alt='Seam Carver Image'
              label='java' />
            <ProjectItem
              path='https://github.com/liucalvin/memorybee'
              text='Memorybee'
              desc='A flashcard site built with React that auto generates cards using word definitions and
                 usages from WordsAPI, with a backend rest api using PostgreSQL and JWT authentication.'
              src='/images/memorybee-image.png'
              alt='Memorybee Image'
              label='javascript' />
          </ul>
          <ul className='project-items'>
            <ProjectItem
              path='https://github.com/liucalvin/website'
              text='Personal Website'
              desc='Developed a fully responsive website with custom React components,
              bootstrapped with Create React App.'
              src='/images/website-image.png'
              alt='Website Image'
              label='javascript' />
            <ProjectItem
              path='https://github.com/liucalvin/reflect-api'
              text='Reflect'
              desc='A journaling app on android built with a backend rest api
                with Express and MongoDB
                for user login, storage, and authentication.'
              src='/images/under-construction.png'
              alt='Reflect Image'
              label='kotlin'
              secondary='javascript' />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects
