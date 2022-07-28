import React from 'react'
import Navbar from '../Components/Navbar'
import Welcome from '../Components/Welcome'
import Services from '../Components/Services'
import Footer from '../Components/Footer'

export default function Homepage() {
  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
    {/* <ParticleBackground /> */}
      <Navbar/>
      <Welcome/>
    </div>
    <Services/>
    <Footer />
  </div>
  )
}
