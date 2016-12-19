import { backend } from '../helpers';

export function formSubmit(form, request){
    return (dispatch) => {
        
        dispatch(formStart(form));

        var promise = backend(request).run(dispatch);   

        promise.always(() => dispatch(formComplete(form)))
        
        promise.done(data => dispatch(formSuccess(form, data)))

        promise.fail(() => {
            dispatch(formFail(form, 'Uknown error!'))
        });
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