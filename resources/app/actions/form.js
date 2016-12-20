import { backend } from '../helpers';

export function formSubmit(form, request){
    return (dispatch) => {
        
        dispatch(formStart(form));

        var promise = backend(request).run(dispatch);   

        promise.always(() => dispatch(formComplete(form)))
        
        promise.done(data => dispatch(formSuccess(form, data)))

        promise.fail((x) => {
                        
            var error = 'Unknown error';
            var data = $.parseJSON(x.responseText);

            if (x.status == 422){
                error = data.errors;
            } else if(x.status < 500) {
                error = data.message;
            }
            
            dispatch(formFail(form, error))
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

export function formReset(form){
    return {
        type: 'FORM_RESET',
        form
    }
}