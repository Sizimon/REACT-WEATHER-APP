import Header from './components/Header'
import WeatherBox from './components/WeatherBox'
import React from 'react'
import './App.css'

function App() {
  return (
    <section className='h-screen flex-col items-center justify-center'>
      <div className='h-auto flex items-center justify-start flex-col pt-6'>
        <Header />
      </div>
      <div className="h-3/4 w-10/12 mx-auto my-auto bg-slate-900 rounded-xl flex flex-col justify-between items-center pt-4">
        <WeatherBox />
      </div>
    </section>
  )
}

export default App
