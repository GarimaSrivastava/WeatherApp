import { makeActionCreator } from './actionCreator';

export const setWeather = makeActionCreator(
    'SET_WEATHER',
    'weatherList',
)

export const setIsLoading = makeActionCreator(
    'SET_ISLOADING'
)

export const setError = makeActionCreator(
    'HAS_ERROR',
    'hasError'
)
