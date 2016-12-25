import  { View } from 'sparrow-ui';
import Session from '../../Providers/Session';
import page from 'page';

class AgentNav extends View {
    
    render(){
        var el = $('<a href="#" class="btn btn btn-success btn-sm navbar-btn navbar-right">Sign Out</a>');

        el.click(e => {
            e.preventDefault();
            Session.destroy();
            page('/login');
        });

        return el;
    }
}

export default AgentNav;