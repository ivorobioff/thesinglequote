import Session from '../helpers/Session';

const init = {
    loading: false,
    error: null,    
    data: Session.has() ? Session.get() : {}
}

export default function session (state = init, action) {

    switch (action.type) {
        case 'SESSION_START': 
            return Object.assign({}, state, { loading: true });
        case 'SESSION_DONE': 
            return Object.assign({}, state, { loading: false });
        case 'SESSION_SUCCESS': 
            return Object.assign({}, state, { data: action.data, error: null });
        case 'SESSION_FAIL': 
            return Object.assign({}, state, { error: action.error, data: {} });
        default: 
            return state;
    }

    return state;
}