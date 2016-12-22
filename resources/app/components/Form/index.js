import React, { Component, PropTypes, cloneElement, Children, isValidElement } from 'react';
import { connect } from 'react-redux';
import { ask } from '../../actions/ask'; 

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

    static normalizeControls (children, props = {}) {
    
        return Children.map(children, child => {
            if (!isValidElement(child)){
                return child;
            }
            
            if (!child.type || !child.type.name){
                return child;
            }

            var types = [
                'Submit',
                'Button', 
                'Input', 
                'Email', 
                'Password',
                'Select', 
                'Textarea',
                'Checkbox'
            ];
            if (types.indexOf(child.type.name) === -1){
                return child;
            }

            return cloneElement(child, props);
        });
    }   

    render(){
        var props = { 
            registerControl: this.registerControl.bind(this),
            disabled: this.props.form.status === 'start',
            purge: this.props.purge
        };

        if (typeof this.props.form.error === 'object'){
            props.errors = this.props.form.error;
        }

        return <form onSubmit={e => this.onSubmit(e)}>
            {Form.normalizeControls(this.props.children, props)}
        </form>
    }
}

Form.propTypes = {
    request: PropTypes.shape({
        method: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        session: PropTypes.bool
    }).isRequired,
    name: PropTypes.string.isRequired,
    purge: PropTypes.bool
}

Form.defaultProps = {
    form: { },
    purge: false
}

export default connect((state, props) => {
    return {
        form: state.ask[props.name]
    }
}, (dispatch) => {
    return {
        submit: (n, r) => dispatch(ask(Object.assign(r, { what: n })))
    }
})(Form);