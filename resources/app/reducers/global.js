export default function global (state = {}, action){
    if (action.type === 'GLOBAL_DISMISS_MESSAGE'){
        return {};
    }

    if (action.type === 'FORM_SUCCESS' && action.form === 'signUp'){
        return {
            message: {
                content: 'The agent has been successfully registered!',
                color: 'success'
            }
        }
    }

    if (action.type === 'FORM_FAIL' && typeof action.error === 'string'){
        return {
            message: {
                content: action.error,
                color: 'danger'
            }
        }
    }
    
    return state;
}