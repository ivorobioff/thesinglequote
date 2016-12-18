export default function redirect (state = {}, action){
    switch (action.type){
        case 'REDIRECT_TO':
            return { id: action.id, location: action.location, historical: action.historical };
        default: 
            return state;
    }
}