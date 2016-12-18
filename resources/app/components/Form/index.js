import React, { Component, PropTypes, cloneElement, Children } from 'react';
import { connect } from 'react-redux';
import { submit } from '../../actions/form';
import { normalizeControls } from '../../helpers/form';

class Form extends Component {

    constructor(props){
        super(props);
        this.controls = [];
    }

    registerControl(control){
        this.controls.push(control);
    }

    onSubmit(e){
        e.preventDefault();
        var options = {
            request: this.props.request,
            actions: this.props.actions
        };

        var data = {};

        this.controls.forEach(c => {
            data[c.name] = c.getValue();
        });

        this.props.submit(data, options);
    }

    render(){
        return <form onSubmit={e => this.onSubmit(e)}>
            { this.props.error ? <p>{this.props.error}</p> : '' }
            {normalizeControls(this.props.children, { registerControl: this.registerControl.bind(this) })}
        </form>
    }
}

Form.propTypes = {
    request: PropTypes.shape({
        method: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        session: PropTypes.bool
    }).isRequired,
    actions: PropTypes.shape({
        start: PropTypes.func,
        complete: PropTypes.func,
        success: PropTypes.func,
        fail: PropTypes.func
    })
}

export default connect(undefined, (dispatch) => {
    return {
        submit: (d, o) => dispatch(submit(d, o))
    }
})(Form);