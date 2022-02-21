import { combineReducers } from 'redux';
import covidData from './corona/reducer';

export default combineReducers({
    covidData: covidData
})