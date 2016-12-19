export default function redirect (state = {}, action){
    switch (action.type){
        case 'FORM_START':
            state = Object.assign({}, state);
            state[action.form] = { loading: true }
            return state;
        case 'FORM_COMPLETE':
            state = Object.assign({}, state);
            state[action.form] = { loading: false };
            return state;
        case 'FORM_SUCCESS':
            state = Object.assign({}, state);
            state[action.form] = { loading: false, data: action.data };
            return state;

        case 'FORM_FAIL':
            state = Object.assign({}, state);
            state[action.form] = { loading: false, error: action.error };
            return state;
        default: 
            return state;
    }
}