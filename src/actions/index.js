import axios from 'axios';
const API_KEY='2b875f9943eb226a851ebbc7f3e7eb78';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER='FETCH_WEATHER';
export function fetchWeather(city){

const url=`${ROOT_URL}&q=${city},us`;
const request=axios.get(url);
console.log('request',request);
	return{
		type:FETCH_WEATHER,
		payload:request
	}
}