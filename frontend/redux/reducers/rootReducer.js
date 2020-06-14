import openReducer  from './openReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    open: openReducer
});

export default rootReducer;