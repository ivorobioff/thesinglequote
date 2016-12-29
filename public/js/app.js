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

	var _page = __webpack_require__(3);

	var _page2 = _interopRequireDefault(_page);

	var _Session = __webpack_require__(10);

	var _Session2 = _interopRequireDefault(_Session);

	var _Helpers = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	setInterval(function () {

	    var session = _Session2.default.get();

	    if (!session) {
	        return;
	    }

	    var expiresAt = new Date(session.expiresAt);
	    var now = new Date();

	    // gives 10 minutes to refresh the session

	    if (now.getTime() >= expiresAt.getTime() - 600000) {
	        _Session2.default.refresh();
	    }
	}, 10000);

	(0, _page2.default)(function (context) {
	    var location = context.pathname;

	    if (_Session2.default.has() && location === '/login') {
	        return _page2.default.redirect('/');
	    }

	    if (!_Session2.default.has() && location !== '/login') {
	        return _page2.default.redirect('/login');
	    }

	    $('#app').html(new _App2.default(context).render());
	});

	(0, _page2.default)();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _sparrowUi = __webpack_require__(2);

	var _Login = __webpack_require__(7);

	var _Login2 = _interopRequireDefault(_Login);

	var _Error = __webpack_require__(21);

	var _Error2 = _interopRequireDefault(_Error);

	var _Home = __webpack_require__(22);

	var _Home2 = _interopRequireDefault(_Home);

	var _AgentNav = __webpack_require__(39);

	var _AgentNav2 = _interopRequireDefault(_AgentNav);

	var _Session = __webpack_require__(10);

	var _Session2 = _interopRequireDefault(_Session);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_View) {
	    _inherits(App, _View);

	    function App(context) {
	        _classCallCheck(this, App);

	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

	        _this.context = context;
	        return _this;
	    }

	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            var el = $('\n            <div>\n                <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">\n                    <div class="container">\n                        <div id="navHeader" class="navbar-header">\n                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n                                <span class="sr-only">Toggle navigation</span>\n                                <span class="icon-bar"></span>\n                                <span class="icon-bar"></span>\n                                <span class="icon-bar"></span>\n                            </button>\n                        </div>\n                        <div id="navContent" class="collapse navbar-collapse"></div>\n                    </div>\n                </nav>\n            </div>\n        ');

	            el.find('#navHeader').append(new _sparrowUi.Link({
	                'class': 'navbar-brand',
	                href: '/',
	                text: 'TheSingleQuote.com'
	            }).render());

	            if (_Session2.default.has()) {
	                el.find('#navContent').append(new _AgentNav2.default().render());
	            }

	            var container = this.getContent().render();
	            container.append('<hr />');

	            container.append('<footer>\n            <div class="row">\n                <div class="col-lg-12">\n                    <p>Copyright &copy; Tapo Insurance Agency 2016</p>\n                </div>\n            </div>\n        </footer>');

	            el.append(container);

	            return el;
	        }
	    }, {
	        key: 'getContent',
	        value: function getContent() {
	            var location = this.context.pathname;

	            if (location === '/') {
	                return new _Home2.default();
	            }

	            if (location === '/login') {
	                return new _Login2.default();
	            }

	            return new _Error2.default();
	        }
	    }]);

	    return App;
	}(_sparrowUi.View);

	exports.default = App;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Link = exports.View = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _page = __webpack_require__(3);

	var _page2 = _interopRequireDefault(_page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = exports.View = function View() {
	    _classCallCheck(this, View);
	};

	var Link = exports.Link = function (_View) {
	    _inherits(Link, _View);

	    function Link(options) {
	        _classCallCheck(this, Link);

	        var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this));

	        _this.options = options;
	        return _this;
	    }

	    _createClass(Link, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return $('<a/>', {
	                href: this.options.href,
	                text: this.options.text,
	                'class': this.options['class']
	            }).click(function (e) {
	                e.preventDefault();
	                (0, _page2.default)(_this2.options.href);
	            });
	        }
	    }]);

	    return Link;
	}(View);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {  /* globals require, module */

	  'use strict';

	  /**
	   * Module dependencies.
	   */

	  var pathtoRegexp = __webpack_require__(5);

	  /**
	   * Module exports.
	   */

	  module.exports = page;

	  /**
	   * Detect click event
	   */
	  var clickEvent = ('undefined' !== typeof document) && document.ontouchstart ? 'touchstart' : 'click';

	  /**
	   * To work properly with the URL
	   * history.location generated polyfill in https://github.com/devote/HTML5-History-API
	   */

	  var location = ('undefined' !== typeof window) && (window.history.location || window.location);

	  /**
	   * Perform initial dispatch.
	   */

	  var dispatch = true;


	  /**
	   * Decode URL components (query string, pathname, hash).
	   * Accommodates both regular percent encoding and x-www-form-urlencoded format.
	   */
	  var decodeURLComponents = true;

	  /**
	   * Base path.
	   */

	  var base = '';

	  /**
	   * Running flag.
	   */

	  var running;

	  /**
	   * HashBang option
	   */

	  var hashbang = false;

	  /**
	   * Previous context, for capturing
	   * page exit events.
	   */

	  var prevContext;

	  /**
	   * Register `path` with callback `fn()`,
	   * or route `path`, or redirection,
	   * or `page.start()`.
	   *
	   *   page(fn);
	   *   page('*', fn);
	   *   page('/user/:id', load, user);
	   *   page('/user/' + user.id, { some: 'thing' });
	   *   page('/user/' + user.id);
	   *   page('/from', '/to')
	   *   page();
	   *
	   * @param {string|!Function|!Object} path
	   * @param {Function=} fn
	   * @api public
	   */

	  function page(path, fn) {
	    // <callback>
	    if ('function' === typeof path) {
	      return page('*', path);
	    }

	    // route <path> to <callback ...>
	    if ('function' === typeof fn) {
	      var route = new Route(/** @type {string} */ (path));
	      for (var i = 1; i < arguments.length; ++i) {
	        page.callbacks.push(route.middleware(arguments[i]));
	      }
	      // show <path> with [state]
	    } else if ('string' === typeof path) {
	      page['string' === typeof fn ? 'redirect' : 'show'](path, fn);
	      // start [options]
	    } else {
	      page.start(path);
	    }
	  }

	  /**
	   * Callback functions.
	   */

	  page.callbacks = [];
	  page.exits = [];

	  /**
	   * Current path being processed
	   * @type {string}
	   */
	  page.current = '';

	  /**
	   * Number of pages navigated to.
	   * @type {number}
	   *
	   *     page.len == 0;
	   *     page('/login');
	   *     page.len == 1;
	   */

	  page.len = 0;

	  /**
	   * Get or set basepath to `path`.
	   *
	   * @param {string} path
	   * @api public
	   */

	  page.base = function(path) {
	    if (0 === arguments.length) return base;
	    base = path;
	  };

	  /**
	   * Bind with the given `options`.
	   *
	   * Options:
	   *
	   *    - `click` bind to click events [true]
	   *    - `popstate` bind to popstate [true]
	   *    - `dispatch` perform initial dispatch [true]
	   *
	   * @param {Object} options
	   * @api public
	   */

	  page.start = function(options) {
	    options = options || {};
	    if (running) return;
	    running = true;
	    if (false === options.dispatch) dispatch = false;
	    if (false === options.decodeURLComponents) decodeURLComponents = false;
	    if (false !== options.popstate) window.addEventListener('popstate', onpopstate, false);
	    if (false !== options.click) {
	      document.addEventListener(clickEvent, onclick, false);
	    }
	    if (true === options.hashbang) hashbang = true;
	    if (!dispatch) return;
	    var url = (hashbang && ~location.hash.indexOf('#!')) ? location.hash.substr(2) + location.search : location.pathname + location.search + location.hash;
	    page.replace(url, null, true, dispatch);
	  };

	  /**
	   * Unbind click and popstate event handlers.
	   *
	   * @api public
	   */

	  page.stop = function() {
	    if (!running) return;
	    page.current = '';
	    page.len = 0;
	    running = false;
	    document.removeEventListener(clickEvent, onclick, false);
	    window.removeEventListener('popstate', onpopstate, false);
	  };

	  /**
	   * Show `path` with optional `state` object.
	   *
	   * @param {string} path
	   * @param {Object=} state
	   * @param {boolean=} dispatch
	   * @param {boolean=} push
	   * @return {!Context}
	   * @api public
	   */

	  page.show = function(path, state, dispatch, push) {
	    var ctx = new Context(path, state);
	    page.current = ctx.path;
	    if (false !== dispatch) page.dispatch(ctx);
	    if (false !== ctx.handled && false !== push) ctx.pushState();
	    return ctx;
	  };

	  /**
	   * Goes back in the history
	   * Back should always let the current route push state and then go back.
	   *
	   * @param {string} path - fallback path to go back if no more history exists, if undefined defaults to page.base
	   * @param {Object=} state
	   * @api public
	   */

	  page.back = function(path, state) {
	    if (page.len > 0) {
	      // this may need more testing to see if all browsers
	      // wait for the next tick to go back in history
	      history.back();
	      page.len--;
	    } else if (path) {
	      setTimeout(function() {
	        page.show(path, state);
	      });
	    }else{
	      setTimeout(function() {
	        page.show(base, state);
	      });
	    }
	  };


	  /**
	   * Register route to redirect from one path to other
	   * or just redirect to another route
	   *
	   * @param {string} from - if param 'to' is undefined redirects to 'from'
	   * @param {string=} to
	   * @api public
	   */
	  page.redirect = function(from, to) {
	    // Define route from a path to another
	    if ('string' === typeof from && 'string' === typeof to) {
	      page(from, function(e) {
	        setTimeout(function() {
	          page.replace(/** @type {!string} */ (to));
	        }, 0);
	      });
	    }

	    // Wait for the push state and replace it with another
	    if ('string' === typeof from && 'undefined' === typeof to) {
	      setTimeout(function() {
	        page.replace(from);
	      }, 0);
	    }
	  };

	  /**
	   * Replace `path` with optional `state` object.
	   *
	   * @param {string} path
	   * @param {Object=} state
	   * @param {boolean=} init
	   * @param {boolean=} dispatch
	   * @return {!Context}
	   * @api public
	   */


	  page.replace = function(path, state, init, dispatch) {
	    var ctx = new Context(path, state);
	    page.current = ctx.path;
	    ctx.init = init;
	    ctx.save(); // save before dispatching, which may redirect
	    if (false !== dispatch) page.dispatch(ctx);
	    return ctx;
	  };

	  /**
	   * Dispatch the given `ctx`.
	   *
	   * @param {Context} ctx
	   * @api private
	   */
	  page.dispatch = function(ctx) {
	    var prev = prevContext,
	      i = 0,
	      j = 0;

	    prevContext = ctx;

	    function nextExit() {
	      var fn = page.exits[j++];
	      if (!fn) return nextEnter();
	      fn(prev, nextExit);
	    }

	    function nextEnter() {
	      var fn = page.callbacks[i++];

	      if (ctx.path !== page.current) {
	        ctx.handled = false;
	        return;
	      }
	      if (!fn) return unhandled(ctx);
	      fn(ctx, nextEnter);
	    }

	    if (prev) {
	      nextExit();
	    } else {
	      nextEnter();
	    }
	  };

	  /**
	   * Unhandled `ctx`. When it's not the initial
	   * popstate then redirect. If you wish to handle
	   * 404s on your own use `page('*', callback)`.
	   *
	   * @param {Context} ctx
	   * @api private
	   */
	  function unhandled(ctx) {
	    if (ctx.handled) return;
	    var current;

	    if (hashbang) {
	      current = base + location.hash.replace('#!', '');
	    } else {
	      current = location.pathname + location.search;
	    }

	    if (current === ctx.canonicalPath) return;
	    page.stop();
	    ctx.handled = false;
	    location.href = ctx.canonicalPath;
	  }

	  /**
	   * Register an exit route on `path` with
	   * callback `fn()`, which will be called
	   * on the previous context when a new
	   * page is visited.
	   */
	  page.exit = function(path, fn) {
	    if (typeof path === 'function') {
	      return page.exit('*', path);
	    }

	    var route = new Route(path);
	    for (var i = 1; i < arguments.length; ++i) {
	      page.exits.push(route.middleware(arguments[i]));
	    }
	  };

	  /**
	   * Remove URL encoding from the given `str`.
	   * Accommodates whitespace in both x-www-form-urlencoded
	   * and regular percent-encoded form.
	   *
	   * @param {string} val - URL component to decode
	   */
	  function decodeURLEncodedURIComponent(val) {
	    if (typeof val !== 'string') { return val; }
	    return decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;
	  }

	  /**
	   * Initialize a new "request" `Context`
	   * with the given `path` and optional initial `state`.
	   *
	   * @constructor
	   * @param {string} path
	   * @param {Object=} state
	   * @api public
	   */

	  function Context(path, state) {
	    if ('/' === path[0] && 0 !== path.indexOf(base)) path = base + (hashbang ? '#!' : '') + path;
	    var i = path.indexOf('?');

	    this.canonicalPath = path;
	    this.path = path.replace(base, '') || '/';
	    if (hashbang) this.path = this.path.replace('#!', '') || '/';

	    this.title = document.title;
	    this.state = state || {};
	    this.state.path = path;
	    this.querystring = ~i ? decodeURLEncodedURIComponent(path.slice(i + 1)) : '';
	    this.pathname = decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
	    this.params = {};

	    // fragment
	    this.hash = '';
	    if (!hashbang) {
	      if (!~this.path.indexOf('#')) return;
	      var parts = this.path.split('#');
	      this.path = parts[0];
	      this.hash = decodeURLEncodedURIComponent(parts[1]) || '';
	      this.querystring = this.querystring.split('#')[0];
	    }
	  }

	  /**
	   * Expose `Context`.
	   */

	  page.Context = Context;

	  /**
	   * Push state.
	   *
	   * @api private
	   */

	  Context.prototype.pushState = function() {
	    page.len++;
	    history.pushState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
	  };

	  /**
	   * Save the context state.
	   *
	   * @api public
	   */

	  Context.prototype.save = function() {
	    history.replaceState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
	  };

	  /**
	   * Initialize `Route` with the given HTTP `path`,
	   * and an array of `callbacks` and `options`.
	   *
	   * Options:
	   *
	   *   - `sensitive`    enable case-sensitive routes
	   *   - `strict`       enable strict matching for trailing slashes
	   *
	   * @constructor
	   * @param {string} path
	   * @param {Object=} options
	   * @api private
	   */

	  function Route(path, options) {
	    options = options || {};
	    this.path = (path === '*') ? '(.*)' : path;
	    this.method = 'GET';
	    this.regexp = pathtoRegexp(this.path,
	      this.keys = [],
	      options);
	  }

	  /**
	   * Expose `Route`.
	   */

	  page.Route = Route;

	  /**
	   * Return route middleware with
	   * the given callback `fn()`.
	   *
	   * @param {Function} fn
	   * @return {Function}
	   * @api public
	   */

	  Route.prototype.middleware = function(fn) {
	    var self = this;
	    return function(ctx, next) {
	      if (self.match(ctx.path, ctx.params)) return fn(ctx, next);
	      next();
	    };
	  };

	  /**
	   * Check if this route matches `path`, if so
	   * populate `params`.
	   *
	   * @param {string} path
	   * @param {Object} params
	   * @return {boolean}
	   * @api private
	   */

	  Route.prototype.match = function(path, params) {
	    var keys = this.keys,
	      qsIndex = path.indexOf('?'),
	      pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
	      m = this.regexp.exec(decodeURIComponent(pathname));

	    if (!m) return false;

	    for (var i = 1, len = m.length; i < len; ++i) {
	      var key = keys[i - 1];
	      var val = decodeURLEncodedURIComponent(m[i]);
	      if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {
	        params[key.name] = val;
	      }
	    }

	    return true;
	  };


	  /**
	   * Handle "populate" events.
	   */

	  var onpopstate = (function () {
	    var loaded = false;
	    if ('undefined' === typeof window) {
	      return;
	    }
	    if (document.readyState === 'complete') {
	      loaded = true;
	    } else {
	      window.addEventListener('load', function() {
	        setTimeout(function() {
	          loaded = true;
	        }, 0);
	      });
	    }
	    return function onpopstate(e) {
	      if (!loaded) return;
	      if (e.state) {
	        var path = e.state.path;
	        page.replace(path, e.state);
	      } else {
	        page.show(location.pathname + location.hash, undefined, undefined, false);
	      }
	    };
	  })();
	  /**
	   * Handle "click" events.
	   */

	  function onclick(e) {

	    if (1 !== which(e)) return;

	    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	    if (e.defaultPrevented) return;



	    // ensure link
	    // use shadow dom when available
	    var el = e.path ? e.path[0] : e.target;
	    while (el && 'A' !== el.nodeName) el = el.parentNode;
	    if (!el || 'A' !== el.nodeName) return;



	    // Ignore if tag has
	    // 1. "download" attribute
	    // 2. rel="external" attribute
	    if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;

	    // ensure non-hash for the same path
	    var link = el.getAttribute('href');
	    if (!hashbang && el.pathname === location.pathname && (el.hash || '#' === link)) return;



	    // Check for mailto: in the href
	    if (link && link.indexOf('mailto:') > -1) return;

	    // check target
	    if (el.target) return;

	    // x-origin
	    if (!sameOrigin(el.href)) return;



	    // rebuild path
	    var path = el.pathname + el.search + (el.hash || '');

	    // strip leading "/[drive letter]:" on NW.js on Windows
	    if (typeof process !== 'undefined' && path.match(/^\/[a-zA-Z]:\//)) {
	      path = path.replace(/^\/[a-zA-Z]:\//, '/');
	    }

	    // same page
	    var orig = path;

	    if (path.indexOf(base) === 0) {
	      path = path.substr(base.length);
	    }

	    if (hashbang) path = path.replace('#!', '');

	    if (base && orig === path) return;

	    e.preventDefault();
	    page.show(orig);
	  }

	  /**
	   * Event button.
	   */

	  function which(e) {
	    e = e || window.event;
	    return null === e.which ? e.button : e.which;
	  }

	  /**
	   * Check if `href` is the same origin.
	   */

	  function sameOrigin(href) {
	    var origin = location.protocol + '//' + location.hostname;
	    if (location.port) origin += ':' + location.port;
	    return (href && (0 === href.indexOf(origin)));
	  }

	  page.sameOrigin = sameOrigin;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var isarray = __webpack_require__(6)

	/**
	 * Expose `pathToRegexp`.
	 */
	module.exports = pathToRegexp
	module.exports.parse = parse
	module.exports.compile = compile
	module.exports.tokensToFunction = tokensToFunction
	module.exports.tokensToRegExp = tokensToRegExp

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {String} str
	 * @return {Array}
	 */
	function parse (str) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var res

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }

	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var suffix = res[6]
	    var asterisk = res[7]

	    var repeat = suffix === '+' || suffix === '*'
	    var optional = suffix === '?' || suffix === '*'
	    var delimiter = prefix || '/'
	    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      pattern: escapeGroup(pattern)
	    })
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {String}   str
	 * @return {Function}
	 */
	function compile (str) {
	  return tokensToFunction(parse(str))
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^' + tokens[i].pattern + '$')
	    }
	  }

	  return function (obj) {
	    var path = ''
	    var data = obj || {}

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]

	      if (typeof token === 'string') {
	        path += token

	        continue
	      }

	      var value = data[token.name]
	      var segment

	      if (value == null) {
	        if (token.optional) {
	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encodeURIComponent(value[j])

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }

	        continue
	      }

	      segment = encodeURIComponent(value)

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {String} str
	 * @return {String}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {String} group
	 * @return {String}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {RegExp} re
	 * @param  {Array}  keys
	 * @return {RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {String}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {RegExp} path
	 * @param  {Array}  keys
	 * @return {RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        pattern: null
	      })
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {Array}  path
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {String} path
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  var tokens = parse(path)
	  var re = tokensToRegExp(tokens, options)

	  // Attach keys back to the regexp.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] !== 'string') {
	      keys.push(tokens[i])
	    }
	  }

	  return attachKeys(re, keys)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {Array}  tokens
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function tokensToRegExp (tokens, options) {
	  options = options || {}

	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''
	  var lastToken = tokens[tokens.length - 1]
	  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]

	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = token.pattern

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }

	      if (token.optional) {
	        if (prefix) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }

	      route += capture
	    }
	  }

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
	  }

	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
	  }

	  return new RegExp('^' + route, flags(options))
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(String|RegExp|Array)} path
	 * @param  {Array}                 [keys]
	 * @param  {Object}                [options]
	 * @return {RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  keys = keys || []

	  if (!isarray(keys)) {
	    options = keys
	    keys = []
	  } else if (!options) {
	    options = {}
	  }

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, keys, options)
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(path, keys, options)
	  }

	  return stringToRegexp(path, keys, options)
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _sparrowUi = __webpack_require__(2);

	var _Form = __webpack_require__(8);

	var _Form2 = _interopRequireDefault(_Form);

	var _Session = __webpack_require__(10);

	var _Session2 = _interopRequireDefault(_Session);

	var _Agents = __webpack_require__(20);

	var _Agents2 = _interopRequireDefault(_Agents);

	var _page = __webpack_require__(3);

	var _page2 = _interopRequireDefault(_page);

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

	            var el = $('\n            <div class="container">\n                    <hr />\n                    <div id="login-overlay" class="modal-dialog">\n                    <div class="modal-content">\n                        <div class="modal-header">\n                            <h4 class="modal-title" id="myModalLabel">Login to <b>TheSingleQuote.com</b></h4> or go back to our <a href="www.thesinglequote.com">main site</a>.\n                        </div>\n                        <div id="formsHolder" class="modal-body">\n                            <div class="row">\n                                <div class="col-xs-6">\n                                    <div class="well" id="signIn">\n                                        \n                                    </div>\n                                </div>\n                                <div class="col-xs-6">\n                                    <div class="well" id="signUp">\n                                        \n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ');

	            this.el = el;

	            var signIn = new _Form2.default(function (data) {
	                return _Session2.default.store(data);
	            });

	            signIn.addEmail('username', { label: 'Email', placeholder: 'Email', required: true, alias: 'credentials' }).addPassword('password', { label: 'Password', placeholder: 'Password', required: true }).addSubmit('Login', { color: 'success', isBlock: true });

	            el.find('#signIn').html(signIn.render());

	            var signUp = new _Form2.default(function (data) {
	                return _Agents2.default.store(data);
	            }, { resetOnSuccess: true });

	            signUp.addInput('fullName', { label: 'Full Name', placeholder: 'Full Name', required: true }).addEmail('email', { label: 'Email', placeholder: 'Email', required: true }).addPassword('password', { label: 'Password', placeholder: 'Password', required: true }).addInput('insuranceLicenseNumber', { label: 'Insurance License #', placeholder: 'A123456', required: true }).addCheckbox('agreeToTOS', { label: 'I agree to the TOS', required: true }).addSubmit('Register', { color: 'warning', isBlock: true });

	            signUp.addOnComplete(function () {
	                return _this2.removeAlert();
	            });
	            signUp.addOnSuccess(function () {
	                return _this2.showAlert('The agent has been successfully registered!', 'success');
	            });
	            signUp.addOnGlobalError(function (e) {
	                return _this2.showAlert(e, 'danger');
	            });

	            signIn.addOnComplete(function () {
	                return _this2.removeAlert();
	            });
	            signIn.addOnGlobalError(function (e) {
	                return _this2.showAlert(e, 'danger');
	            });
	            signIn.addOnSuccess(function () {
	                return (0, _page2.default)('/');
	            });

	            el.find('#signUp').html(signUp.render());

	            return el;
	        }
	    }]);

	    return Login;
	}(_sparrowUi.View);

	exports.default = Login;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _sparrowUi = __webpack_require__(2);

	var _Helpers = __webpack_require__(9);

	var _Input = __webpack_require__(11);

	var _Input2 = _interopRequireDefault(_Input);

	var _Button = __webpack_require__(13);

	var _Button2 = _interopRequireDefault(_Button);

	var _Checkbox = __webpack_require__(14);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _Textarea = __webpack_require__(15);

	var _Textarea2 = _interopRequireDefault(_Textarea);

	var _Control = __webpack_require__(12);

	var _Control2 = _interopRequireDefault(_Control);

	var _Content = __webpack_require__(16);

	var _Content2 = _interopRequireDefault(_Content);

	var _Alert = __webpack_require__(17);

	var _Alert2 = _interopRequireDefault(_Alert);

	var _Select = __webpack_require__(18);

	var _Select2 = _interopRequireDefault(_Select);

	var _Upload = __webpack_require__(19);

	var _Upload2 = _interopRequireDefault(_Upload);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Form = function (_View) {
	    _inherits(Form, _View);

	    function Form(request) {
	        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	        _classCallCheck(this, Form);

	        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this));

	        _this.request = request;
	        _this.options = options;
	        _this.controls = [];
	        _this.onSuccessCallbacks = [];
	        _this.onGlobalErrorCallbacks = [];
	        _this.onCompleteCallbacks = [];
	        _this.filters = {};
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
	        key: 'addNumber',
	        value: function addNumber(name, options) {
	            return this.addInput(name, Object.assign({ cast: 'int', step: 1 }, options, { type: 'number' }));
	        }
	    }, {
	        key: 'addUpload',
	        value: function addUpload(name, options) {
	            this.controls.push(new _Upload2.default(this, name, options));
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
	        key: 'addContent',
	        value: function addContent(content) {
	            this.controls.push(new _Content2.default(content));
	            return this;
	        }
	    }, {
	        key: 'addTextarea',
	        value: function addTextarea(name) {
	            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	            this.controls.push(new _Textarea2.default(name, options));
	            return this;
	        }
	    }, {
	        key: 'addAlert',
	        value: function addAlert(options) {
	            this.controls.push(new _Alert2.default(this, options));
	            return this;
	        }
	    }, {
	        key: 'addSelect',
	        value: function addSelect(name) {
	            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	            this.controls.push(new _Select2.default(name, options));
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
	                    var isAllowed = true;

	                    var value = c.getValue();

	                    if (_this2.filters[c.name]) {
	                        isAllowed = _this2.filters[c.name](value);
	                    }

	                    if (isAllowed) {
	                        data[c.name] = value;
	                    }
	                }
	            });

	            if (typeof this.request === 'function') {
	                var promise = this.request(data);
	            } else {
	                var config = this.request;
	                config.data = data;
	                var promise = (0, _Helpers.backend)(config);
	            }

	            this.disable();

	            promise.always(function () {
	                _this2.enable();

	                _this2.controls.forEach(function (c) {
	                    if (c instanceof _Control2.default) {
	                        c.removeError();
	                    }
	                });

	                _this2.onCompleteCallbacks.forEach(function (callback) {
	                    return callback();
	                });
	            }).fail(function (x) {
	                var error = 'Unknown error';
	                var data = $.parseJSON(x.responseText);

	                if (x.status == 422) {
	                    error = data.errors;
	                    _this2.controls.forEach(function (c) {
	                        if (c instanceof _Control2.default) {
	                            c.notifyAboutErrors(error);
	                        }
	                    });
	                } else {
	                    error = data.message;
	                    _this2.onGlobalErrorCallbacks.forEach(function (callback) {
	                        return callback(error);
	                    });
	                }
	            }).done(function (data) {
	                if (_this2.options.resetOnSuccess) {
	                    _this2.el[0].reset();
	                }

	                if (_this2.options.messageOnSuccess) {}

	                _this2.onSuccessCallbacks.forEach(function (callback) {
	                    return callback(data);
	                });
	            });
	        }
	    }, {
	        key: 'addOnComplete',
	        value: function addOnComplete(callback) {
	            this.onCompleteCallbacks.push(callback);
	            return this;
	        }
	    }, {
	        key: 'addOnSuccess',
	        value: function addOnSuccess(callback) {
	            this.onSuccessCallbacks.push(callback);
	            return this;
	        }
	    }, {
	        key: 'addOnGlobalError',
	        value: function addOnGlobalError(callback) {
	            this.onGlobalErrorCallbacks.push(callback);
	            return this;
	        }
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var submit = this.el.find('[type="submit"]');

	            if (submit.length == 0) {
	                submit = $('<input type="submit" style="display: none" />');
	                this.el.append(submit);
	            }

	            submit.click();
	        }
	    }, {
	        key: 'enable',
	        value: function enable() {
	            this.controls.forEach(function (c) {
	                if (c instanceof _Control2.default) {
	                    c.enable();
	                }
	            });
	        }
	    }, {
	        key: 'disable',
	        value: function disable() {
	            this.controls.forEach(function (c) {
	                if (c instanceof _Control2.default) {
	                    c.disable();
	                }
	            });
	        }
	    }, {
	        key: 'populate',
	        value: function populate(data) {
	            this.controls.forEach(function (c) {
	                if (c instanceof _Control2.default) {
	                    if (c.name && c.setValue && data[c.name]) {
	                        c.setValue(data[c.name]);
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'addFilter',
	        value: function addFilter(field, callback) {
	            this.filters[field] = callback;
	            return this;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var el = $('<form></form>');
	            this.el = el;

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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.backend = backend;
	exports.upload = upload;

	var _Session = __webpack_require__(10);

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

	function upload(file) {

	    var data = new FormData();

	    data.append('document', file);

	    return $.ajax({
	        url: '/api/documents',
	        type: 'POST',
	        data: data,
	        cache: false,
	        contentType: false,
	        processData: false
	    });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Helpers = __webpack_require__(9);

	var Session = {
	    get: function get() {
	        if (typeof this.source === 'undefined') {
	            this.source = localStorage.getItem('session');

	            if (this.source) {
	                this.source = $.parseJSON(this.source);
	                var now = new Date();
	                var expiresAt = new Date(this.source.expiresAt);

	                if (expiresAt.getTime() < now.getTime()) {
	                    this.destroy();
	                }
	            }
	        }

	        return this.source;
	    },
	    set: function set(data) {
	        this.source = data;
	        localStorage.setItem('session', JSON.stringify(this.source));
	    },
	    store: function store(data) {
	        var _this = this;

	        return (0, _Helpers.backend)({ method: 'POST', url: '/sessions', data: data }).done(function (data) {
	            return _this.set(data);
	        });
	    },
	    reload: function reload() {
	        var _this2 = this;

	        return (0, _Helpers.backend)({ method: 'GET', url: '/sessions/' + this.get().id }).done(function (data) {
	            return _this2.set(data);
	        });
	    },
	    refresh: function refresh() {
	        var _this3 = this;

	        return (0, _Helpers.backend)({
	            method: 'POST',
	            url: '/sessions/' + this.get().id + '/refresh'
	        }).done(function (data) {
	            return _this3.set(data);
	        });
	    },
	    has: function has() {
	        return this.get() !== null;
	    },
	    destroy: function destroy() {
	        this.source = null;
	        localStorage.removeItem('session');
	    }
	};

	exports.default = Session;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Control2 = __webpack_require__(12);

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
	            var value = this.el.val();

	            if (value === '') {
	                return null;
	            }

	            if (this.options.cast === 'float') {
	                return parseFloat(value);
	            }

	            if (this.options.cast === 'int') {
	                return parseInt(value);
	            }

	            return value;
	        }
	    }, {
	        key: 'setValue',
	        value: function setValue(value) {
	            this.el.val(value);
	            return this;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.wrapper = $('<div class="form-group"></div>');

	            if (this.options.label) {
	                var label = $('<label></label>');
	                label.text(this.options.label);
	                label.attr('for', '_id-' + this.name);
	                label.addClass('control-label');
	                this.wrapper.append(label);
	            }

	            this.el = $('<input />').addClass('form-control').attr('name', this.name).attr('type', this.options.type ? this.options.type : 'text').attr('id', '_id-' + this.name);

	            if (this.options.step) {
	                this.el.attr('step', this.options.step);
	            }

	            var controlHolder = this.el;

	            if (this.options.icon) {
	                var iconWrapper = $('<div/>').addClass('input-group');
	                var icon = $('<div/>').addClass('input-group-addon').text(this.options.icon.sign);

	                if (this.options.icon.position === 'left') {
	                    iconWrapper.append(icon);
	                    iconWrapper.append(this.el);
	                } else {
	                    iconWrapper.append(this.el);
	                    iconWrapper.append(icon);
	                }

	                controlHolder = iconWrapper;
	            }

	            if (typeof this.options.value !== 'undefined') {
	                this.setValue(this.options.value);
	            }

	            if (this.options.placeholder) {
	                this.el.attr('placeholder', this.options.placeholder);
	            }

	            if (this.options.required) {
	                this.el.attr('required', 'required');
	            }

	            this.wrapper.append(controlHolder);

	            return this.wrapper;
	        }
	    }]);

	    return Input;
	}(_Control3.default);

	exports.default = Input;

/***/ },
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Control2 = __webpack_require__(12);

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
	            this.wrapper = $('<div class="form-group"><div></div></div>');

	            this.el = $('<button></button>');

	            this.el.text(this.options.title).attr('type', this.options.type).addClass('btn');

	            if (this.options.color) {
	                this.el.addClass('btn-' + this.options.color);
	            } else {
	                this.el.addClass('btn-default');
	            }

	            if (this.options.isBlock) {
	                this.el.addClass('btn-block');
	            }

	            this.wrapper.find('div:first-child').html(this.el);

	            return this.wrapper;
	        }
	    }]);

	    return Button;
	}(_Control3.default);

	exports.default = Button;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Control2 = __webpack_require__(12);

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
	            return this.el.prop('checked');
	        }
	    }, {
	        key: 'setValue',
	        value: function setValue(value) {
	            this.el.prop('checked', value);
	            return this;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.wrapper = $('<div class="form-group"><div class="checkbox"></div></div>');
	            this.el = $('<input />', { type: 'checkbox', name: this.name });

	            if (typeof this.options.value !== 'undefined') {
	                this.setValue(this.options.value);
	            }

	            if (this.options.required) {
	                this.el.attr('required', 'required');
	            }

	            var control = this.el;

	            if (this.options.label) {
	                control = $('<label></label>').text(this.options.label).prepend(this.el);
	            }

	            this.wrapper.find('div:first-child').html(control);

	            return this.wrapper;
	        }
	    }]);

	    return Checkbox;
	}(_Control3.default);

	exports.default = Checkbox;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Control2 = __webpack_require__(12);

	var _Control3 = _interopRequireDefault(_Control2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Textarea = function (_Control) {
	    _inherits(Textarea, _Control);

	    function Textarea(name, options) {
	        _classCallCheck(this, Textarea);

	        var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this));

	        _this.name = name;
	        _this.options = options;
	        return _this;
	    }

	    _createClass(Textarea, [{
	        key: 'getValue',
	        value: function getValue() {
	            var value = this.el.val();

	            if (value === '') {
	                return null;
	            }

	            return value;
	        }
	    }, {
	        key: 'setValue',
	        value: function setValue(value) {
	            this.el.val(value);
	            return this;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.wrapper = $('<div class="form-group"></div>');

	            if (this.options.label) {
	                var label = $('<label></label>');
	                label.text(this.options.label);
	                label.attr('for', '_id-' + this.name);
	                label.addClass('control-label');
	                this.wrapper.append(label);
	            }

	            this.el = $('<textarea />', {
	                'class': 'form-control',
	                name: this.name,
	                type: this.options.type ? this.options.type : 'text',
	                id: '_id-' + this.name,
	                cols: this.options.cols ? this.options.cols : undefined,
	                rows: this.options.rows ? this.options.rows : undefined
	            });

	            if (typeof this.options.value !== 'undefined') {
	                this.setValue(this.options.value);
	            }

	            if (this.options.placeholder) {
	                this.el.attr('placeholder', this.options.placeholder);
	            }

	            if (this.options.required) {
	                this.el.attr('required', 'required');
	            }

	            this.wrapper.append(this.el);

	            return this.wrapper;
	        }
	    }]);

	    return Textarea;
	}(_Control3.default);

	exports.default = Textarea;

/***/ },
/* 16 */
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

	var Content = function (_View) {
	    _inherits(Content, _View);

	    function Content(content) {
	        _classCallCheck(this, Content);

	        var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this));

	        _this.content = content;
	        return _this;
	    }

	    _createClass(Content, [{
	        key: 'render',
	        value: function render() {
	            if (typeof this.content === 'string') {
	                this.content = $(this.content);
	            }

	            return this.content;
	        }
	    }]);

	    return Content;
	}(_sparrowUi.View);

	exports.default = Content;

/***/ },
/* 17 */
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

	var Alert = function (_View) {
	    _inherits(Alert, _View);

	    function Alert(form, options) {
	        _classCallCheck(this, Alert);

	        var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this));

	        _this.form = form;
	        form.addOnSuccess(function () {
	            return _this.onSuccess();
	        });
	        form.addOnGlobalError(function (error) {
	            return _this.onError(error);
	        });

	        _this.options = options;
	        return _this;
	    }

	    _createClass(Alert, [{
	        key: 'onSuccess',
	        value: function onSuccess() {
	            this.el.removeAttr('class').text(this.options.onSuccess).addClass('alert alert-success');
	        }
	    }, {
	        key: 'onError',
	        value: function onError(error) {
	            this.el.removeAttr('class').text(error).addClass('alert alert-danger');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.el = $('<div />');
	            return this.el;
	        }
	    }]);

	    return Alert;
	}(_sparrowUi.View);

	exports.default = Alert;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Control2 = __webpack_require__(12);

	var _Control3 = _interopRequireDefault(_Control2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Select = function (_Control) {
	    _inherits(Select, _Control);

	    function Select(name, options) {
	        _classCallCheck(this, Select);

	        var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this));

	        _this.name = name;
	        _this.options = options;
	        return _this;
	    }

	    _createClass(Select, [{
	        key: 'getValue',
	        value: function getValue() {
	            return this.el.val();
	        }
	    }, {
	        key: 'setValue',
	        value: function setValue(value) {
	            this.el.val(value);
	            return this;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            this.wrapper = $('<div class="form-group"></div>');

	            if (this.options.label) {
	                var label = $('<label></label>');
	                label.text(this.options.label);
	                label.attr('for', '_id-' + name);
	                label.addClass('control-label');
	                this.wrapper.append(label);
	            }

	            this.el = $('<select />').addClass('form-control').attr('name', this.name).attr('id', '_id-' + name);

	            this.options.options.forEach(function (option) {
	                _this2.el.append($('<option/>', { value: option.value, text: option.title }));
	            });

	            if (typeof this.options.value !== 'undefined') {
	                this.setValue(this.options.value);
	            }

	            if (this.options.required) {
	                this.el.attr('required', 'required');
	            }

	            this.wrapper.append(this.el);

	            return this.wrapper;
	        }
	    }]);

	    return Select;
	}(_Control3.default);

	exports.default = Select;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Control2 = __webpack_require__(12);

	var _Control3 = _interopRequireDefault(_Control2);

	var _Helpers = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Upload = function (_Control) {
	    _inherits(Upload, _Control);

	    function Upload(form, name, options) {
	        _classCallCheck(this, Upload);

	        var _this = _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this));

	        _this.form = form;
	        _this.name = name;
	        _this.options = options;
	        return _this;
	    }

	    _createClass(Upload, [{
	        key: 'onChange',
	        value: function onChange(e) {
	            var _this2 = this;

	            this.form.disable();
	            (0, _Helpers.upload)(e.target.files[0]).always(function () {
	                return _this2.form.enable();
	            }).done(function (data) {
	                return _this2.data = data;
	            });
	        }
	    }, {
	        key: 'getValue',
	        value: function getValue() {

	            if (!this.data) {
	                return null;
	            }

	            return { id: this.data.id, token: this.data.token };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            this.wrapper = $('<div class="form-group"></div>');

	            if (this.options.label) {
	                var label = $('<label />', {
	                    for: '_id-' + this.name,
	                    'class': 'control-label',
	                    text: this.options.label
	                });

	                this.wrapper.append(label);
	            }

	            this.el = $('<input />', { type: 'file', name: this.name, id: '_id-' + this.name });

	            this.el.change(function (e) {
	                return _this3.onChange(e);
	            });

	            this.wrapper.append(this.el);

	            return this.wrapper;
	        }
	    }]);

	    return Upload;
	}(_Control3.default);

	exports.default = Upload;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Helpers = __webpack_require__(9);

	var Agents = {
	    store: function store(data) {
	        return (0, _Helpers.backend)({ method: 'POST', url: '/agents', data: data });
	    }
	};

	exports.default = Agents;

/***/ },
/* 21 */
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

	var Error404 = function (_View) {
	    _inherits(Error404, _View);

	    function Error404() {
	        _classCallCheck(this, Error404);

	        return _possibleConstructorReturn(this, (Error404.__proto__ || Object.getPrototypeOf(Error404)).apply(this, arguments));
	    }

	    _createClass(Error404, [{
	        key: 'render',
	        value: function render() {
	            return $('<div id="container"><h2>Not Found</h2></div>');
	        }
	    }]);

	    return Error404;
	}(_sparrowUi.View);

	exports.default = Error404;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.buildPostForm = buildPostForm;

	var _sparrowUi = __webpack_require__(2);

	var _Session = __webpack_require__(10);

	var _Session2 = _interopRequireDefault(_Session);

	var _OwnPosts = __webpack_require__(23);

	var _OwnPosts2 = _interopRequireDefault(_OwnPosts);

	var _OwnPostsList = __webpack_require__(24);

	var _OwnPostsList2 = _interopRequireDefault(_OwnPostsList);

	var _Modal = __webpack_require__(27);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _Form = __webpack_require__(8);

	var _Form2 = _interopRequireDefault(_Form);

	var _QuoteRequestsList = __webpack_require__(33);

	var _QuoteRequestsList2 = _interopRequireDefault(_QuoteRequestsList);

	var _Profile = __webpack_require__(38);

	var _Profile2 = _interopRequireDefault(_Profile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_View) {
	    _inherits(Home, _View);

	    function Home() {
	        _classCallCheck(this, Home);

	        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	    }

	    _createClass(Home, [{
	        key: 'onNewPostClick',
	        value: function onNewPostClick(e) {
	            var _this2 = this;

	            e.preventDefault();

	            var form = buildPostForm(new _Form2.default(function (data) {
	                return _OwnPosts2.default.store(data);
	            }, {
	                resetOnSuccess: true
	            })).addOnSuccess(function () {
	                return _this2.ownPostsList.refresh(true);
	            }).addAlert({ onSuccess: 'The post has been successfully added!' });

	            var modal = new _Modal2.default({ content: form.render(), title: 'New Post' });

	            modal.setOnSubmit(function () {
	                return form.submit();
	            });

	            modal.show();
	        }
	    }, {
	        key: 'onEditProfileClick',
	        value: function onEditProfileClick(e) {
	            var _this3 = this;

	            e.preventDefault();

	            var form = new _Form2.default(function (data) {
	                return _Profile2.default.patch(data);
	            });

	            form.addAlert({ onSuccess: 'Your profile has been successfully updated!' }).addInput('fullName', { label: 'Full Name', placeholder: 'Full Name', required: true }).addEmail('email', { label: 'Email', placeholder: 'Email', required: true }).addPassword('password', { label: 'Password', placeholder: 'Password' }).addFilter('password', function (value) {
	                return value !== null && value !== '';
	            }).addInput('insuranceLicenseNumber', { label: 'Insurance License #', placeholder: 'A123456', required: true });

	            form.addOnSuccess(function () {
	                return _Session2.default.reload().done(function (data) {
	                    return _this3.adjustGreeting();
	                });
	            });

	            var modal = new _Modal2.default({ content: form.render(), title: 'Edit Profile' });

	            modal.setOnSubmit(function () {
	                return form.submit();
	            });

	            modal.show();

	            _Profile2.default.load().done(function (data) {
	                return form.populate(data);
	            });
	        }
	    }, {
	        key: 'adjustGreeting',
	        value: function adjustGreeting() {
	            var session = _Session2.default.get();
	            this.greeting.text('Welcome back ' + session.user.fullName);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;

	            var el = $('<div class="container">\n            <header class="jumbotron hero-spacer">\n                <h1 id="greeting"></h1>\n                <p>This page will show quotes. It will also allow them to edit their information.</p>\n                <p><a id="editProfile" class="btn btn-primary btn-large">Edit Profile</a>\n                </p>\n            </header>\n            <hr/>\n            <div class="panel panel-default panel-table">\n              <div class="panel-heading">\n                <div class="row">\n                  <div class="col col-xs-6">\n                    <h3 class="panel-title">Your Posts</h3>\n                  </div>\n                  <div class="col col-xs-6 text-right">\n                    <a id="newPostClick" class="btn btn-primary btn-sml" href="#">Post New</a>\n                  </div>\n                </div>\n              </div>\n              <div id="ownPostsList" class="panel-body"></div>\n            </div>\n\n            <div class="panel panel-default panel-table">\n              <div class="panel-heading"><h3 class="panel-title">Posts needing Quotes</h3></div>\n              <div id="quoteRequestsList" class="panel-body"></div>\n            </div>\n\n        </div>');

	            this.greeting = el.find('#greeting');

	            this.adjustGreeting();

	            el.find('#newPostClick').click(function (e) {
	                return _this4.onNewPostClick(e);
	            });
	            el.find('#editProfile').click(function (e) {
	                return _this4.onEditProfileClick(e);
	            });

	            this.ownPostsList = new _OwnPostsList2.default();

	            el.find('#ownPostsList').html(this.ownPostsList.render());

	            var quoteRequestsList = new _QuoteRequestsList2.default();

	            el.find('#quoteRequestsList').html(quoteRequestsList.render());

	            return el;
	        }
	    }]);

	    return Home;
	}(_sparrowUi.View);

	exports.default = Home;
	function buildPostForm(form) {
	    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    form.addContent('<div>\n            <h1>Public Information\n            </h1>\n            <span class="help-block" id="hint_Title">\n            Will be shared with all agents\n            </span>\n        </div>').addInput('title', {
	        value: data.title,
	        label: 'Title - Explain your post',
	        placeholder: 'Car Insurance quote',
	        required: true
	    }).addTextarea('publicMessage', {
	        value: data.publicMessage,
	        label: 'Public Message',
	        required: true,
	        rows: 10,
	        placeholder: 'I need a quote for 3 cars and 2 drivers that live in zip code of 90210. A 2005 toyota Camry, 2011 Ford Fiesta, and 2013 Ford Mustang. 100/300 liability and 15/30 Uninsured Motorist and comp/coll deductibles of 500/500 for all cars. Female married driver born on 11/08/1973 and Male married driver born 05/12/1971. No tickets or accidents.' }).addContent('<div>\n            <h1>Private Information\n            </h1>\n            <span class="help-block" id="hint_Title">\n            Will be shared only with the agent you select\n            </span>\n            <hr/>\n        </div>').addInput('clientName', {
	        value: data.clientName,
	        label: 'Client Name',
	        placeholder: 'Mary Allen',
	        required: true
	    }).addInput('clientPhone', {
	        value: data.clientPhone,
	        label: 'Client Phone',
	        placeholder: '1-234-567-8910',
	        required: true
	    }).addTextarea('privateMessage', {
	        value: data.privateMessage,
	        label: 'Private Message',
	        required: true,
	        rows: 10,
	        placeholder: 'First driver is Mary Allen and second driver is David Allen. They live on 123 Sunshine Rd. Beverly Hills, CA 90210.' }).addCheckbox('noPersonalInfoInPublic', {
	        value: data.noPersonalInfoInPublic,
	        label: 'I have not posted any personal information in the public information sections'
	    });

	    return form;
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Helpers = __webpack_require__(9);

	var _Session = __webpack_require__(10);

	var _Session2 = _interopRequireDefault(_Session);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var OwnPosts = {
	    load: function load() {
	        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

	        var session = _Session2.default.get();

	        return (0, _Helpers.backend)({
	            method: 'GET', url: '/agents/' + session.user.id + '/posts',
	            data: { orderBy: 'id:desc', page: page }
	        });

	        return $.Deferred().resolve(this.data);
	    },
	    destroy: function destroy(id) {
	        var session = _Session2.default.get();

	        return (0, _Helpers.backend)({
	            method: 'DELETE', url: '/agents/' + session.user.id + '/posts/' + id
	        });
	    },
	    patch: function patch(id, data) {
	        var session = _Session2.default.get();

	        return (0, _Helpers.backend)({
	            method: 'PATCH',
	            url: '/agents/' + session.user.id + '/posts/' + id,
	            data: data
	        });
	    },
	    store: function store(data) {
	        var session = _Session2.default.get();

	        return (0, _Helpers.backend)({
	            method: 'POST',
	            url: '/agents/' + session.user.id + '/posts',
	            data: data
	        });
	    }
	};

	exports.default = OwnPosts;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _sparrowUi = __webpack_require__(2);

	var _OwnPosts = __webpack_require__(23);

	var _OwnPosts2 = _interopRequireDefault(_OwnPosts);

	var _OwnPostItem = __webpack_require__(25);

	var _OwnPostItem2 = _interopRequireDefault(_OwnPostItem);

	var _ = __webpack_require__(22);

	var _Modal = __webpack_require__(27);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _Form = __webpack_require__(8);

	var _Form2 = _interopRequireDefault(_Form);

	var _Pager = __webpack_require__(28);

	var _Pager2 = _interopRequireDefault(_Pager);

	var _QuotesList = __webpack_require__(29);

	var _QuotesList2 = _interopRequireDefault(_QuotesList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OwnPostsList = function (_View) {
	    _inherits(OwnPostsList, _View);

	    function OwnPostsList() {
	        _classCallCheck(this, OwnPostsList);

	        return _possibleConstructorReturn(this, (OwnPostsList.__proto__ || Object.getPrototypeOf(OwnPostsList)).apply(this, arguments));
	    }

	    _createClass(OwnPostsList, [{
	        key: 'onItemDelete',
	        value: function onItemDelete(item) {
	            var _this2 = this;

	            var modal = new _Modal2.default({
	                content: '<p>Do you want to delete this post?</p>',
	                title: 'Action',
	                submitButtonTitle: 'Yes',
	                cancelButtonTitle: 'No'
	            });

	            modal.setOnSubmit(function () {
	                _OwnPosts2.default.destroy(item.id).done(function () {
	                    return _this2.refresh();
	                });
	                modal.hide();
	            });

	            modal.show();
	        }
	    }, {
	        key: 'onItemEdit',
	        value: function onItemEdit(item) {
	            var _this3 = this;

	            var form = (0, _.buildPostForm)(new _Form2.default(function (data) {
	                return _OwnPosts2.default.patch(item.id, data);
	            }), item).addOnSuccess(function () {
	                return _this3.refresh();
	            }).addAlert({ onSuccess: 'The post has been successfully updated!' });

	            var modal = new _Modal2.default({ content: form.render(), title: 'Update Post' });

	            modal.setOnSubmit(function () {
	                return form.submit();
	            });

	            modal.show();
	        }
	    }, {
	        key: 'onItemShare',
	        value: function onItemShare(item) {
	            var _this4 = this;

	            var quotesList = new _QuotesList2.default(item);

	            quotesList.setOnItemPick(function () {
	                return _this4.refresh();
	            });

	            var modal = new _Modal2.default({
	                content: quotesList.render(),
	                title: 'Review Quotes',
	                hideSubmitButton: true,
	                cancelButtonTitle: 'Close',
	                isLarge: true
	            });

	            modal.show();
	        }
	    }, {
	        key: 'refresh',
	        value: function refresh() {
	            var hard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	            this.pager.load(hard ? 1 : undefined);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this5 = this;

	            var el = $('<div>\n            <table class="table table-striped table-bordered table-list">\n                  <thead>\n                    <tr>\n                        <th style="min-width: 90px;">Quote #</th>\n                        <th style="min-width: 169px;">Client Name</th>\n                        <th>Public Message</th>\n                        <th style="min-width: 130px;">Status / Actions</th>\n                    </tr> \n                  </thead>\n                  <tbody></tbody>\n                </table>\n        \n        </div>');

	            this.container = el.find('tbody');

	            this.pager = new _Pager2.default(function (page) {
	                return _OwnPosts2.default.load(page);
	            });

	            this.pager.addOnLoad(function (data) {

	                _this5.container.empty();

	                data.forEach(function (post) {

	                    var item = new _OwnPostItem2.default(post);

	                    item.setOnDelete(function () {
	                        return _this5.onItemDelete(post);
	                    }).setOnEdit(function () {
	                        return _this5.onItemEdit(post);
	                    }).setOnShare(function () {
	                        return _this5.onItemShare(post);
	                    });

	                    _this5.container.append(item.render());
	                });
	            });

	            el.append(this.pager.render());

	            this.pager.load();

	            return el;
	        }
	    }]);

	    return OwnPostsList;
	}(_sparrowUi.View);

	exports.default = OwnPostsList;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _sparrowUi = __webpack_require__(2);

	var _OwnPostAction = __webpack_require__(26);

	var _OwnPostAction2 = _interopRequireDefault(_OwnPostAction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OwnPostItem = function (_View) {
	    _inherits(OwnPostItem, _View);

	    function OwnPostItem(data) {
	        _classCallCheck(this, OwnPostItem);

	        var _this = _possibleConstructorReturn(this, (OwnPostItem.__proto__ || Object.getPrototypeOf(OwnPostItem)).call(this));

	        _this.data = data;
	        return _this;
	    }

	    _createClass(OwnPostItem, [{
	        key: 'setOnDelete',
	        value: function setOnDelete(callback) {
	            this.onDeleteCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'setOnEdit',
	        value: function setOnEdit(callback) {
	            this.onEditCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'setOnShare',
	        value: function setOnShare(callback) {
	            this.onShareCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var data = this.data;
	            var el = $('<tr/>');
	            el.append($('<td/>').text(data.id));
	            el.append($('<td/>').text(data.clientName));
	            el.append($('<td/>').text(data.publicMessage));

	            var ownPostAction = new _OwnPostAction2.default(data);

	            ownPostAction.setOnDelete(function () {
	                return _this2.onDeleteCallback();
	            }).setOnEdit(function () {
	                return _this2.onEditCallback();
	            }).setOnShare(function () {
	                return _this2.onShareCallback();
	            });

	            el.append($('<td/>').html(ownPostAction.render()));

	            return el;
	        }
	    }]);

	    return OwnPostItem;
	}(_sparrowUi.View);

	exports.default = OwnPostItem;

/***/ },
/* 26 */
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

	var OwnPostAction = function (_View) {
	    _inherits(OwnPostAction, _View);

	    function OwnPostAction(data) {
	        _classCallCheck(this, OwnPostAction);

	        var _this = _possibleConstructorReturn(this, (OwnPostAction.__proto__ || Object.getPrototypeOf(OwnPostAction)).call(this));

	        _this.data = data;
	        return _this;
	    }

	    _createClass(OwnPostAction, [{
	        key: 'onEditClick',
	        value: function onEditClick(e) {
	            e.preventDefault();

	            if (this.onEditCallback) {
	                this.onEditCallback();
	            }
	        }
	    }, {
	        key: 'onDeleteClick',
	        value: function onDeleteClick(e) {
	            e.preventDefault();

	            if (this.onDeleteCallback) {
	                this.onDeleteCallback();
	            }
	        }
	    }, {
	        key: 'onShareClick',
	        value: function onShareClick(e) {
	            e.preventDefault();

	            if (this.onShareCallback) {
	                this.onShareCallback();
	            }
	        }
	    }, {
	        key: 'setOnDelete',
	        value: function setOnDelete(callback) {
	            this.onDeleteCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'setOnEdit',
	        value: function setOnEdit(callback) {
	            this.onEditCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'setOnShare',
	        value: function setOnShare(callback) {
	            this.onShareCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var data = this.data;
	            var el = $('\n            <div class="btn-group">\n                <button id="statusButton" type="button"  data-toggle="dropdown" class="btn dropdown-toggle"></button>\n                <ul id="menu" class="dropdown-menu"></ul>\n            </div>\n        ');

	            var status = {
	                done: {
	                    name: 'done',
	                    text: 'Done',
	                    color: 'success'
	                },
	                open: {
	                    name: 'open',
	                    text: 'Waiting',
	                    color: 'default'
	                },
	                active: {
	                    name: 'active',
	                    text: 'Active',
	                    color: 'primary'
	                }
	            }[data.status];

	            el.find('#statusButton').addClass('btn-' + status.color).text(status.text + ' ').append('<span class="caret"></span>');

	            var menu = el.find('#menu');

	            var edit = $('<a/>', { href: '#', text: 'Edit' });
	            edit.click(function (e) {
	                return _this2.onEditClick(e);
	            });
	            menu.append($('<li/>').append(edit));

	            var del = $('<a/>', { href: '#', text: 'Delete' });
	            del.click(function (e) {
	                return _this2.onDeleteClick(e);
	            });
	            menu.append($('<li/>').append(del));

	            if (status.name !== 'open') {
	                var share = $('<a/>', { href: '#', text: 'Review Quotes' });
	                share.click(function (e) {
	                    return _this2.onShareClick(e);
	                });
	                menu.append($('<li/>', { role: 'separator', 'class': 'divider' }));
	                menu.append($('<li/>').append(share));
	            }

	            return el;
	        }
	    }]);

	    return OwnPostAction;
	}(_sparrowUi.View);

	exports.default = OwnPostAction;

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Modal = function () {
	    function Modal(options) {
	        _classCallCheck(this, Modal);

	        this.options = options;
	    }

	    _createClass(Modal, [{
	        key: 'show',
	        value: function show() {
	            var el = this.render();

	            $('body').append(el);

	            el.on('hidden.bs.modal', function () {
	                return el.remove();
	            });

	            el.modal('show');
	        }
	    }, {
	        key: 'hide',
	        value: function hide() {
	            this.el.modal('hide');
	        }
	    }, {
	        key: 'onCloseClick',
	        value: function onCloseClick() {
	            this.hide();
	        }
	    }, {
	        key: 'onCancelClick',
	        value: function onCancelClick() {
	            this.hide();
	            if (this.onCancelCallback) {
	                this.onCancelCallback();
	            }
	        }
	    }, {
	        key: 'onSubmitClick',
	        value: function onSubmitClick() {
	            if (this.onSubmitCallback) {
	                this.onSubmitCallback();
	            }
	        }
	    }, {
	        key: 'setOnCancel',
	        value: function setOnCancel(callback) {
	            this.onCancelCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'setOnSubmit',
	        value: function setOnSubmit(callback) {
	            this.onSubmitCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this = this;

	            var el = $('\n            <div class="modal fade" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">\n                <div id="dialog" class="modal-dialog">\n                    <div class="modal-content">\n                    <div class="modal-header">\n                        <button id="close" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n                        <h4 id="title" class="modal-title"></h4>\n                    </div>\n                    <div id="body" class="modal-body"></div>\n                    <div id="buttons" class="modal-footer">\n                        \n                    </div>\n                    </div>\n                </div>\n            </div>\n        ');

	            this.el = el;

	            if (this.options.title) {
	                el.find('#title').text(this.options.title);
	            }

	            if (this.options.isLarge) {
	                el.find('#dialog').addClass('modal-lg');
	            }

	            var close = el.find('#close');

	            close.click(function () {
	                return _this.onCloseClick();
	            });

	            var buttons = el.find('#buttons');

	            var cancel = $('<button/>', {
	                'class': 'btn btn-default',
	                text: this.options.cancelButtonTitle ? this.options.cancelButtonTitle : 'Cancel',
	                type: 'button'
	            });

	            cancel.click(function () {
	                return _this.onCancelClick();
	            });

	            buttons.append(cancel);

	            if (!this.options.hideSubmitButton) {
	                var submit = $('<button/>', {
	                    'class': 'btn btn-primary',
	                    text: this.options.submitButtonTitle ? this.options.submitButtonTitle : 'Submit',
	                    type: 'button'
	                });

	                submit.click(function () {
	                    return _this.onSubmitClick();
	                });

	                buttons.append(submit);
	            }

	            // this must be in the very end so that ids in the content don't conflicts with ids of the modal 

	            this.body = el.find('#body').html(this.options.content);

	            return el;
	        }
	    }]);

	    return Modal;
	}();

	exports.default = Modal;

/***/ },
/* 28 */
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

	var Pager = function (_View) {
	    _inherits(Pager, _View);

	    function Pager(loader) {
	        _classCallCheck(this, Pager);

	        var _this = _possibleConstructorReturn(this, (Pager.__proto__ || Object.getPrototypeOf(Pager)).call(this));

	        _this.loader = loader;
	        _this.page = 1;
	        _this.onLoadCallbacks = [];
	        _this.totalPages = 1;
	        _this.isLoading = false;
	        return _this;
	    }

	    _createClass(Pager, [{
	        key: 'addOnLoad',
	        value: function addOnLoad(callback) {
	            this.onLoadCallbacks.push(callback);
	            return this;
	        }
	    }, {
	        key: 'load',
	        value: function load() {
	            var _this2 = this;

	            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;


	            if (page) {
	                this.page = page;
	            }

	            this.isLoading = true;
	            this.next.addClass('disabled');
	            this.prev.addClass('disabled');

	            return this.loader(this.page).always(function () {
	                _this2.isLoading = false;
	                _this2.handlePrevDisplay();
	                _this2.handleNextDisplay();
	            }).done(function (data) {
	                _this2.totalPages = data.meta.pagination.totalPages;

	                if (_this2.totalPages == 0) {
	                    _this2.totalPages = 1;
	                }

	                if (_this2.page > _this2.totalPages) {
	                    _this2.page = _this2.totalPages;
	                    _this2.load();
	                }

	                _this2.handleNextDisplay();

	                _this2.onLoadCallbacks.forEach(function (callback) {
	                    return callback(data.data);
	                });
	            });
	        }
	    }, {
	        key: 'handlePrevDisplay',
	        value: function handlePrevDisplay() {
	            if (this.page == 1) {
	                this.prev.addClass('disabled');
	            } else {
	                this.prev.removeClass('disabled');
	            }
	        }
	    }, {
	        key: 'onPrevClick',
	        value: function onPrevClick(e) {
	            e.preventDefault();

	            if (this.page == 1 || this.isLoading) {
	                return;
	            }

	            this.page--;

	            this.load();
	        }
	    }, {
	        key: 'onNextClick',
	        value: function onNextClick(e) {
	            e.preventDefault();

	            if (this.page == this.totalPages || this.isLoading) {
	                return;
	            }

	            this.page++;

	            this.load();
	        }
	    }, {
	        key: 'handleNextDisplay',
	        value: function handleNextDisplay() {
	            if (this.page == this.totalPages) {
	                this.next.addClass('disabled');
	            } else {
	                this.next.removeClass('disabled');
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var el = $('<nav aria-label="...">\n            <ul class="pager">\n                <li id="prev" class="previous disabled"><a href="#"><span aria-hidden="true">&larr;</span> Older</a></li>\n                <li id="next" class="next disabled"><a href="#">Newer <span aria-hidden="true">&rarr;</span></a></li>\n            </ul>\n        </nav>');

	            this.prev = el.find('#prev');
	            this.next = el.find('#next');

	            this.prev.click(function (e) {
	                return _this3.onPrevClick(e);
	            });
	            this.next.click(function (e) {
	                return _this3.onNextClick(e);
	            });

	            return el;
	        }
	    }]);

	    return Pager;
	}(_sparrowUi.View);

	exports.default = Pager;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _sparrowUi = __webpack_require__(2);

	var _Quotes = __webpack_require__(30);

	var _Quotes2 = _interopRequireDefault(_Quotes);

	var _QuoteItem = __webpack_require__(31);

	var _QuoteItem2 = _interopRequireDefault(_QuoteItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuotesList = function (_View) {
	    _inherits(QuotesList, _View);

	    function QuotesList(data) {
	        _classCallCheck(this, QuotesList);

	        var _this = _possibleConstructorReturn(this, (QuotesList.__proto__ || Object.getPrototypeOf(QuotesList)).call(this));

	        _this.data = data;
	        return _this;
	    }

	    _createClass(QuotesList, [{
	        key: 'onItemPick',
	        value: function onItemPick(quote) {
	            var _this2 = this;

	            if (quote.isPicked) {
	                var promise = _Quotes2.default.unpick(this.data.id, quote.id);
	            } else {
	                var promise = _Quotes2.default.pick(this.data.id, quote.id);
	            }

	            promise.done(function () {
	                _this2.load();
	                if (_this2.onItemPickCallback) {
	                    _this2.onItemPickCallback();
	                }
	            });
	        }
	    }, {
	        key: 'setOnItemPick',
	        value: function setOnItemPick(callback) {
	            this.onItemPickCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'load',
	        value: function load() {
	            var _this3 = this;

	            _Quotes2.default.load(this.data.id).done(function (data) {
	                _this3.el.empty();
	                var c = 0;
	                var total = data.data.length;
	                data.data.forEach(function (quote) {
	                    c++;
	                    var item = new _QuoteItem2.default(quote);
	                    item.setOnPick(function () {
	                        return _this3.onItemPick(quote);
	                    });
	                    _this3.el.append(item.render());

	                    if (c < total) {
	                        _this3.el.append('<hr/>');
	                    }
	                });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.el = $('<div/>');

	            this.load();

	            return this.el;
	        }
	    }]);

	    return QuotesList;
	}(_sparrowUi.View);

	exports.default = QuotesList;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Helpers = __webpack_require__(9);

	var _Session = __webpack_require__(10);

	var _Session2 = _interopRequireDefault(_Session);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Quotes = {
	    load: function load(postId) {
	        var session = _Session2.default.get();

	        return (0, _Helpers.backend)({ method: 'GET', url: '/agents/' + session.user.id + '/posts/' + postId + '/quotes' });
	    },
	    pick: function pick(postId, quoteId) {
	        var session = _Session2.default.get();
	        return (0, _Helpers.backend)({ method: 'POST', url: '/agents/' + session.user.id + '/posts/' + postId + '/quotes/' + quoteId + '/pick' });
	    },
	    unpick: function unpick(postId, quoteId) {
	        var session = _Session2.default.get();
	        return (0, _Helpers.backend)({ method: 'POST', url: '/agents/' + session.user.id + '/posts/' + postId + '/quotes/' + quoteId + '/unpick' });
	    }
	};

	exports.default = Quotes;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _sparrowUi = __webpack_require__(2);

	var _Constants = __webpack_require__(32);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuotesItem = function (_View) {
	    _inherits(QuotesItem, _View);

	    function QuotesItem(data) {
	        _classCallCheck(this, QuotesItem);

	        var _this = _possibleConstructorReturn(this, (QuotesItem.__proto__ || Object.getPrototypeOf(QuotesItem)).call(this));

	        _this.data = data;
	        return _this;
	    }

	    _createClass(QuotesItem, [{
	        key: 'setOnPick',
	        value: function setOnPick(callback) {
	            this.onPickCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            this.el = $('\n            <div class="row">\n                <div class="col-xs-10">\n                    <div class="row">\n                        <div id="price" class="col-xs-6"></div>\n                        <div id="plan" class="col-xs-6"></div>\n                    </div>\n                    <div class="row">\n                        <div id="commission" class="col-xs-6"></div>\n                        <div id="document" class="col-xs-6"></div>\n                    </div>\n                    <br/>\n                    <div class="row">\n                        <div id="note" class="col-xs-12"></div>\n                    </div>\n                </div>\n                <div class="col-xs-2">\n                    <button id="selector" class="btn"></button>\n                </div>\n            </div>\n        ');

	            var selector = this.el.find('#selector');

	            if (this.data.isPicked) {
	                selector.addClass('btn-danger');
	                selector.append($('<span/>').addClass('fa fa-check-square-o'));
	                selector.append(' Unpick');
	            } else {
	                selector.addClass('btn-primary');
	                selector.append($('<span/>').addClass('fa fa-square-o'));
	                selector.append(' Pick');
	            }

	            selector.click(function () {
	                return _this2.onPickCallback();
	            });

	            this.el.find('#price').append($('<b/>', { text: 'Premium:' })).append(' $' + this.data.price);
	            this.el.find('#plan').append($('<b/>', { text: 'Premium:' })).append(' ' + _Constants.PLANS[this.data.plan]);
	            this.el.find('#commission').append($('<b/>', { text: 'Commission:' })).append(' ' + this.data.commission + '%');
	            this.el.find('#document').append($('<b/>', { text: 'Document: ' })).append($('<a/>', {
	                target: '_self',
	                download: this.data.document.name,
	                href: this.data.document.url,
	                text: this.data.document.name
	            }));

	            this.el.find('#note').append($('<b/>', { text: 'Note:' })).append(' ' + (this.data.note === null ? '' : this.data.note));

	            return this.el;
	        }
	    }]);

	    return QuotesItem;
	}(_sparrowUi.View);

	exports.default = QuotesItem;

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var PLANS = exports.PLANS = {
	    'annual': 'Annual',
	    'per-6-months': 'Per 6 Months'
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _sparrowUi = __webpack_require__(2);

	var _QuoteRequests = __webpack_require__(34);

	var _QuoteRequests2 = _interopRequireDefault(_QuoteRequests);

	var _Quote = __webpack_require__(35);

	var _Quote2 = _interopRequireDefault(_Quote);

	var _QuoteRequestItem = __webpack_require__(36);

	var _QuoteRequestItem2 = _interopRequireDefault(_QuoteRequestItem);

	var _Pager = __webpack_require__(28);

	var _Pager2 = _interopRequireDefault(_Pager);

	var _Form = __webpack_require__(8);

	var _Form2 = _interopRequireDefault(_Form);

	var _Modal = __webpack_require__(27);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _Constants = __webpack_require__(32);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuoteRequestsList = function (_View) {
	    _inherits(QuoteRequestsList, _View);

	    function QuoteRequestsList() {
	        _classCallCheck(this, QuoteRequestsList);

	        return _possibleConstructorReturn(this, (QuoteRequestsList.__proto__ || Object.getPrototypeOf(QuoteRequestsList)).apply(this, arguments));
	    }

	    _createClass(QuoteRequestsList, [{
	        key: 'onItemProposeQuote',
	        value: function onItemProposeQuote(request) {
	            var _this2 = this;

	            var form = new _Form2.default(function (data) {
	                return _Quote2.default.store(request.id, data);
	            });

	            var plans = [];

	            for (var v in _Constants.PLANS) {
	                plans.push({
	                    value: v,
	                    title: _Constants.PLANS[v]
	                });
	            }

	            form.addContent($('<div/>').addClass('well').text(request.publicMessage)).addNumber('price', {
	                label: 'Premium',
	                placeholder: '99.99',
	                required: true,
	                icon: { sign: '$', position: 'left' },
	                cast: 'float',
	                step: 0.01
	            }).addSelect('plan', { required: true, label: 'Premium is', options: plans }).addTextarea('note', { label: 'Note', rows: 5 }).addNumber('commission', {
	                label: 'Commission',
	                placeholder: '30',
	                required: true,
	                icon: { sign: '%', position: 'right' }
	            }).addUpload('document', { label: 'Upload Document' });

	            var modal = new _Modal2.default({ content: form.render(), title: 'Propose a Quote' });

	            modal.setOnSubmit(function () {
	                return form.submit();
	            });

	            form.addOnSuccess(function () {
	                _this2.pager.load();
	                modal.hide();
	            });

	            modal.show();
	        }
	    }, {
	        key: 'onItemViewQuote',
	        value: function onItemViewQuote(request) {
	            var content = $('<div>\n            <div class="row">\n                <div class="col-xs-4"><b>Premium:</b></div>\n                <div id="price" class="col-xs-8"></div>\n            </div>\n            <div class="row">\n                <div class="col-xs-4"><b>Plan:</b></div>\n                <div id="plan" class="col-xs-8"></div>\n            </div>\n            <div class="row">\n                <div class="col-xs-4"><b>Note:</b></div>\n                <div id="note" class="col-xs-8"></div>\n            </div>\n            <div class="row">\n                <div class="col-xs-4"><b>Commission:</b></div>\n                <div id="commission" class="col-xs-8">20%</div>\n            </div>\n            <div class="row">\n                <div class="col-xs-4"><b>Document:</b></div>\n                <div id="document" class="col-xs-8"></div>\n            </div>\n        </div>');

	            var quote = request.quote;

	            content.find('#price').text('$' + quote.price);
	            content.find('#plan').text(_Constants.PLANS[quote.plan]);
	            content.find('#note').text(quote.note);
	            content.find('#commission').text(quote.commission + '%');
	            content.find('#document').html($('<a/>', {
	                target: '_self',
	                download: quote.document.name,
	                href: quote.document.url,
	                text: quote.document.name
	            }));

	            var modal = new _Modal2.default({
	                content: content,
	                title: 'View My Qoute',
	                hideSubmitButton: true,
	                cancelButtonTitle: 'OK'
	            });

	            modal.show();
	        }
	    }, {
	        key: 'onItemCancelQuote',
	        value: function onItemCancelQuote(request) {
	            var _this3 = this;

	            var modal = new _Modal2.default({
	                content: '<p>Do you want to cancel this quote?</p>',
	                title: 'Action',
	                submitButtonTitle: 'Yes',
	                cancelButtonTitle: 'No'
	            });

	            modal.setOnSubmit(function () {
	                _Quote2.default.destroy(request.id).done(function () {
	                    return _this3.pager.load();
	                });
	                modal.hide();
	            });

	            modal.show();
	        }
	    }, {
	        key: 'onItemViewDetails',
	        value: function onItemViewDetails(request) {

	            var content = $('\n            <div>\n                <h4>Public Information</h4>\n                 <div class="row mrg-btm-sm">\n                    <div class="col-xs-4"><b>Title:</b></div>\n                    <div id="title" class="col-xs-8"></div>\n                </div>\n                <div class="row mrg-btm-sm">\n                    <div class="col-xs-4"><b> Public Message:</b></div>\n                    <div id="publicMessage" class="col-xs-8"></div>\n                </div>\n                <hr/>\n                <h4>Private Information</h4>\n                <div class="row mrg-btm-sm">\n                    <div class="col-xs-4"><b>Client Name:</b></div>\n                    <div id="clientName" class="col-xs-8"></div>\n                </div>\n                <div class="row mrg-btm-sm">\n                    <div class="col-xs-4"><b>Client Phone:</b></div>\n                    <div id="clientPhone" class="col-xs-8"></div>\n                </div>\n                <div class="row">\n                    <div class="col-xs-4"><b>Private Message:</b></div>\n                    <div id="privateMessage" class="col-xs-8"></div>\n                </div>\n            </div>\n        ');

	            content.find('#title').text(request.title);
	            content.find('#publicMessage').text(request.publicMessage);
	            content.find('#clientName').text(request.clientName);
	            content.find('#clientPhone').text(request.clientPhone);
	            content.find('#privateMessage').text(request.privateMessage);

	            var modal = new _Modal2.default({
	                content: content,
	                title: 'View All Details',
	                hideSubmitButton: true,
	                cancelButtonTitle: 'OK'
	            });

	            modal.show();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;

	            var el = $('\n            <div>\n                <table class="table table-striped table-bordered table-list">\n                    <thead>\n                        <tr>\n                            <th style="min-width: 350px;">Title</th>\n                            <th>Public Message</th>\n                            <th style="min-width: 130px;">Status / Actions</th>\n                        </tr> \n                    </thead>\n                    <tbody></tbody>\n                </table>\n            </div>\n        ');

	            this.container = el.find('tbody');

	            this.pager = new _Pager2.default(function (page) {
	                return _QuoteRequests2.default.load(page);
	            });

	            this.pager.addOnLoad(function (data) {

	                _this4.container.empty();

	                data.forEach(function (request) {

	                    var item = new _QuoteRequestItem2.default(request);

	                    item.setOnProposeQuote(function () {
	                        return _this4.onItemProposeQuote(request);
	                    });
	                    item.setOnCancelQuote(function () {
	                        return _this4.onItemCancelQuote(request);
	                    });
	                    item.setOnViewQuote(function () {
	                        return _this4.onItemViewQuote(request);
	                    });
	                    item.setOnViewDetails(function () {
	                        return _this4.onItemViewDetails(request);
	                    });

	                    _this4.container.append(item.render());
	                });
	            });

	            el.append(this.pager.render());

	            this.pager.load();

	            return el;
	        }
	    }]);

	    return QuoteRequestsList;
	}(_sparrowUi.View);

	exports.default = QuoteRequestsList;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Helpers = __webpack_require__(9);

	var _Session = __webpack_require__(10);

	var _Session2 = _interopRequireDefault(_Session);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var QuoteRequests = {
	    load: function load() {
	        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;


	        var session = _Session2.default.get();

	        return (0, _Helpers.backend)({ method: 'GET', url: '/agents/' + session.user.id + '/requests', data: {
	                orderBy: 'id:desc', page: page
	            } });
	    }
	};

	exports.default = QuoteRequests;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Helpers = __webpack_require__(9);

	var _Session = __webpack_require__(10);

	var _Session2 = _interopRequireDefault(_Session);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Quote = {
	    store: function store(requestId, data) {
	        var session = _Session2.default.get();
	        return (0, _Helpers.backend)({ method: 'POST', url: '/agents/' + session.user.id + '/requests/' + requestId + '/quote', data: data });
	    },
	    destroy: function destroy(requestId) {
	        var session = _Session2.default.get();
	        return (0, _Helpers.backend)({ method: 'DELETE', url: '/agents/' + session.user.id + '/requests/' + requestId + '/quote' });
	    }
	};

	exports.default = Quote;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _sparrowUi = __webpack_require__(2);

	var _QuoteRequestAction = __webpack_require__(37);

	var _QuoteRequestAction2 = _interopRequireDefault(_QuoteRequestAction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuoteRequestItem = function (_View) {
	    _inherits(QuoteRequestItem, _View);

	    function QuoteRequestItem(data) {
	        _classCallCheck(this, QuoteRequestItem);

	        var _this = _possibleConstructorReturn(this, (QuoteRequestItem.__proto__ || Object.getPrototypeOf(QuoteRequestItem)).call(this));

	        _this.data = data;
	        return _this;
	    }

	    _createClass(QuoteRequestItem, [{
	        key: 'setOnProposeQuote',
	        value: function setOnProposeQuote(callback) {
	            this.onProposeQuoteCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'setOnViewQuote',
	        value: function setOnViewQuote(callback) {
	            this.onViewQuoteCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'setOnCancelQuote',
	        value: function setOnCancelQuote(callback) {
	            this.onCancelQuoteCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'setOnViewDetails',
	        value: function setOnViewDetails(callback) {
	            this.onViewDetailsCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var data = this.data;

	            var el = $('<tr/>');
	            el.append($('<td/>').text(data.title));
	            el.append($('<td/>').text(data.publicMessage));

	            var action = new _QuoteRequestAction2.default(data);

	            action.setOnProposeQuote(this.onProposeQuoteCallback);
	            action.setOnCancelQuote(this.onCancelQuoteCallback);
	            action.setOnViewQuote(this.onViewQuoteCallback);
	            action.setOnViewDetails(this.onViewDetailsCallback);

	            el.append($('<td/>').html(action.render()));

	            return el;
	        }
	    }]);

	    return QuoteRequestItem;
	}(_sparrowUi.View);

	exports.default = QuoteRequestItem;

/***/ },
/* 37 */
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

	var QuoteRequestAction = function (_View) {
	    _inherits(QuoteRequestAction, _View);

	    function QuoteRequestAction(data) {
	        _classCallCheck(this, QuoteRequestAction);

	        var _this = _possibleConstructorReturn(this, (QuoteRequestAction.__proto__ || Object.getPrototypeOf(QuoteRequestAction)).call(this));

	        _this.data = data;
	        return _this;
	    }

	    _createClass(QuoteRequestAction, [{
	        key: 'onProposeQuoteClick',
	        value: function onProposeQuoteClick(e) {
	            e.preventDefault();

	            if (this.onProposeQuoteCallback) {
	                this.onProposeQuoteCallback();
	            }
	        }
	    }, {
	        key: 'setOnProposeQuote',
	        value: function setOnProposeQuote(callback) {
	            this.onProposeQuoteCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'onCancelQuoteClick',
	        value: function onCancelQuoteClick(e) {
	            e.preventDefault();

	            if (this.onCancelQuoteCallback) {
	                this.onCancelQuoteCallback();
	            }
	        }
	    }, {
	        key: 'setOnCancelQuote',
	        value: function setOnCancelQuote(callback) {
	            this.onCancelQuoteCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'onViewQuoteClick',
	        value: function onViewQuoteClick(e) {
	            e.preventDefault();

	            if (this.onViewQuoteCallback) {
	                this.onViewQuoteCallback();
	            }
	        }
	    }, {
	        key: 'setOnViewQuote',
	        value: function setOnViewQuote(callback) {
	            this.onViewQuoteCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'onViewDetailsClick',
	        value: function onViewDetailsClick(e) {
	            e.preventDefault();

	            if (this.onViewDetailsCallback) {
	                this.onViewDetailsCallback();
	            }
	        }
	    }, {
	        key: 'setOnViewDetails',
	        value: function setOnViewDetails(callback) {
	            this.onViewDetailsCallback = callback;
	            return this;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var data = this.data;
	            var el = $('\n            <div class="btn-group">\n                <button id="statusButton" type="button"  data-toggle="dropdown" class="btn dropdown-toggle"></button>\n                <ul id="menu" class="dropdown-menu"></ul>\n            </div>\n        ');

	            var statuses = {
	                open: {
	                    name: 'open',
	                    title: 'Open',
	                    color: 'default'
	                },
	                proposed: {
	                    name: 'proposed',
	                    title: 'Proposed',
	                    color: 'primary'
	                },
	                shared: {
	                    name: 'shared',
	                    title: 'Accepted',
	                    color: 'success'
	                }
	            };

	            var status;

	            if (data.status === 'active' && data.quote !== null) {
	                status = statuses.proposed;
	            } else if (data.status === 'done' && data.quote !== null && data.quote.isPicked) {
	                status = statuses.shared;
	            } else {
	                status = statuses.open;
	            }

	            el.find('#statusButton').addClass('btn-' + status.color).text(status.title + ' ').append('<span class="caret"></span>');

	            var menu = el.find('#menu');

	            if (status.name === 'open') {
	                var action = $('<a/>', { href: '#', text: 'Propose a Quote' });
	                action.click(function (e) {
	                    return _this2.onProposeQuoteClick(e);
	                });
	                menu.append($('<li/>').html(action));
	            } else if (status.name === 'proposed') {
	                var action = $('<a/>', { href: '#', text: 'View My Quote' });
	                action.click(function (e) {
	                    return _this2.onViewQuoteClick(e);
	                });
	                menu.append($('<li/>').html(action));

	                action = $('<a/>', { href: '#', text: 'Cancel My Quote' });
	                action.click(function (e) {
	                    return _this2.onCancelQuoteClick(e);
	                });
	                menu.append($('<li/>').html(action));
	            } else if (status.name === 'shared') {
	                var action = $('<a/>', { href: '#', text: 'View All Details' });
	                action.click(function (e) {
	                    return _this2.onViewDetailsClick(e);
	                });
	                menu.append($('<li/>').html(action));

	                action = $('<a/>', { href: '#', text: 'View My Quote' });
	                action.click(function (e) {
	                    return _this2.onViewQuoteClick(e);
	                });
	                menu.append($('<li/>').html(action));
	            }

	            return el;
	        }
	    }]);

	    return QuoteRequestAction;
	}(_sparrowUi.View);

	exports.default = QuoteRequestAction;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Session = __webpack_require__(10);

	var _Session2 = _interopRequireDefault(_Session);

	var _Helpers = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Profile = {
	    load: function load() {
	        var session = _Session2.default.get();
	        return (0, _Helpers.backend)({ method: 'GET', url: '/agents/' + session.user.id });
	    },
	    patch: function patch(data) {
	        var session = _Session2.default.get();
	        return (0, _Helpers.backend)({ method: 'PATCH', url: '/agents/' + session.user.id, data: data });
	    }
	};

	exports.default = Profile;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _sparrowUi = __webpack_require__(2);

	var _Session = __webpack_require__(10);

	var _Session2 = _interopRequireDefault(_Session);

	var _page = __webpack_require__(3);

	var _page2 = _interopRequireDefault(_page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AgentNav = function (_View) {
	    _inherits(AgentNav, _View);

	    function AgentNav() {
	        _classCallCheck(this, AgentNav);

	        return _possibleConstructorReturn(this, (AgentNav.__proto__ || Object.getPrototypeOf(AgentNav)).apply(this, arguments));
	    }

	    _createClass(AgentNav, [{
	        key: 'render',
	        value: function render() {
	            var el = $('<a href="#" class="btn btn btn-success btn-sm navbar-btn navbar-right">Sign Out</a>');

	            el.click(function (e) {
	                e.preventDefault();
	                _Session2.default.destroy();
	                (0, _page2.default)('/login');
	            });

	            return el;
	        }
	    }]);

	    return AgentNav;
	}(_sparrowUi.View);

	exports.default = AgentNav;

/***/ }
/******/ ]);