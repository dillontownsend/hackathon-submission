import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Logo from '../images/logo.png'

const LandingPage = () => {
  return (
    <div>
        <div className='w-full bg-gray-200 -mb-16'>
            <img src={Logo} className='mx-auto' alt='logo'/>
        </div>
        <Hero />
        <Features />
    </div>
  )
}

export default LandingPage