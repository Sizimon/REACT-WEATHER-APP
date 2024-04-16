import Header from './components/Header'
import React from 'react'
import './App.css'

import WeatherBox from './components/WeatherBox'

function App() {
  return (
    <section className='h-screen flex flex-col items-center justify-evenly'>
      <div className='h-auto flex items-center justify-start flex-col'>
        <Header />
      </div>
      <div className="h-3/4 w-10/12 py-4 bg-slate-900 rounded-3xl flex flex-col justify-between items-center">
        <WeatherBox />
      </div>
    </section>
  )
}

export default App
