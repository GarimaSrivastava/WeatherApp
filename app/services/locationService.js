import GeoLocation from 'react-native-get-location';

export const getLocation = async() => {
    try{
        let location = await GeoLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        });
        let longitude = location.longitude;
        let latitude = location.latitude;
        return {latitude, longitude}
    }
    catch(error){
       console.log(error);
    }
    
   }