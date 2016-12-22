import { backend } from '../helpers';

export function ask(config){

    return (dispatch, getState) => {

        var what = config.what;
       
        dispatch(askStart(what));

        var promise = backend(config).run(dispatch, getState);   

        promise.always(() => dispatch(askComplete(what)))
        
        promise.done(data => dispatch(askSuccess(what, data)))

        promise.fail((x) => {
                        
            var error = 'Unknown error';
            var data = $.parseJSON(x.responseText);

            if (x.status == 422){
                error = data.errors;
            } else {
                error = data.message;
            }
            
            dispatch(askFail(what, error))
        });
    }
}

export function askStart(what){
    return {
        type: 'ASK_START',
        what
    }   
}

export function askComplete(what){
    return {
        type: 'ASK_COMPLETE',
        what
    }   
}

export function askSuccess(what, data){
    return {
        type: 'ASK_SUCCESS',
        what,
        data
    }
}

export function askFail(what, error){
    return {
        type: 'ASK_FAIL',
        what,
        error
    }
}

export function askReset(what){
    return {
        type: 'ASK_RESET',
        what
    }
}