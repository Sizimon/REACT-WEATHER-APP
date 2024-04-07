export default function WeatherBox() {
    return (
        <div className="flex w-2/4 items-center justify-evenly bg-slate-900 border border-white rounded-md  py-6">
            <button className="text-white">
                <img></img>
                Check Weather
            </button>
            <form>
                <div className="flex flex-col items-center mt-2 mb-2 gap-4">
                <label className="text-white">Enter Your City</label>
                <input className="bg-slate-600 rounded-md text-white text-center" type="text" />
                </div>
            </form>
        </div>
    )
}