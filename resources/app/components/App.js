import React, {Component} from 'react';
import { connect } from 'react-redux';
import PublicNav from './Nav/PublicNav';
import AgentNav from './Nav/AgentNav';

class App extends Component {

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
                        {this.props.session.id ? <AgentNav />  : <PublicNav />}
                    </div>
                </div>
            </nav>
            <div className="container">
                {this.props.children}
                <footer>
                    <div className="row">
                        <div className="col-lg-12">
                            <p>Copyright &copy; Tapo Insurance Agency 2016</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    }
}



export default connect(state => {
    return {
        session: state.session
    };
})(App);