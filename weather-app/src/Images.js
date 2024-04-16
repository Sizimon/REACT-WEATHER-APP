import defaultWeather from './assets/default-weather.png';
import humidity from './assets/humidity-icon.png';
import search from './assets/search-icon.png';
import wind from './assets/wind-icon.png';
import clouds from './assets/clouds.png';
import rain from './assets/heavy-rain.png';
import sun from './assets/sun.png';
import storm from './assets/storm.png';
import snow from './assets/snowy.png';

const WeatherImages = {
    sunny: sun,
    cloudy: clouds,
    rainy: rain,
    stormy: storm,
    snowy: snow,
}

const IconImages = {
    defaultIcon: defaultWeather,
    humidityIcon: humidity,
    searchIcon: search,
    windIcon: wind,
}

export {WeatherImages, IconImages};