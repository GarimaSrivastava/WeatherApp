const initialState = {
    weatherList: [],
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WEATHER':
            return {
                ...state,
                weatherList: action.weatherList
            };
        default:
            return state;
    }
}
export default weatherReducer;