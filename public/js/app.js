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
	        key: 'render',
	        value: function render() {
	            var el = $('<div id="login-overlay" class="modal-dialog">\n            <div class="modal-content">\n                <div class="modal-header">\n                    <h4 class="modal-title" id="myModalLabel">Login to <b>TheSingleQuote.com</b></h4> or go back to our <a href="www.thesinglequote.com">main site</a>.\n                </div>\n                <div class="modal-body">\n                    <div class="row">\n                        <div class="col-xs-6">\n                            <div class="well" id="signIn">\n                                \n                            </div>\n                        </div>\n                        <div class="col-xs-6">\n                            <div class="well" id="signUp">\n                                \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>');

	            var signIn = new _Form2.default({ method: 'POST', url: '/session' });

	            signIn.addEmail('username', { label: 'Email', placeholder: 'Email' }).addPassword('password', { label: 'Password', placeholder: 'Password' }).addSubmit('Login', { color: 'success', isBlock: true });

	            el.find('#signIn').html(signIn.render());

	            var signUp = new _Form2.default({ method: 'POST', url: '/agents' });

	            signUp.addInput('fullName', { label: 'Full Name', placeholder: 'Full Name' }).addEmail('email', { label: 'Email', placeholder: 'Email' }).addPassword('password', { label: 'Password', placeholder: 'Password' }).addInput('insuranceLicenseNumber', { label: 'Insurance License #', placeholder: 'A123456' }).addCheckbox('agreeToTOS', { label: 'I agree to the TOS' }).addSubmit('Register', { color: 'warning', isBlock: true });

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
	            var wrapper = $('<div class="form-group"></div>');

	            if (options.label) {
	                var label = $('<label></label>');
	                label.text(options.label);
	                label.attr('for', '_id-' + name);
	                label.addClass('control-label');
	                wrapper.append(label);
	            }

	            var control = $('<input />').addClass('form-control').attr('name', name).attr('type', options.type ? options.type : 'text').attr('id', '_id-' + name);

	            if (options.placeholder) {
	                control.attr('placeholder', options.placeholder);
	            }

	            wrapper.append(control);

	            this.controls.push({ wrapper: wrapper, control: control });

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
	            var wrapper = $('<div class="form-group"><div></div></div>');

	            var control = $('<button></button>');
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

	            this.controls.push({ wrapper: wrapper, control: control });
	            return this;
	        }
	    }, {
	        key: 'addCheckbox',
	        value: function addCheckbox(name) {
	            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	            var wrapper = $('<div class="form-group"><div class="checkbox"></div></div>');

	            var checkbox = $('<input />', { type: 'checkbox', name: name });
	            var control = checkbox;

	            if (options.label) {
	                checkbox = $('<label></label>').text(options.label).prepend(checkbox);
	            }

	            wrapper.find('div:first-child').html(checkbox);

	            this.controls.push({ wrapper: wrapper, control: control });

	            return this;
	        }
	    }, {
	        key: 'addTextarea',
	        value: function addTextarea(name) {
	            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	            return this;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var el = $('<form></form>');

	            this.controls.forEach(function (c) {
	                return el.append(c.wrapper);
	            });

	            return el;
	        }
	    }]);

	    return Form;
	}(_sparrowUi.View);

	exports.default = Form;

/***/ }
/******/ ]);