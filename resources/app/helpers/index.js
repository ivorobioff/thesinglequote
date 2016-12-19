import { serverError, serverForbidden } from '../actions/server';
import Session from './Session';
import { sessionRefresh, sessionDestroy } from '../actions/auth';

export function backend (options) {
    
    var config = {
        url: '/api' + options.url,
        type: options.method,
        contentType: 'application/json'
    };

    if (typeof options.data !== 'undefined'){
        if (options.method === 'GET' || options.method === 'DELETE'){
            config.url += '?' + decodeURIComponent($.param(options.data));
        } else {
            config.data = JSON.stringify(options.data);
        }
    }
    
    return {
        run(dispatch) {
            var s = Session.get();
                
            if (s !== null){

                var expiresAt = new Date(s.expiresAt);
                var now = new Date();

                // gives 10 minutes to refresh the session
                
                if (now.getTime() >= (expiresAt.getTime() - 600000)){
                    backend({ method: 'POST', url: '/sessions/' + s.id + '/refresh'}).run(dispatch).done(function(data){
                        sessionRefresh(data);
                    }).fail(function(){
                        sessionDestroy();
                    });
                }
    
                config.headers = { token: s.token }
            }

            return $.ajax(config).fail(function(x){
                if (x.status >= 500){
                    dispatch(serverError('You got an internal server error. Please contact our support center.'));
                }

                if (x.status == 403){
                    dispatch(serverForbidden());
                }
            });
        }
    }
}


export const BOOTSTRAP_COLOR_SCHEMAS = ['active', 'success', 'info', 'warning', 'danger'];