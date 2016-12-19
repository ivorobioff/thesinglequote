import Session from '../helpers/Session';

const init = Session.has() ? Session.get() : {};

export default function session (state = init, action) {

    switch (action.type) {
        case 'SESSION_STORE':
            return action.data;
        default: 
            return state;
    }

    return state;
}