export default function server(state = { errors: []}, action) {
    switch (action.type){
        case 'SERVER_ERROR':
            return { 
                errors: [...state.errors, { error: action.error, id: action.id}] 
            };
        case 'SERVER_ERROR_DISMISS':
            return {
                errors: state.errors.filter(error => error.id !== action.id)
            }
        default:
            return state;
    }
}