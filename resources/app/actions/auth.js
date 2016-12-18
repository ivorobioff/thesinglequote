import { backend } from '../helpers';

export function sessionStart(){
    return {
        type: 'SESSION_START'
    }
}

export function sessionComplete(){
    return {
        type: 'SESSION_COMPLETE'
    }
}

export function sessionSuccess(data){
    return {
        type: 'SESSION_SUCCESS',
        data
    }
}

export function sessionFail(error){
    return {
        type: 'SESSION_FAIL',
        error
    }
}