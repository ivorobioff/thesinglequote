var serverErrorId = 0;

export function serverError(error){
    return {
        type: 'SERVER_ERROR',
        id: serverErrorId ++,
        error
    }
}

export function serverErrorDismiss(id){
    return {
        type: 'SERVER_ERROR_DISMISS',
        id
    }
}

export function serverForbidden(){
    return {
        type: 'SERVER_FORBIDDEN'
    }
}