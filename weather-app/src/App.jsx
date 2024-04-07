import Header from './components/Header'
import WeatherBox from './components/WeatherBox'
import React from 'react'
import './App.css'

function App() {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <Header />
      <WeatherBox />
    </div>
  )
}

export default App
