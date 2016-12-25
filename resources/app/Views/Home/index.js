import { View } from 'sparrow-ui';
import Session from '../../Providers/Session';
import OwnPostsList from '../Post/OwnPostsList';
import Modal from '../Modal';

class Home extends View {

    onNewPostClick(e){
        e.preventDefault();
    }
    
    render(){
        var el = $(`<div class="container">
            <header class="jumbotron hero-spacer">
                <h1 id="greeting"></h1>
                <p>This page will show quotes. It will also allow them to edit their information.</p>
                <p><a class="btn btn-primary btn-large">Call to action!</a>
                </p>
            </header>
            <hr/>
            <div class="panel panel-default panel-table">
              <div class="panel-heading">
                <div class="row">
                  <div class="col col-xs-6">
                    <h3 class="panel-title">Your Posts</h3>
                  </div>
                  <div class="col col-xs-6 text-right">
                    <a id="newPostClick" class="btn btn-primary btn-sml" href="#">Post New</a>
                  </div>
                </div>
              </div>
              <div id="ownPostsList" class="panel-body">
              </div>
            </div>
        </div>`);

        var user = Session.get().user;

        el.find('#greeting').text('Welcome back ' + user.fullName);
        el.find('#newPostClick').click(e => this.onNewPostClick(e));

        el.find('#ownPostsList').html(new OwnPostsList().render());
        
        return el;
    }
} 

export default Home;