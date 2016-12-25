import { View } from 'sparrow-ui';
import Login from './Login';
import Error404 from './Error404';
import Home from './Home';
import AgentNav from './Nav/AgentNav';
import Session from '../Providers/Session';

class App extends View {

    constructor(context){
        super();
        this.context = context;
    }

    render(){
        var el = $(`
            <div>
                <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="index.html">TheSingleQuote.com</a>
                        </div>
                        <div id="navContent" class="collapse navbar-collapse"></div>
                    </div>
                </nav>
            </div>
        `);
        
        if (Session.has()){
            el.find('#navContent').append(new AgentNav().render());
        }

        var container = this.getContent().render();
        container.append('<hr />')

        container.append(`<footer>
            <div class="row">
                <div class="col-lg-12">
                    <p>Copyright &copy; Tapo Insurance Agency 2016</p>
                </div>
            </div>
        </footer>`);

        el.append(container);

        return el;
    }

    getContent(){
        var location = this.context.pathname;

        if (location === '/'){
            return new Home();
        }

        if (location === '/login'){
            return new Login();
        }

        return new Error404();
    }
}

export default App;