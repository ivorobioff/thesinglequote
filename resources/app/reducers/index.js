import { combineReducers } from 'redux';
import auth from './auth';
import redirect from './redirect';
import forms from './forms';
import global from './global';

const reducers = combineReducers({
    global,
    session: auth,
    redirect,
    forms
});

export default reducers;