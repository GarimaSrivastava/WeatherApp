/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, SafeAreaView, View, Text } from 'react-native';
import WeatherScreen from './app/containers/WeatherScreen';
import { styles } from './app/styles/styles';

const App = () => {
  return (
    <View style ={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style ={ styles.container }>
         <WeatherScreen/>
      </SafeAreaView>
    </View>
  );
};

export default App;
