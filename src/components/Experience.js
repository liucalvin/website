import React from 'react'
import './Experience.css';
import ExperienceItem from './ExperienceItem';

function Experience() {
  return (
    <>
      <div id='experience' className='experience-container'>
        <h1>Experience</h1>
        <div className='experience-items-wrapper'>
          <ul className='experience-items'>
            <ExperienceItem
              title='Android Developer Intern @theScore'
              link='https://www.thescore.bet/'
              date='January - April 2021'
              desc={<ul>
                <li>
                  Improved user experience by developing new features on theScoreBet app in Kotlin and GraphQL
                  </li>
                <li>
                  Decreased app crashes by fixing bugs and writing code with 100% unit test coverage using
                  JUnit, Robolectric, and Mockito
                  </li>
                <li>
                  Streamlined existing codebase by implementing modern technologies and code best practices
                  such as migrating to view bindings, modularizing code, and using dependency injection
                  </li>
                <li>
                  Gained experience in agile development practices and collaborated regularly with other
                  developers, designers, and product managers to create effective and practical software 
                  solutions
                </li>
              </ul>} />
            {/* 'During the winter term of 2021, I worked for theScore, developing for their mobile
                sports betting app. This was my first full-time position as a developer, and initially it 
                took some effort to familiarize myself with the company flow, but I quickly adapted to the 
                fast-paced working environment. Since it was a small team, I had the independence to 
                take on a large variety of tasks and bugs, and started to work on fixing larger bugs and 
                developing new features with GraphQL, including a new sports betting selector. ' */}
            <ExperienceItem
              title='Project Organizer @Tech+ UW'
              link='https://www.techplusuw.org/'
              date='December 2019 - Present'
              desc={<ul>
                <li>
                  Worked on the planning and organization of multiple events such as resmue critiques, 
                  mock interviews, and various talks and presentations from upper years and industry 
                  leaders, reaching hundreds of students at the University
                </li>
                <li>
                  Organized and collaborated on an issue of Dear Tech+, a blog designed to answer 
                  questions from first year students and offer resources to get into the tech industry
                </li>
              </ul>} />
            {/* 'After transitioning to university fairly smoothly and , I wanted to 
                give back to the community at the University of Waterloo. ' */}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Experience
