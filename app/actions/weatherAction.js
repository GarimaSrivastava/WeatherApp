import { makeActionCreator } from './actionCreator';

export const setWeather = makeActionCreator(
    'SET_WEATHER',
    'weatherList',
)
