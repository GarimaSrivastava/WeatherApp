import { getLocation } from './locationService';
import GeoLocation from 'react-native-get-location';
import { setWeather } from './../actions/weatherAction';
import { create } from 'apisauce';

export const getWeather = () => {
    return async (dispatch) => {
            const {latitude, longitude} = await getLocation();
        
            fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=96f6d82be9c2191abdf21a9a354a0db5`)
            .then((response) => response.json())
            .then(function(json){ 
                let city = json.city.name;
                let list = json.list;
                dispatch(setWeather({city, list}));
            })
            .catch((err) => console.log(err));
    }
}