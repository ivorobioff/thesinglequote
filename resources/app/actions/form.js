import { backend } from '../helpers';

export function submit(data, options){
    return (dispatch) => {
        var request = options.request;
        request.data = data;

        var actions = options.actions;

        if (!actions){
            actions = {};
        }

        if (actions.start){
            dispatch(actions.start());
        }   
        var promise = backend(request).run(dispatch);   

        if (actions.complete){
            promise.always(() => dispatch(actions.complete()));
        }

        if (actions.success){
            promise.done((data) => dispatch(actions.success(data)));
        }

        if (actions.fail){
            promise.fail(() => {
                dispatch(actions.fail('Uknown error!'))
            });
        }  
    }
}