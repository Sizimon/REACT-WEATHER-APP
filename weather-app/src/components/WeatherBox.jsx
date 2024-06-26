import React from 'react'
import { useState } from 'react'
import { IconImages } from '../Images'
import SearchBar from './SeachBar'
import Lottie from 'lottie-react'
import { WeatherImages } from '../Images'

export default function WeatherBox() {
    const [data, setData] = useState({})
    const [currentWeather, setCurrentWeather] = useState(IconImages.defaultIcon)

    return (
        <>
            <SearchBar setData={setData} setCurrentWeather={setCurrentWeather}/>
            {currentWeather === IconImages.defaultIcon ?
                <div className='flex items-center flex-col font-neonTilt text-slate-600 m-auto gap-10'>
                    <span className='w-48 md:w-72 lg:w-48 h-auto'>
                        <Lottie animationData={currentWeather} />
                    </span>
                    <p className='uppercase md:text-2xl lg:text-lg'>Please Enter a Valid Location.</p>
                </div> :
                <>
                    <div className='flex items-center flex-col gap-6 font-neonTilt text-slate-600 m-auto'>
                        <span>
                            <h3 className='text-2xl md:text-4xl lg:text-2xl'>{data.name}</h3>
                        </span>
                        <span className='w-40 md:w-52 lg:w-40 rounded-full h-auto'>
                            <Lottie animationData={currentWeather} />
                        </span>
                        {data.weather ? <p className='uppercase text-md md:text-2xl lg:text-md'>{data.weather[0].description}</p> : null}
                    </div>
                    <div className='flex flex-col font-neonTilt text-violet-700 text-2xl m-auto'>
                        <span>
                            {data.main ? <h3 className='text-4xl md:text-6xl lg:text-4xl'>{Math.round(data.main.temp)}°C</h3> : null}
                        </span>
                    </div>
                    <div className='flex flex-row gap-6 font-neonTilt text-violet-700 pb-4 items-center justify-evenly w-full m-auto'>
                        <div className='w-1/4 flex flex-col items-center align-center text-center'>
                            <Lottie animationData={IconImages.humidityIcon} className='w-12 md:w-20 lg:w-12' />
                            {data.main ? <p className='text-sm md:text-2xl lg:text-sm'>Humidity: {data.main.humidity}%</p> : null}
                        </div>
                        <div className='w-1/4 flex flex-col items-center align-center text-center'>
                            <Lottie animationData={IconImages.windIcon} className='w-12 md:w-20 lg:w-12' />
                            {data.wind ? <p className='text-sm md:text-2xl lg:text-sm'>Wind: {data.wind.speed}m/s</p> : null}
                        </div>
                    </div>
                </>}
        </>
    )
}