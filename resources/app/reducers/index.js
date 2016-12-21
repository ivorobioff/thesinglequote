import { combineReducers } from 'redux';
import auth from './auth';
import forms from './forms';

const reducers = combineReducers({
    session: auth,
    forms
});

export default reducers;