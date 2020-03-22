webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/*! exports provided: login, auth, logout, withAuthSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthSync", function() { return withAuthSync; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "/Users/romeoenso/Desktop/refluens/refluens-hotel-reservation/hotel-app/utils/auth.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var login = function login(_ref) {
  var token = _ref.token;
  js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('token', token, {
    expires: 1
  });
  next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
};
var auth = function auth(ctx) {
  var _nextCookie = next_cookies__WEBPACK_IMPORTED_MODULE_5___default()(ctx),
      token = _nextCookie.token; // If there's no token, it means the user is not logged in.


  if (!token) {
    if (false) {} else {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/login');
    }
  }

  return token;
};
var logout = function logout() {
  js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.remove('token'); // to support logging out from all windows

  window.localStorage.setItem('logout', Date.now());
  next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/login');
};
var withAuthSync = function withAuthSync(WrappedComponent) {
  var Wrapper = function Wrapper(props) {
    var syncLogout = function syncLogout(event) {
      if (event.key === 'logout') {
        console.log('logged out from storage!');
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/login');
      }
    };

    Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
      window.addEventListener('storage', syncLogout);
      return function () {
        window.removeEventListener('storage', syncLogout);
        window.localStorage.removeItem('logout');
      };
    }, []);
    return __jsx(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }));
  };

  Wrapper.getInitialProps = function _callee(ctx) {
    var token, componentProps;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = auth(ctx);
            _context.t0 = WrappedComponent.getInitialProps;

            if (!_context.t0) {
              _context.next = 6;
              break;
            }

            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(WrappedComponent.getInitialProps(ctx));

          case 5:
            _context.t0 = _context.sent;

          case 6:
            componentProps = _context.t0;
            return _context.abrupt("return", _objectSpread({}, componentProps, {
              token: token
            }));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return Wrapper;
};

/***/ })

})
//# sourceMappingURL=index.js.559b372437c8e07f2a61.hot-update.js.map