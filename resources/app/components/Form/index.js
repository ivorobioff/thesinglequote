import React, { Component, PropTypes, cloneElement, Children } from 'react';
import { connect } from 'react-redux';
import { normalizeControls } from '../../helpers/form';
import { formSubmit } from '../../actions/form'; 

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

        var request = this.props.request;
        request.data = {};

        this.controls.forEach(c => {
            request.data[c.name] = c.getValue();
        });

        this.props.submit(this.props.name, request);
    }

    render(){
        var props = { 
            registerControl: this.registerControl.bind(this),
            disabled: this.props.form.loading
        };

        if (typeof this.props.form.error === 'object'){
            props.errors = this.props.form.error;
        }

        return <form onSubmit={e => this.onSubmit(e)}>
            {normalizeControls(this.props.children, props)}
        </form>
    }
}

Form.propTypes = {
    request: PropTypes.shape({
        method: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        session: PropTypes.bool
    }).isRequired,
    name: PropTypes.string.isRequired
}

Form.defaultProps = {
    form: { loading: false }
}

export default connect((state, props) => {
    return {
        form: state.forms[props.name]
    }
}, (dispatch) => {
    return {
        submit: (n, r) => dispatch(formSubmit(n, r))
    }
})(Form);