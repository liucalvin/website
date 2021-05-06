import '../App.css'

import React from 'react'
import Particles from "react-particles-js"

function Background() {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 100
              }
            },
            line_linked: {
              enable: true,
              opacity: 0.05
            },
            move: {
              speed: 0
            },
            size: {
              value: 1.5
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1
              }
            }
          }
        }} />
    </>
  )
}

export default Background