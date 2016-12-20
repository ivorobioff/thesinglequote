import { combineReducers } from 'redux';
import auth from './auth';
import redirect from './redirect';
import forms from './forms';

const reducers = combineReducers({
    session: auth,
    redirect,
    forms
});

export default reducers;