import { combineReducers } from 'redux';
import screen from './screen';
import dogs from './dogs';

export default combineReducers({
    screen,
    dogs,
})