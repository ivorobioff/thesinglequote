import { combineReducers } from 'redux';
import auth from './auth';
import redirect from './redirect';
import server from './server';
import forms from './forms';

const reducers = combineReducers({
    session: auth,
    redirect,
    server,
    forms
});

export default reducers;