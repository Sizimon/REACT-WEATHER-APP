import React, { useState } from 'react'
import axios from 'axios'
import { IconImages } from '../Images'
import { WeatherImages } from '../Images'
import { FaMagnifyingGlass } from 'react-icons/fa6'

export default function SearchBar({ setData, setCurrentWeather }) {
    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${import.meta.env.VITE_api_Key}&units=metric`

    const searchLocation = () => {
        axios.get(url).then((response) => {
        setData(response.data)
            console.log(response.data)
            switch (response.data.weather[0].description) {
                case 'clear sky':
                    setCurrentWeather(WeatherImages.sunny)
                    break
                case 'few clouds':
                case 'scattered clouds':
                    setCurrentWeather(WeatherImages.sunnyWithClouds)
                    break
                case 'broken clouds':
                case 'overcast clouds':
                    setCurrentWeather(WeatherImages.cloudy)
                    break
                case 'drizzle':
                case 'heavy intensity drizzle':
                case 'light intensity drizzle rain':
                case 'drizzle rain':
                case 'heavy intensity drizzle rain':
                case 'shower rain and drizzle':
                case 'heavy shower rain and drizzle':
                case 'shower drizzle':
                case 'light intensity drizzle':
                case 'light rain':
                case 'moderate rain':
                case 'heavy intensity rain':
                case 'very heavy rain':
                case 'extreme rain':
                case 'freezing rain':
                case 'light intensity shower rain':
                case 'shower rain':
                case 'heavy intensity shower rain':
                case 'ragged shower rain':
                    setCurrentWeather(WeatherImages.rainy)
                    break
                case 'light snow':
                case 'snow':
                case 'heavy snow':
                case 'sleet':
                case 'light shower sleet':
                case 'shower sleet':
                case 'light rain and snow':
                case 'rain and snow':
                case 'light shower snow':
                case 'shower snow':
                case 'heavy shower snow':
                    setCurrentWeather(WeatherImages.snowy)
                    break
                case 'thunderstorm with light rain':
                case 'thunderstorm with rain':
                case 'thunderstorm with heavy rain':
                case 'light thunderstorm':
                case 'thunderstorm':
                case 'heavy thunderstorm':
                case 'ragged thunderstorm':
                case 'thunderstorm with light drizzle':
                case 'thunderstorm with drizzle':
                case 'thunderstorm with heavy drizzle':
                    setCurrentWeather(WeatherImages.stormy)
                    break
                case 'mist':
                case 'smoke':
                case 'haze':
                case 'sand/dust whirls':
                case 'fog':
                case 'sand':
                case 'dust':
                case 'volcanic ash':
                case 'squalls':
                case 'tornado':
                    setCurrentWeather(WeatherImages.foggy)
                    break
                default:
                    setCurrentWeather(IconImages.defaultIcon)
                    break
            }
        })
        setLocation('')
    }

    function handleSearchClick() {
        searchLocation()
    }

    return (
        <form className='flex flex-col items-center self-start w-full'>
            <div className="flex w-full flex-row items-center justify-evenly md:justify-center md:gap-4 my-4">
                <input className="text-violet-700 font-neonTilt h-8 md:h-12 lg:h-8 w-3/4 md:w-1/2 pl-2 outline-none bg-white rounded-3xl border border-violet-700 text-md md:text-lg transition ease-in-out"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault()
                            handleSearchClick()
                        }
                    }}
                    type="text"
                    placeholder="Search for city" />
                <span className='w-6 md:w-8 transition ease-in-out delay-50 hover:scale-125 duration-300'>
                    <FaMagnifyingGlass 
                    className='cursor-pointer text-violet-700 text-2xl'
                    onClick={handleSearchClick}
                    />
                </span>
            </div>
        </form>
    )
}