import { combineReducers } from 'redux';
import auth from './auth';
import ask from './ask';

const reducers = combineReducers({
    session: auth,
    ask
});

export default reducers;