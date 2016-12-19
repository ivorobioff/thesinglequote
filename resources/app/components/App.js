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

        if (this.props.session.id !== nextProps.session.id){
           this.handleAuthLocation(nextProps.session);
        }
    }

    handleAuthLocation(session) {
        var currentLocation = this.props.location.pathname;
        var isAuth = typeof session.id !== 'undefined';

        if (currentLocation == '/login' && isAuth){
            this.props.redirectTo('/', false);
        } else if (currentLocation !== '/login' && !isAuth){
            this.props.redirectTo('/login', false);
        }
    }
    
    render(){
        return <div>
             <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html">TheSingleQuote.com</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="dashboard.html">Dashboard</a>
                            </li>
                            <li>
                                <a href="post.html">Post a Quote</a>
                            </li>
                            <li>
                                <a href="login.html">Log In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <hr/>
                {this.props.children}
            </div>
            <footer>
                <div className="row">
                    <div className="col-lg-12">
                        <p>Copyright &copy; Tapo Insurance Agency 2016</p>
                    </div>
                </div>
            </footer>
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
