export default function redirect (state = { status: 'none' }, action){
    switch (action.type){
        case 'FORM_START':
            state = Object.assign({}, state);
            state[action.form] = { status: 'start' }
            return state;
        case 'FORM_COMPLETE':
            state = Object.assign({}, state);
            state[action.form] = { status: 'complete' };
            return state;
        case 'FORM_SUCCESS':
            state = Object.assign({}, state);
            state[action.form] = { status: 'success', data: action.data };
            return state;

        case 'FORM_FAIL':
            state = Object.assign({}, state);
            state[action.form] = { status: 'fail', error: action.error };
            return state;
        case 'FORM_RESET':
            state = Object.assign({}, state);
            state[action.form] = { status: 'none' };
            return state;
        default: 
            return state;
    }
}