import axios from 'axios';

const API_KEY = `356460ab2ee307df9c0efc494b7b1b97`;
const ROOT_URL = `https://crossorigin.me/http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = `FETCH_WEATHER`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},in`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};
