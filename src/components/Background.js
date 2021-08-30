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
              value: 30,
              density: {
                enable: true,
                value_area: 100
              }
            },
            line_linked: {
              enable: true,
              opacity: 0.03
            },
            move: {
              speed: 0
            },
            size: {
              value: 1.05
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