import { createStore, combineReducers } from 'redux';
import weatherReducer from './../reducers/weatherReducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers(
    {
        weatherReducer
    }
);

const appReducer = (state, action) => {
    return rootReducer(state, action);
}
const configureStore = () => {
    return createStore(appReducer, applyMiddleware(thunk));
}

export default configureStore;