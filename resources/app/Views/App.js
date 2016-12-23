import { View } from 'sparrow-ui';
import Login from './Login';

class App extends View {
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
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav">
                                <li>
                                    <a href="dashboard.html">Dashboard</a>
                                </li>
                                <li>
                                    <a href="post.html">Post a Quote</a>
                                </li>
                                <li>
                                    <a href="login.html">Log In</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="container">
                        <hr>

                        <div id="content"></div>
                        <hr>

                    <footer>
                        <div class="row">
                            <div class="col-lg-12">
                                <p>Copyright &copy; Tapo Insurance Agency 2016</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        `);

        var login = new Login();

        el.find('#content').html(login.render());

        return el;
    }
}

export default App;