import Session from '../helpers/Session';

const init = Session.has() ? Session.get() : {};

export default function auth (state = init, action) {

    if (action.type === 'FORM_SUCCESS' && action.form === 'signIn'){
        return action.data;
    }

    if (action.type === 'SESSION_DESTROY'){
        return {};
    }

    if (action.type === 'SESSION_REFRESH'){
        return action.data;
    }
    
    return state;
}