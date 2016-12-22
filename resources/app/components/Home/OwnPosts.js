import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { ask } from '../../actions/ask';
import OwnPostItem from './OwnPostItem';

class OwnPosts extends Component {

    constructor(props){
        super(props);
        this.state = { data: this.props.response.data ? this.props.response.data.data : [] }
    }

    componentWillMount(){
        if (typeof this.props.response.status === 'undefined'){
            this.request();
        }
    }

    componentWillReceiveProps(newProps){
        if (this.props.response.status !== newProps.response.status){
            if (newProps.response.status === 'success'){
                this.state = { data: newProps.response.data.data }
            } else if (typeof newProps.response.status === 'undefined'){
                this.request();
            }
        }
    }

    request(){
        this.props.request({ what: 'ownPosts', method: 'GET', url: '/agents/' + this.props.session.user.id + '/posts' });
    }

    render(){

        return <div className="panel panel-default panel-table">
              <div className="panel-heading">
                <div className="row">
                  <div className="col col-xs-6">
                    <h3 className="panel-title">Your Posts</h3>
                  </div>
                  <div className="col col-xs-6 text-right">
                    <Link className="btn btn-primary btn-sml" to="/posts/new">Post New</Link>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <table className="table table-striped table-bordered table-list">
                  <thead>
                    <tr>
                        <th style={{minWidth: '90px'}}>Quote #</th>
                        <th style={{minWidth: '160px'}}>Client Name</th>
                        <th>Public Message</th>
                        <th style={{minWidth: '130px'}}>Status / Actions</th>
                    </tr> 
                  </thead>
                  <tbody>{ this.state.data.map(item => { return <OwnPostItem key={item.id} data={item} /> })}</tbody>
                </table>
            
              </div>
              
            </div>

    }
}

OwnPosts.defaultProps = {
    response: {}
}

export default connect(state => {
  return {
    response: state.ask.ownPosts,
    session: state.session
  }
}, dispatch => {
  return {
    request: (c) => dispatch(ask(c))
  }
})(OwnPosts);