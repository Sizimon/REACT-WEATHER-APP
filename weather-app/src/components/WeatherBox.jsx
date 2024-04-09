import searchIcon from '../assets/search-icon.png';
import humidityIcon from '../assets/humidity-icon.png';
import windIcon from '../assets/wind-icon.png';
import defaultWeather from '../assets/default-weather.png';

export default function WeatherBox() {
    return (
        <>
            <form className='flex flex-col items-center w-full'>
                <div className="flex w-full flex-row items-center justify-evenly my-4">
                    <input className="text-white font-neonTilt uppercase h-9 w-3/4 pl-2 outline-none bg-slate-800 rounded-3xl border-2 border-white text-md" type="text" placeholder="City" />
                    <span className='w-6'>
                        <img src={searchIcon} />
                    </span>
                </div>
            </form>
            <div className='flex items-center flex-col font-neonTilt text-white'>
                <span className='w-40 h-auto'>
                    <img src={defaultWeather} />
                </span>
            </div>
            <div className='flex flex-row gap-12 font-neonTilt text-white text-2xl'>
                <span>
                    <h3>LOCATION</h3>
                </span>
                <span>
                    <h3>$°C</h3>
                </span>
            </div>
            <div className='flex flex-row gap-6 font-neonTilt text-white pb-4 items-center justify-evenly w-full'>
                <div className='w-1/4 flex flex-col items-center'>
                    <img src={humidityIcon} className='w-12' />
                    <p>Humidity</p>
                </div>
                <div className='w-1/4 flex flex-col items-center'>
                    <img src={windIcon} className='w-12' />
                    <p>Wind</p>
                </div>
            </div>
        </>
    )
}