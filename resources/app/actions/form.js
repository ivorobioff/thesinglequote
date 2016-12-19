import { backend } from '../helpers';

export function formSubmit(form, data, options){
    return (dispatch) => {
        var request = options.request;
        request.data = data;

        var actions = options.actions;

        actions.start.forEach(action => dispatch(action(form)));

        var promise = backend(request).run(dispatch);   

        actions.complete.forEach(action => promise.always(() => dispatch(action(form))));
        
        actions.success.forEach(action => promise.done(data => dispatch(action(form, data))));

        actions.fail.forEach(action => promise.fail(() => {
            dispatch(action(form, 'Uknown error!'))
        }));
    }
}

export function formComplete(form){
    return {
        type: 'FORM_COMPLETE',
        form
    }
}

export function formStart(form){
    return {
        type: 'FORM_START',
        form
    }
}

export function formSuccess(form, data){
    return {
        type: 'FORM_SUCCESS',
        form,
        data
    }
}

export function formFail(form, error){
    return {
        type: 'FORM_FAIL',
        form,
        error
    }
}