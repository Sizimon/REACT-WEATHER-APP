import CloudyImage from '../assets/cloudy.png';

export default function WeatherBox() {
    return (
        <div className="flex w-1/3 items-center justify-evenly bg-slate-900 border border-white rounded-md  py-6">
            <form className='w-1/4'>
                <div className="flex flex-col items-center gap-2">
                <label className="text-white">Enter Your City</label>
                <input className="bg-slate-600 rounded-md text-white text-center" type="text" />
                </div>
            </form>
            <button className="text-white flex flex-col items-center w-1/4">
                <img src={CloudyImage} />
                Check Weather
            </button>
        </div>
    )
}