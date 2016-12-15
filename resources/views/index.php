<?php $this->layout('layout'); ?>

<?php $this->start('page') ?>
 <div id="login-overlay" class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">Login to <b>TheSingleQuote.com</b></h4> or go back to our <a href="www.thesinglequote.com">main site</a>.
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-xs-6">
                        <div class="well">
                            <form id="loginForm" method="POST">
                                <div class="form-group">
                                    <label for="email" class="control-label">Email</label>
                                    <input type="text" class="form-control" name="email" value="" required="" title="Please enter your email" placeholder="email">
                                    <span class="help-block"></span>
                                </div>
                                <div class="form-group">
                                    <label for="password" class="control-label">Password</label>
                                    <input type="password" class="form-control" name="password" placeholder="password" value="" required="" title="Please enter your password">
                                    <span class="help-block"></span>
                                </div>
                                <div id="loginErrorMsg" class="alert alert-error hide">Wrong email or password</div>
                                <button type="submit" value="login" name="submit" class="btn btn-success btn-block">Login</button>
                            </form>
                        </div>
                    </div>
                    <div class="col-xs-6">
                        <div class="well">
                            <form id="registerForm" method="POST">
                                <div class="form-group">
                                    <label for="name" class="control-label">Full Name</label>
                                    <input type="text" class="form-control" name="name" placeholder="Brian Abbott" value="" required="" title="name">
                                    <span class="help-block"></span>
                                </div>
                                <div class="form-group">
                                    <label for="emailRegister" class="control-label">Email</label>
                                    <input type="text" class="form-control" name="emailRegister" value="" required="" title="Please enter your Email" placeholder="Email">
                                    <span class="help-block"></span>
                                </div>
                                <div class="form-group">
                                    <label for="password" class="control-label">Password</label>
                                    <input type="password" class="form-control" name="password" placeholder="password" value="" required="" title="Please enter your password">
                                    <span class="help-block"></span>
                                </div>
                                <div class="form-group">
                                    <label for="license" class="control-label">Insurance License #</label>
                                    <input type="text" class="form-control" name="license" placeholder="A123456" value="" required="" title="California License Number">
                                    <span class="help-block"></span>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember" id="remember"> I agree to the TOS
                                    </label>
                                </div>
                                <button type="submit" value="register" name="submit" class="btn btn-warning btn-block">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <a href="dashboard.html"><button  class="btn btn-success btn-block">After they log in they go to Dashboard</button></a>
    <hr>
<?php $this->stop('page'); ?>