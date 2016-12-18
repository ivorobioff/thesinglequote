import { combineReducers } from 'redux';
import session from './session';
import redirect from './redirect';
import server from './server';

const reducers = combineReducers({
    session,
    redirect,
    server
});

export default reducers;