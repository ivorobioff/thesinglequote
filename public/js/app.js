/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _App = __webpack_require__(1);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = new _App2.default();

	$('#app').html(app.render());

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _sparrowUi = __webpack_require__(2);

	var _Login = __webpack_require__(3);

	var _Login2 = _interopRequireDefault(_Login);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_View) {
	    _inherits(App, _View);

	    function App() {
	        _classCallCheck(this, App);

	        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	    }

	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            var el = $('\n            <div>\n                <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">\n                    <div class="container">\n                        <div class="navbar-header">\n                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n                                <span class="sr-only">Toggle navigation</span>\n                                <span class="icon-bar"></span>\n                                <span class="icon-bar"></span>\n                                <span class="icon-bar"></span>\n                            </button>\n                            <a class="navbar-brand" href="index.html">TheSingleQuote.com</a>\n                        </div>\n                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n                            <ul class="nav navbar-nav">\n                                <li>\n                                    <a href="dashboard.html">Dashboard</a>\n                                </li>\n                                <li>\n                                    <a href="post.html">Post a Quote</a>\n                                </li>\n                                <li>\n                                    <a href="login.html">Log In</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n                <div class="container">\n                        <hr>\n\n                        <div id="content"></div>\n                        <hr>\n\n                    <footer>\n                        <div class="row">\n                            <div class="col-lg-12">\n                                <p>Copyright &copy; Tapo Insurance Agency 2016</p>\n                            </div>\n                        </div>\n                    </footer>\n                </div>\n            </div>\n        ');

	            var login = new _Login2.default();

	            el.find('#content').html(login.render());

	            return el;
	        }
	    }]);

	    return App;
	}(_sparrowUi.View);

	exports.default = App;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = exports.View = function View() {
	    _classCallCheck(this, View);
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _sparrowUi = __webpack_require__(2);

	var _Form = __webpack_require__(4);

	var _Form2 = _interopRequireDefault(_Form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Login = function (_View) {
	    _inherits(Login, _View);

	    function Login() {
	        _classCallCheck(this, Login);

	        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
	    }

	    _createClass(Login, [{
	        key: 'showAlert',
	        value: function showAlert(text, color) {

	            this.removeAlert();

	            this.alert = $('<div/>', {
	                'class': 'alert alert-' + color
	            });

	            this.alert.text(text);

	            this.el.find('#formsHolder').prepend(this.alert);
	        }
	    }, {
	        key: 'removeAlert',
	        value: function removeAlert() {
	            if (this.alert) {
	                this.alert.remove();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var el = $('<div id="login-overlay" class="modal-dialog">\n            <div class="modal-content">\n                <div class="modal-header">\n                    <h4 class="modal-title" id="myModalLabel">Login to <b>TheSingleQuote.com</b></h4> or go back to our <a href="www.thesinglequote.com">main site</a>.\n                </div>\n                <div id="formsHolder" class="modal-body">\n                    <div class="row">\n                        <div class="col-xs-6">\n                            <div class="well" id="signIn">\n                                \n                            </div>\n                        </div>\n                        <div class="col-xs-6">\n                            <div class="well" id="signUp">\n                                \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>');

	            this.el = el;

	            var signIn = new _Form2.default({ method: 'POST', url: '/sessions' });

	            signIn.addEmail('username', { label: 'Email', placeholder: 'Email', required: true, alias: 'credentials' }).addPassword('password', { label: 'Password', placeholder: 'Password', required: true }).addSubmit('Login', { color: 'success', isBlock: true });

	            el.find('#signIn').html(signIn.render());

	            var signUp = new _Form2.default({ method: 'POST', url: '/agents' });

	            signUp.addInput('fullName', { label: 'Full Name', placeholder: 'Full Name', required: true }).addEmail('email', { label: 'Email', placeholder: 'Email', required: true }).addPassword('password', { label: 'Password', placeholder: 'Password', required: true }).addInput('insuranceLicenseNumber', { label: 'Insurance License #', placeholder: 'A123456', required: true }).addCheckbox('agreeToTOS', { label: 'I agree to the TOS', required: true }).addSubmit('Register', { color: 'warning', isBlock: true });

	            signUp.setOnComplete(function () {
	                return _this2.removeAlert();
	            });
	            signIn.setOnComplete(function () {
	                return _this2.removeAlert();
	            });

	            signUp.setOnSuccess(function () {
	                return _this2.showAlert('The agent has been successfully registered!', 'success');
	            });

	            signUp.setOnGlobalError(function (e) {
	                return _this2.showAlert(e, 'danger');
	            });
	            signIn.setOnGlobalError(function (e) {
	                return _this2.showAlert(e, 'danger');
	            });

	            el.find('#signUp').html(signUp.render());

	            return el;
	        }
	    }]);

	    return Login;
	}(_sparrowUi.View);

	exports.default = Login;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _sparrowUi = __webpack_require__(2);

	var _Helpers = __webpack_require__(5);

	var _Input = __webpack_require__(7);

	var _Input2 = _interopRequireDefault(_Input);

	var _Button = __webpack_require__(9);

	var _Button2 = _interopRequireDefault(_Button);

	var _Checkbox = __webpack_require__(10);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Form = function (_View) {
	    _inherits(Form, _View);

	    function Form(request) {
	        _classCallCheck(this, Form);

	        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this));

	        _this.request = request;
	        _this.controls = [];
	        return _this;
	    }

	    _createClass(Form, [{
	        key: 'addPassword',
	        value: function addPassword(name) {
	            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	            return this.addInput(name, Object.assign(options, { type: 'password' }));
	        }
	    }, {
	        key: 'addEmail',
	        value: function addEmail(name) {
	            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	            return this.addInput(name, Object.assign(options, { type: 'email' }));
	        }
	    }, {
	        key: 'addInput',
	        value: function addInput(name, options) {
	            this.controls.push(new _Input2.default(name, options));
	            return this;
	        }
	    }, {
	        key: 'addSubmit',
	        value: function addSubmit(title) {
	            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	            return this.addButton(Object.assign(options, { title: title, type: 'submit' }));
	        }
	    }, {
	        key: 'addButton',
	        value: function addButton(options) {
	            this.controls.push(new _Button2.default(options));
	            return this;
	        }
	    }, {
	        key: 'addCheckbox',
	        value: function addCheckbox(name) {
	            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


	            this.controls.push(new _Checkbox2.default(name, options));

	            return this;
	        }
	    }, {
	        key: 'addTextarea',
	        value: function addTextarea(name) {
	            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	            return this;
	        }
	    }, {
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            var _this2 = this;

	            e.preventDefault();

	            var data = {};

	            this.controls.forEach(function (c) {
	                if (c.getValue) {
	                    data[c.name] = c.getValue();
	                }
	            });

	            var config = this.request;
	            config.data = data;

	            this.controls.forEach(function (c) {
	                return c.disable();
	            });

	            (0, _Helpers.backend)(config).always(function () {
	                _this2.controls.forEach(function (c) {
	                    c.enable();
	                    c.removeError();
	                });

	                if (_this2.onCompleteCallback) {
	                    _this2.onCompleteCallback();
	                }
	            }).fail(function (x) {
	                var error = 'Unknown error';
	                var data = $.parseJSON(x.responseText);

	                if (x.status == 422) {
	                    error = data.errors;
	                    _this2.controls.forEach(function (c) {
	                        if (c.notifyAboutErrors) {
	                            c.notifyAboutErrors(error);
	                        }
	                    });
	                } else {
	                    error = data.message;
	                    if (_this2.onGlobalErrorCallback) {
	                        _this2.onGlobalErrorCallback(error);
	                    }
	                }
	            }).done(function (data) {
	                if (_this2.onSuccessCallback) {
	                    _this2.onSuccessCallback(data);
	                }
	            });
	        }
	    }, {
	        key: 'setOnComplete',
	        value: function setOnComplete(callback) {
	            this.onCompleteCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'setOnSuccess',
	        value: function setOnSuccess(callback) {
	            this.onSuccessCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'setOnGlobalError',
	        value: function setOnGlobalError(callback) {
	            this.onGlobalErrorCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var el = $('<form></form>');

	            el.submit(function (e) {
	                return _this3.onSubmit(e);
	            });

	            this.controls.forEach(function (c) {
	                return el.append(c.render());
	            });

	            return el;
	        }
	    }]);

	    return Form;
	}(_sparrowUi.View);

	exports.default = Form;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.backend = backend;

	var _Session = __webpack_require__(6);

	var _Session2 = _interopRequireDefault(_Session);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function backend(options) {

	    var config = {
	        url: '/api' + options.url,
	        type: options.method,
	        contentType: 'application/json; charset=utf-8'
	    };

	    if (typeof options.data !== 'undefined') {
	        if (options.method === 'GET' || options.method === 'DELETE') {
	            config.url += '?' + decodeURIComponent($.param(options.data));
	        } else {
	            config.data = JSON.stringify(options.data);
	        }
	    }

	    var auth = _Session2.default.get();

	    if (auth) {
	        config.headers = { token: auth.token };
	    }

	    return $.ajax(config);
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Session = {
	    get: function get() {
	        var session = localStorage.getItem('session');

	        if (session === null) {
	            return null;
	        }
	        return $.parseJSON(session);
	    },
	    set: function set(data) {
	        localStorage.setItem('session', JSON.stringify(data));
	    },
	    has: function has() {
	        return localStorage.getItem('session') !== null;
	    },
	    destroy: function destroy() {
	        localStorage.removeItem('session');
	    }
	};

	exports.default = Session;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Control2 = __webpack_require__(8);

	var _Control3 = _interopRequireDefault(_Control2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Input = function (_Control) {
	    _inherits(Input, _Control);

	    function Input(name, options) {
	        _classCallCheck(this, Input);

	        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this));

	        _this.name = name;
	        _this.options = options;
	        return _this;
	    }

	    _createClass(Input, [{
	        key: 'getValue',
	        value: function getValue() {
	            return this.el.val();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var wrapper = $('<div class="form-group"></div>');
	            this.wrapper = wrapper;
	            var name = this.name;
	            var options = this.options;

	            if (options.label) {
	                var label = $('<label></label>');
	                label.text(options.label);
	                label.attr('for', '_id-' + name);
	                label.addClass('control-label');
	                wrapper.append(label);
	            }

	            var control = $('<input />').addClass('form-control').attr('name', name).attr('type', options.type ? options.type : 'text').attr('id', '_id-' + name);

	            this.el = control;

	            if (options.placeholder) {
	                control.attr('placeholder', options.placeholder);
	            }

	            if (options.required) {
	                control.attr('required', 'required');
	            }

	            wrapper.append(control);

	            return wrapper;
	        }
	    }]);

	    return Input;
	}(_Control3.default);

	exports.default = Input;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _sparrowUi = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Control = function (_View) {
	    _inherits(Control, _View);

	    function Control() {
	        _classCallCheck(this, Control);

	        return _possibleConstructorReturn(this, (Control.__proto__ || Object.getPrototypeOf(Control)).apply(this, arguments));
	    }

	    _createClass(Control, [{
	        key: 'disable',
	        value: function disable() {
	            this.el.attr('disabled', 'disabled');
	        }
	    }, {
	        key: 'enable',
	        value: function enable() {
	            this.el.removeAttr('disabled');
	        }
	    }, {
	        key: 'removeError',
	        value: function removeError() {
	            if (this.error) {
	                this.error.remove();
	                this.wrapper.removeClass('has-error');
	            }
	        }
	    }, {
	        key: 'notifyAboutErrors',
	        value: function notifyAboutErrors(errors) {
	            var error = errors[this.name];

	            if (!error) {
	                if (this.options.alias) {
	                    error = errors[this.options.alias];
	                }

	                if (!error) {
	                    return;
	                }
	            }

	            this.error = $('<span class="help-block"></span>');
	            this.wrapper.addClass('has-error').append(this.error.text(error.message));
	        }
	    }]);

	    return Control;
	}(_sparrowUi.View);

	exports.default = Control;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Control2 = __webpack_require__(8);

	var _Control3 = _interopRequireDefault(_Control2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Button = function (_Control) {
	    _inherits(Button, _Control);

	    function Button(options) {
	        _classCallCheck(this, Button);

	        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

	        _this.options = options;
	        return _this;
	    }

	    _createClass(Button, [{
	        key: 'notifyAboutErrors',
	        value: function notifyAboutErrors() {
	            return;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var options = this.options;

	            var wrapper = $('<div class="form-group"><div></div></div>');

	            var control = $('<button></button>');
	            this.el = control;

	            control.text(options.title).attr('type', options.type).addClass('btn');

	            if (options.color) {
	                control.addClass('btn-' + options.color);
	            } else {
	                control.addClass('btn-default');
	            }

	            if (options.isBlock) {
	                control.addClass('btn-block');
	            }

	            wrapper.find('div:first-child').html(control);

	            return wrapper;
	        }
	    }]);

	    return Button;
	}(_Control3.default);

	exports.default = Button;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Control2 = __webpack_require__(8);

	var _Control3 = _interopRequireDefault(_Control2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Checkbox = function (_Control) {
	    _inherits(Checkbox, _Control);

	    function Checkbox(name) {
	        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	        _classCallCheck(this, Checkbox);

	        var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this));

	        _this.options = options;
	        _this.name = name;
	        return _this;
	    }

	    _createClass(Checkbox, [{
	        key: 'getValue',
	        value: function getValue() {
	            return this.el.prop('checked') ? true : false;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var name = this.name;
	            var options = this.options;

	            var wrapper = $('<div class="form-group"><div class="checkbox"></div></div>');
	            this.wrapper = wrapper;
	            var control = $('<input />', { type: 'checkbox', name: name });

	            if (options.required) {
	                control.attr('required', 'required');
	            }

	            this.el = control;

	            if (options.label) {
	                control = $('<label></label>').text(options.label).prepend(control);
	            }

	            wrapper.find('div:first-child').html(control);

	            return wrapper;
	        }
	    }]);

	    return Checkbox;
	}(_Control3.default);

	exports.default = Checkbox;

/***/ }
/******/ ]);