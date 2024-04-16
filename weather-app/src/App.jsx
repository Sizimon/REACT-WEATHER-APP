import { useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import React from 'react'
import './App.css'
import { IconImages } from './Images'
import { WeatherImages } from './Images'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [currentWeather, setCurrentWeather] = useState(IconImages.defaultIcon)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6edf707405e684d632b174666be9d090&units=metric`

  const searchLocation = () => {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
        switch (response.data.weather[0].main) {
          case 'Clear':
            setCurrentWeather(WeatherImages.sunny)
            break
          case 'Clouds':
            setCurrentWeather(WeatherImages.cloudy)
            break
          case 'Rain':
            setCurrentWeather(WeatherImages.rainy)
            break
          case 'Snow':
            setCurrentWeather(WeatherImages.snowy)
            break
          case 'Thunderstorm':
            setCurrentWeather(WeatherImages.stormy)
            break
          default:
            setCurrentWeather(IconImages.defaultIcon)
            break
        }
      })
    }
  
  function handleSearchClick() {
    searchLocation()
  }

  return (
    <section className='h-screen flex flex-col items-center justify-evenly'>
      <div className='h-auto flex items-center justify-start flex-col'>
        <Header />
      </div>
      <div className="h-3/4 w-10/12 py-4 bg-slate-900 rounded-3xl flex flex-col justify-between items-center">
        <>
          <form className='flex flex-col items-center w-full'>
            <div className="flex w-full flex-row items-center justify-evenly my-4">
              <input className="text-white font-neonTilt uppercase h-9 w-3/4 pl-2 outline-none bg-slate-800 rounded-3xl border-2 border-white text-md"
                value={location}
                onChange={e => setLocation(e.target.value)}
                type="text"
                placeholder="Search for city" />
              <span className='w-6'>
                <img src={IconImages.searchIcon} onClick={handleSearchClick} />
              </span>
            </div>
          </form>
          <div className='flex items-center flex-col font-neonTilt text-white'>
            <span className='w-40 h-auto'>
              <img src={currentWeather} />
            </span>
            {data.weather ? <p className='uppercase'>{data.weather[0].description}</p> : null}
          </div>
          <div className='flex flex-row gap-12 font-neonTilt text-white text-2xl'>
            <span>
              <h3>{data.name}</h3>
            </span>
            <span>
              {data.main ? <h3>{data.main.temp}°C</h3> : '°C'}
            </span>
          </div>
          <div className='flex flex-row gap-6 font-neonTilt text-white pb-4 items-center justify-evenly w-full'>
            <div className='w-1/4 flex flex-col items-center align-center text-center'>
              <img src={IconImages.humidityIcon} className='w-12' />
              {data.main ? <p>Humidity {data.main.humidity}%</p> : null}
            </div>
            <div className='w-1/4 flex flex-col items-center align-center text-center'>
              <img src={IconImages.windIcon} className='w-12' />
              {data.wind ? <p>Wind {data.wind.speed}m/s</p> : null}
            </div>
          </div>
        </>
      </div>
    </section>
  )
}

export default App
