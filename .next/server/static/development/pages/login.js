module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
var _jsxFileName = "/Users/romeoenso/Desktop/refluens/refluens-hotel-reservation/hotel-app/pages/login.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Login = ({
  apiUrl,
  token
}) => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    username: '',
    password: '',
    error: ''
  });

  const handleChange = e => {
    setState(_objectSpread({}, state, {
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const username = state.username;
    const url = apiUrl;

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, {
        email: username,
        password: state.password
      });

      if (response.data) {
        Object(_utils_auth__WEBPACK_IMPORTED_MODULE_4__["login"])({
          token: response.data.token
        });
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  return __jsx("div", {
    className: "jsx-458047844",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-458047844" + " " + 'login',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-458047844",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "username",
    className: "jsx-458047844",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Login"), __jsx("input", {
    type: "text",
    id: "username",
    name: "username",
    value: state.username,
    onChange: handleChange,
    className: "jsx-458047844",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx("input", {
    type: "password",
    id: "password",
    name: "password",
    value: state.password,
    onChange: handleChange,
    className: "jsx-458047844",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }), __jsx("button", {
    type: "submit",
    className: "jsx-458047844",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Login"), __jsx("p", {
    className: "jsx-458047844" + " " + `error ${state.error && 'show'}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, state.error && `Error: ${state.error}`))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "458047844",
    __self: undefined
  }, ".login.jsx-458047844{max-width:340px;margin:0 auto;padding:1rem;border:1px solid #ccc;border-radius:4px;}form.jsx-458047844{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}label.jsx-458047844{font-weight:600;}input.jsx-458047844{padding:8px;margin:0.3rem 0 1rem;border:1px solid #ccc;border-radius:4px;}.error.jsx-458047844{margin:0.5rem 0 0;display:none;color:brown;}.error.show.jsx-458047844{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21lb2Vuc28vRGVza3RvcC9yZWZsdWVucy9yZWZsdWVucy1ob3RlbC1yZXNlcnZhdGlvbi9ob3RlbC1hcHAvcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0VrQixBQUcyQixBQU9ILEFBSUcsQUFHSixBQU1NLEFBS0osWUFWTyxFQVd2QixFQXpCZ0IsQUFXaEIsRUFTZSxZQW5CQSxDQW9CRCxFQU5VLFVBYkEsQUFvQnhCLFlBTm9CLFVBYkEsUUFjcEIsQ0FWbUIsU0FIbkIsc0RBSUEiLCJmaWxlIjoiL1VzZXJzL3JvbWVvZW5zby9EZXNrdG9wL3JlZmx1ZW5zL3JlZmx1ZW5zLWhvdGVsLXJlc2VydmF0aW9uL2hvdGVsLWFwcC9wYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBjb29raWVzIGZyb20gJ25leHQtY29va2llcyc7XG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uL3V0aWxzL2F1dGgnO1xuXG5jb25zdCBMb2dpbiA9ICh7IGFwaVVybCwgdG9rZW4gfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICB1c2VybmFtZTogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIGVycm9yOiAnJ1xuICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHVzZXJuYW1lID0gc3RhdGUudXNlcm5hbWU7XG4gICAgY29uc3QgdXJsID0gYXBpVXJsXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwge1xuICAgICAgICBlbWFpbDogdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBzdGF0ZS5wYXNzd29yZFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICAgIGxvZ2luKHsgdG9rZW46IHJlc3BvbnNlLmRhdGEudG9rZW4gfSlcbiAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luJz5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3VzZXJuYW1lJz5Mb2dpbjwvbGFiZWw+XG5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICBpZD0ndXNlcm5hbWUnXG4gICAgICAgICAgICBuYW1lPSd1c2VybmFtZSdcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS51c2VybmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICBpZD0ncGFzc3dvcmQnXG4gICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5Mb2dpbjwvYnV0dG9uPlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgZXJyb3IgJHtzdGF0ZS5lcnJvciAmJiAnc2hvdyd9YH0+XG4gICAgICAgICAgICB7c3RhdGUuZXJyb3IgJiYgYEVycm9yOiAke3N0YXRlLmVycm9yfWB9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmxvZ2luIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDM0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIG1hcmdpbjogMC4zcmVtIDAgMXJlbTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIG1hcmdpbjogMC41cmVtIDAgMDtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIGNvbG9yOiBicm93bjtcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3Iuc2hvdyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Mb2dpbi5nZXRJbml0aWFsUHJvcHMgPSBjdHggPT4ge1xuICBjb25zdCBhcGlVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2F1dGhlbnRpY2F0ZSc7XG4gIGNvbnN0IHsgdG9rZW4gfSA9IGNvb2tpZXMoY3R4KTtcblxuICBpZiAodG9rZW4pIHtcbiAgICBpZiAoY3R4LnJlcykge1xuICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7IExvY2F0aW9uOiAnLycgfSlcbiAgICAgIGN0eC5yZXMuZW5kKClcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPSAnLydcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgYXBpVXJsLCB0b2tlbiB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdfQ== */\n/*@ sourceURL=/Users/romeoenso/Desktop/refluens/refluens-hotel-reservation/hotel-app/pages/login.js */"));
};

Login.getInitialProps = ctx => {
  const apiUrl = 'http://localhost:4000/authenticate';
  const {
    token
  } = next_cookies__WEBPACK_IMPORTED_MODULE_3___default()(ctx);

  if (token) {
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: '/'
      });
      ctx.res.end();
    } else {
      document.location.pathname = '/';
    }
  }

  ;
  return {
    apiUrl,
    token
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/romeoenso/Desktop/refluens/refluens-hotel-reservation/hotel-app/utils/auth.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const login = ({
  token
}) => {
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('token', token, {
    expires: 1
  });
  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
};
const auth = ctx => {
  const {
    token
  } = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(ctx); // If there's no token, it means the user is not logged in.

  if (!token) {
    if (true) {
      ctx.res.writeHead(302, {
        Location: '/login'
      });
      ctx.res.end();
    } else {}
  }

  return token;
};
const logout = () => {
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('token'); // to support logging out from all windows

  window.localStorage.setItem('logout', Date.now());
  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
};
const withAuthSync = WrappedComponent => {
  const Wrapper = props => {
    const syncLogout = event => {
      if (event.key === 'logout') {
        console.log('logged out from storage!');
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
      }
    };

    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      window.addEventListener('storage', syncLogout);
      return () => {
        window.removeEventListener('storage', syncLogout);
        window.localStorage.removeItem('logout');
      };
    }, []);
    return __jsx(WrappedComponent, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }));
  };

  Wrapper.getInitialProps = async ctx => {
    const token = auth(ctx);
    const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
    return _objectSpread({}, componentProps, {
      token
    });
  };

  return Wrapper;
};

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/romeoenso/Desktop/refluens/refluens-hotel-reservation/hotel-app/pages/login.js */"./pages/login.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map