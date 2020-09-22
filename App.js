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

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
         <WeatherScreen/>
      </SafeAreaView>
    </>
  );
};

export default App;
