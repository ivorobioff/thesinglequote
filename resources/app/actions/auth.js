export function sessionRefresh(data){
    return {
        type: 'SESSION_REFRESH',
        data
    }
}

export function sessionDestroy(){
    return {
        type: 'SESSION_DESTROY',
        data
    }
}