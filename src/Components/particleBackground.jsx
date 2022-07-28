import React from 'react'
import Particles from 'react-tsparticles';

export default function ParticleBackground() {
  return (
    <div><Particles
        options={{
            particles: {
              number: {
                value: 70,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "ffffff"
              },
              shape: {
                type: "polygon",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 2,
                  size_min: 0.3,
                  sync: false
                }
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 600
                }
              }
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble"
                },
                onclick: {
                  enable: true,
                  mode: "repulse"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 243.34650108289205,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 250,
                  size: 8,
                  duration: 3.4879665155214523,
                  opacity: 0,
                  speed: 3
                },
                repulse: {
                  distance: 400,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          }}
     /></div>
  )
}
