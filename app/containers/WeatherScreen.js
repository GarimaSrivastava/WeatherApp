import React, { useState, useEffect, Fragment } from 'react';
import { View, Text, TouchableHighlight, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native';
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
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LottieView 
                source={require('./../assests/226-splashy-loader.json')} 
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
        </SafeAreaView>
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