import React, { useState, useEffect, Fragment, useRef } from 'react';
import { View, Text, TouchableHighlight, FlatList, ActivityIndicator, SafeAreaView, Animated } from 'react-native';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native';
import { getWeather } from '../services/apiService';
import { styles } from '../styles/styles';
import FadeInView from './common/FadeInView';

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
        <SafeAreaView>
            <HeaderView {...props}/>
            <FlatList
                 key='weather' style= {styles.weatherList}
                 keyExtractor={({ id }, index) => { return index.toString() }}
                 data={props.weatherDetails.weatherList}
                 renderItem={
                     ({ item }) => 
                        <View style = {styles.itemContainer}> 
                            <Text style= {styles.dateText}>{item.dateText}</Text>
                            <Text style= {styles.tempText}>{item.main.temp}</Text>
                        </View>
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
            <Text style= {styles.dateHeader} >{props.weatherDetails.todaysWeather.dateText}</Text>
            <Text style={styles.cityHeader}>{props.weatherDetails.city}</Text>
        </FadeInView>
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