import { backend } from '../helpers';

export function sessionStore(data){
    return {
        type: 'SESSION_STORE',
        data
    }
}