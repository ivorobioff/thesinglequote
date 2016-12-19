import React, { Component, PropTypes, cloneElement, Children } from 'react';
import { connect } from 'react-redux';
import { normalizeControls } from '../../helpers/form';
import * as formActions from '../../actions/form'; 

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

        var actions = {};

        ['start', 'complete', 'success', 'fail'].forEach(type => {
            actions[type] = [formActions['form' + type.substr(0, 1).toUpperCase() + type.substr(1)]];

            if (this.props.actions[type]){
                actions[type].push(this.props.actions[type]);
            }
        });

        var options = {
            request: this.props.request,
            actions
        };

        var data = {};

        this.controls.forEach(c => {
            data[c.name] = c.getValue();
        });

        this.props.submit(this.props.name, data, options);
    }

    render(){
        return <form onSubmit={e => this.onSubmit(e)}>
            { this.props.error ? <p>{this.props.error}</p> : '' }
            {normalizeControls(this.props.children, { 
                registerControl: this.registerControl.bind(this),
                disabled: this.props.form.loading
            })}
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
    }),
    name: PropTypes.string.isRequired
}

Form.defaultProps = {
    form: { loading: false },
    actions: {}
}

export default connect((state, props) => {
    return {
        form: state.forms[props.name]
    }
}, (dispatch) => {
    return {
        submit: (n, d, o) => dispatch(formActions.formSubmit(n, d, o))
    }
})(Form);