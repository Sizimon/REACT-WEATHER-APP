export default function WeatherBox() {
    return (
        <>
            <form className='flex flex-col items-center gap-12'>
                <div className="flex flex-row items-center gap-2">
                    <input className="text-white text-center bg-slate-700 rounded-lg" type="text" />
                    <button className="">
                        *Search Icon*
                    </button>
                </div>
            </form>
            <div className='flex items-center flex-col'>
                <span>
                    <img src='' />
                </span>
                <span>
                <h3>LOCATION</h3>
                <p>TEMPERATURE</p>
                </span>
            </div>
            <div className='flex flex-row gap-6'>
                <div>
                    <img src />
                    <p>Humidity</p>
                </div>
                <div>
                    <img src />
                    <p>Wind</p>
                </div>
                <div>
                    <img src />
                    <p>Feels Like</p>
                </div>
            </div>
        </>
    )
}