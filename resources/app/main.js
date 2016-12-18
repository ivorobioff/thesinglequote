import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

let store = createStore(reducers, applyMiddleware(thunk));

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