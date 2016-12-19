import { combineReducers } from 'redux';
import session from './session';
import redirect from './redirect';
import server from './server';
import forms from './forms';

const reducers = combineReducers({
    session,
    redirect,
    server,
    forms
});

export default reducers;