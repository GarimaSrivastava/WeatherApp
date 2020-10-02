import { setWeather, setError, setIsLoading } from './../actions/weatherAction';
import Geolocation from '@react-native-community/geolocation';

export const getWeather = () => {
    return async (dispatch) => {
            dispatch(setIsLoading(true));
            Geolocation.getCurrentPosition(function(location){ 
                longitude = location.coords.longitude;
                latitude = location.coords.latitude;
                fetchWeather(dispatch);
            });
            
    }
}

function fetchWeather(dispatch){

    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=96f6d82be9c2191abdf21a9a354a0db5`)
    .then((response) => response.json())
    .then(function(json){ 
        let city = json.city.name;
        let list = json.list;
        let todaysWeather = json.list[0];
        
        let prevDate = todaysWeather.dt_txt.split(" ")[0];
        todaysWeather["dateText"] = (new Date(prevDate)).toDateString();
        let weatherList = []

        list.forEach(element => {
            let currentDate = element.dt_txt.split(" ")[0];
            if(prevDate == element.dt_txt.replace(element.dt_txt, currentDate)){
                prevDate = currentDate;
            }
            else{
                let date = new Date(currentDate);
                element["dateText"] = date.toDateString();
                weatherList.push(element);
                prevDate = currentDate;
            }
        });
        
        dispatch(setWeather({city, weatherList, todaysWeather}));
    })
    .catch(function(err){ 
        console.log(err);
        dispatch(setError(true));
    });

}