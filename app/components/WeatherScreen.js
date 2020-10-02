import React, { useState, useEffect, Fragment, useRef } from 'react';
import { View, Text, TouchableHighlight, FlatList, ActivityIndicator, SafeAreaView, Animated } from 'react-native';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native';
import { getWeather } from '../services/apiService';
import { styles } from '../styles/styles';
import FadeInView from './common/FadeInView';
import SlideUpView from './common/SlideUpView';

const WeatherScreen = (props) => {

   const fetchWeather = async() => {
      await props.getWeather();
   }
   
   useEffect(() => {
     fetchWeather();
   },[])
   
   if(props.isLoading == true){
      return(
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LottieView 
                source={require('../assests/226-splashy-loader.json')} 
                autoPlay 
                loop 
                style={{
                height: 150, 
            }}/>
          </View>
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
        <SafeAreaView style= {[styles.container, {marginBottom: 20}]}>
            <HeaderView {...props}/>
            <FlatList
                 key='weather' style= {styles.weatherList}
                 keyExtractor={({ id }, index) => { return index.toString() }}
                 data={props.weatherDetails.weatherList}
                 renderItem={
                     ({ item }) => 
                        <WeatherItem weather = {item}/>
                 }
             />
        </SafeAreaView>
    )
   }
}

const HeaderView = (props) =>{
    return(
        <FadeInView style= {styles.headerViewContainer}>
            <Text style={styles.tempHeader}>{props.weatherDetails.todaysWeather.main.temp}</Text>
            <Text style= {styles.dateHeader} >{props.weatherDetails.todaysWeather.dateText} </Text>
            <Text style={styles.cityHeader}>{props.weatherDetails.city}</Text>
        </FadeInView>
    )
}
 
const WeatherItem = (props) => {
    return(
        <SlideUpView style = {styles.itemContainer}> 
            <Text style= {styles.dateText}>{props.weather.dateText}</Text>
            <View style= {styles.weatherContainer}>
                <Text style= {styles.tempText}>{props.weather.main.temp}</Text>
                <Text style= {styles.weatherText}>{props.weather.weather[0].main}</Text>
            </View>
        </SlideUpView>
    )
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