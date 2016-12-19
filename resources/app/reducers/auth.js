import Session from '../helpers/Session';

const init = Session.has() ? Session.get() : {};

export default function session (state = init, action) {

    if (action.type === 'FORM_SUCCESS' && action.form === 'signIn'){
        return action.data;
    }
    
    return state;
}