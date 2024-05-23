import Header from './components/Header'
import React from 'react'
import './App.css'
// import ParticleBackground from './components/ParticleBackground'
import { main } from './Images'
import Lottie from 'lottie-react'
import WeatherBox from './components/WeatherBox'

function App() {
  return (
    <section className='h-screen flex flex-col items-center justify-evenly'>
      <div className='h-auto flex items-center justify-start flex-col'>
        <Header />
      </div>
      <div className="h-3/4 w-10/12 md:w-10/12 lg:w-4/12 py-4 bg-white rounded-3xl flex flex-col items-center">
        <WeatherBox />
      </div>
      {/* <ParticleBackground /> */}
      <Lottie animationData={main.background} className='absolute bottom-0 -z-50'  />
    </section>
  )
}

export default App
