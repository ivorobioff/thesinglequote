export default function ask (state = {}, action){
    switch (action.type){
        case 'ASK_START':
            state = Object.assign({}, state);
            state[action.what] = { status: 'start' }
            return state;
        case 'ASK_COMPLETE':
            state = Object.assign({}, state);
            state[action.what] = { status: 'complete' };
            return state;
        case 'ASK_SUCCESS':
            state = Object.assign({}, state);
            state[action.what] = { status: 'success', data: action.data };
            return state;

        case 'ASK_FAIL':
            state = Object.assign({}, state);
            state[action.what] = { status: 'fail', error: action.error };
            return state;
        case 'ASK_RESET':
            state = Object.assign({}, state);

            var whats = action.form;

            if (typeof whats === 'string'){
                whats = [whats];
            }

            whats.forEach(form => {
                state[what] = { status: 'none' };    
            });

            return state;
        default: 
            return state;
    }
}