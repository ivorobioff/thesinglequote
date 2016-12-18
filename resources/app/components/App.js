import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { redirectTo } from '../actions/redirect';

class App extends Component {

    componentWillMount(){
        this.handleAuthLocation(this.props.session);
    }

    componentWillReceiveProps(nextProps) {
        var nextLocation = nextProps.redirect.location;
        var currentLocation = this.props.location.pathname;

        // handle redirect
        if (this.props.redirect.id !== nextProps.redirect.id){
            if (nextLocation === currentLocation){
                return ;
            }

            if (nextProps.redirect.historical){
                this.props.router.push(nextLocation);
            } else {
                this.props.router.replace(nextLocation);
            }
        }

        if (this.props.session.data.id !== nextProps.session.data.id){
           this.handleAuthLocation(nextProps.session);
        }
    }

    handleAuthLocation(session) {
        var currentLocation = this.props.location.pathname;
        var isAuth = typeof session.data.id !== 'undefined';

        if (currentLocation == '/login' && isAuth){
            this.props.redirectTo('/', false);
        } else if (currentLocation !== '/login' && !isAuth){
            this.props.redirectTo('/login', false);
        }
    }
    
    render(){
        return <div>
            <div>
                <h1>Header</h1>
                <hr/>
            </div>
            {this.props.children}
            <div>
                <hr/>
                <h1>Footer</h1>
            </div>
        </div>
    }
}

App.propTypes = {

    // state
    session: PropTypes.object.isRequired,
    redirect: PropTypes.object.isRequired,
    server: PropTypes.object.isRequired,

    // actions
    redirectTo: PropTypes.func.isRequired,
    redirectReset: PropTypes.func.isRequired
}

export default connect((state) => {
    return {
        session: state.session,
        redirect: state.redirect,
        server: state.server
    }
}, (dispatch) => {
    return {
        redirectTo(location, historical = true) {
            dispatch(redirectTo(location, historical));
        },

        redirectReset() {
            dispatch(redirectReset());
        }
    }
})(App);
