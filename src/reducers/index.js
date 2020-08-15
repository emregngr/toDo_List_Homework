import { combineReducers } from 'redux';
import ListReducers from './listreducers';

export default combineReducers({
    listResponse: ListReducers
});