import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { getWeather } from './../services/apiService';

const WeatherScreen = (props) => {

   const fetchWeather = async() => {
      await props.getWeather();
   }
   
   return(
       <View>
           <Text>Hello from weather app</Text>
           <TouchableHighlight onPress = {async() => fetchWeather()}>
               <Text>Get location</Text>
           </TouchableHighlight>
           <Text>{props.weatherDetails.city}</Text>
       </View>
   )
}

const mapStateToProps = state => ({
    weatherDetails: state.weatherReducer.weatherList,
});

const mapDispatchToProps = {
    getWeather
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherScreen)