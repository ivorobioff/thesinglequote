import Session from './Session';

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
            var auth = Session.get();
                
            if (auth){
                config.headers = { token: auth.token }
            }

            return $.ajax(config);
        }
    }
}


export const BOOTSTRAP_COLOR_SCHEMAS = ['active', 'success', 'info', 'warning', 'danger'];