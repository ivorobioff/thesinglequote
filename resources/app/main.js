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
import { sessionRefresh } from './actions/auth';
import { backend } from './helpers';
import NewPost from './components/Post/NewPost';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

let store = createStore(reducers, applyMiddleware(thunk));

// takes care of session storage

function handleAuthLocation(session) {
    var currentLocation = browserHistory.getCurrentLocation().pathname;
    var isAuth = typeof session.id !== 'undefined';

    if (currentLocation == '/login' && isAuth){
        browserHistory.replace('/');
    } else if (currentLocation !== '/login' && !isAuth){
        browserHistory.replace('/login');
    }
}

var prevSession, currentSession = store.getState().session;

handleAuthLocation(currentSession);

store.subscribe(() => {

    prevSession = currentSession;
    
    currentSession = store.getState().session;

    if (prevSession.token !== currentSession.token){
        if (!currentSession.token){
            Session.destroy();
        } else {
            Session.set(currentSession);
        }
    }
    
    // takes care of auth location

    if (prevSession.id !== currentSession.id){
        handleAuthLocation(currentSession);
    }
});


setInterval(() => {

    var auth = Session.get();

    if (!auth){
        return ;
    }

    var expiresAt = new Date(auth.expiresAt);
    var now = new Date();

    // gives 10 minutes to refresh the session
    
    if (now.getTime() >= (expiresAt.getTime() - 600000)){
        backend({ 
            method: 'POST', 
            url: '/sessions/' + auth.id + '/refresh'
        })
        .run(store.dispatch)
        .done(data => store.dispatch(sessionRefresh(data)));
    }
}, 10000);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Home} />
                <Route path="login" component={Login} />
                <Route path="posts">
                    <Route path="new" component={NewPost} />
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);