import defaultWeather from './assets/default-weather.json';
import humidity from './assets/humidity-icon.png';
import search from './assets/search-icon.png';
import wind from './assets/wind-icon.png';
import clouds from './assets/clouds.json';
import rain from './assets/rain.json';
import sun from './assets/sun.json';
import storm from './assets/storm.json';
import snow from './assets/snowy.json';
import fog from './assets/fog.json';
import sunClouds from './assets/sunny-with-clouds.json';

const WeatherImages = {
    sunny: sun,
    sunnyWithClouds: sunClouds,
    cloudy: clouds,
    rainy: rain,
    stormy: storm,
    snowy: snow,
    foggy: fog,
}

const IconImages = {
    defaultIcon: defaultWeather,
    humidityIcon: humidity,
    searchIcon: search,
    windIcon: wind,
}

export {WeatherImages, IconImages};