import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ask } from '../../actions/ask';

class OnwPostAction extends Component {

    onDelete(e, id){
        e.preventDefault();
        var session = this.props.session;
        this.props.request({ what: 'deletePost', method: 'DELETE', url: '/agents/' + session.user.id + '/posts/' + id});
    }
    
    render(){
        var data = this.props.data;

        var statuses = {
            open: { label: 'Waiting', color: 'default'},
            done: { label: 'Done!', color: 'success'}
        };

        var status = statuses[data.status];

        return <div className="dropdown">
            <button className={'btn dropdown-toggle btn-' + status.color} type="button" id={'dropdownMenu' + data.id} data-toggle="dropdown" aria-haspopup="true">
                {status.label} <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby={'dropdownMenu' + data.id}>
                <li><a href="#">Edit</a></li>
                <li><a href="#" onClick={e => this.onDelete(e, data.id)}>Delete</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Share</a></li>
            </ul>
        </div>
    }
}

export default connect(state => {
    return {
        session: state.session
    }
}, dispatch => {
    return {
        request: (c) => dispatch(ask(c))
    }
})(OnwPostAction);