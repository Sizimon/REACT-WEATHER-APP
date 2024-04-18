import defaultWeather from './assets/default-weather.png';
import humidity from './assets/humidity-icon.png';
import search from './assets/search-icon.png';
import wind from './assets/wind-icon.png';
import clouds from './assets/clouds.png';
import rain from './assets/rain.png';
import sun from './assets/sun.png';
import storm from './assets/storm.png';
import snow from './assets/snowy.png';
import fog from './assets/fog.png';
import sunClouds from './assets/sunny-with-clouds.png';
import drizzle from './assets/drizzle.png';

const WeatherImages = {
    sunny: sun,
    sunnyWithClouds: sunClouds,
    cloudy: clouds,
    rainy: rain,
    stormy: storm,
    snowy: snow,
    foggy: fog,
    drizzling: drizzle,
}

const IconImages = {
    defaultIcon: defaultWeather,
    humidityIcon: humidity,
    searchIcon: search,
    windIcon: wind,
}

export {WeatherImages, IconImages};