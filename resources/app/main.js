import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Session from './helpers/Session';
import { redirectTo } from './actions/redirect';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

let store = createStore(reducers, applyMiddleware(thunk));

// takes care of redirection
var prevRedirect = store.getState().redirect;

store.subscribe(() => {
    var nextRedirect = store.getState().redirect;
    var nextLocation = nextRedirect.location;
    var currentLocation = browserHistory.getCurrentLocation().pathname;

    if (prevRedirect.id !== nextRedirect.id){
        if (nextLocation === currentLocation){
            return ;
        }

        if (nextRedirect.historical){
            browserHistory.push(nextLocation);
        } else {
            browserHistory.replace(nextLocation);
        }
    }
});


// takes care of session storage
var prevSession = store.getState().session;

store.subscribe(() => {
    var currentSession = store.getState().session;

    if (prevSession.token !== currentSession.token){
        if (!currentSession.token){
            Session.destroy();
        } else {
            Session.set(currentSession);
        }
    }
});

// takes care of auth location

function handleAuthLocation(session) {
    var currentLocation = browserHistory.getCurrentLocation().pathname;
    var isAuth = typeof session.id !== 'undefined';

    if (currentLocation == '/login' && isAuth){
        store.dispatch(redirectTo('/', false));
    } else if (currentLocation !== '/login' && !isAuth){
        store.dispatch(redirectTo('/login', false));
    }
}

handleAuthLocation(prevSession);

store.subscribe(() => {
    var currentSession = store.getState().session;
    if (prevSession.id !== currentSession.id){
        handleAuthLocation(currentSession);
    }
});

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Home} />
                <Route path="login" component={Login} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);