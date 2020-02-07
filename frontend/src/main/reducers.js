import { combineReducers } from 'redux';
import trelReducer from '../trel/trelReducer';

const rootReducers = combineReducers({
    trel: trelReducer
})

export default rootReducers