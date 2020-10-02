import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getWeather } from './../services/apiService';
import { styles } from './../styles/styles';

const WeatherScreen = (props) => {

   const fetchWeather = async() => {
      await props.getWeather();
   }
   
   useEffect(() => {
    fetchWeather();
   },[])
   
   if(props.isLoading == true){
      return(
          <ActivityIndicator style= {{alignSelf: 'center'}} size="large" color="#0000ff"/>
      )
   }
   else if(props.hasError == true){
    return(
        <View>
            <Text>{props.error}</Text>
            <TouchableHighlight onPress = {async() => fetchWeather()}>
                <Text>Reload</Text>
            </TouchableHighlight>
        </View>
    )
   }
   else{
    return(
        <View>
            <Text>Hello from weather app</Text>
            <TouchableHighlight onPress = {async() => fetchWeather()}>
                <Text>Get location</Text>
            </TouchableHighlight>
            <Text style={styles.tempHeader}>{props.weatherDetails.todaysWeather.main.temp}</Text>
            <Text style={styles.cityHeader}>{props.weatherDetails.city}</Text>
            <FlatList
                 key='weather' style= {styles.weatherList}
                 keyExtractor={({ id }, index) => { return index.toString() }}
                 data={props.weatherDetails.list}
                 renderItem={
                     ({ item }) => 
                        <View style = {styles.itemContainer}> 
                            <Text style= {styles.dateText}>{item.dt_txt}</Text>
                            <Text style= {styles.tempText}>{item.main.temp}</Text>
                        </View>
                 }
             />
        </View>
    )
   }
}



const mapStateToProps = state => ({
    weatherDetails: state.weatherReducer.weatherList,
    isLoading: state.weatherReducer.isLoading,
    hasError: state.weatherReducer.hasError
});

const mapDispatchToProps = {
    getWeather
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherScreen)