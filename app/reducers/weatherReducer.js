const initialState = {
    isLoading: true,
    weatherList: [],
    hasError: false
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WEATHER':
            return {
                ...state,
                isLoading: false,
                hasError: false,
                weatherList: action.weatherList
            };
        case 'SET_ISLOADING':
            return{
                ...state,
                isLoading: action.isLoading,
                hasError: false
            }
        case 'HAS_ERROR':
            return {
                ...state,
                isLoading: false,
                hasError: action.hasError
            }
        default:
            return state;
    }
}
export default weatherReducer;