webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");


var _jsxFileName = "/Users/romeoenso/Desktop/refluens/refluens-hotel-reservation/hotel-app/pages/login.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Login = function Login(_ref) {
  var apiUrl = _ref.apiUrl,
      token = _ref.token;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    username: '',
    password: '',
    error: ''
  }),
      state = _useState[0],
      setState = _useState[1]; // useEffect(() => {
  //   if(token){
  //   }
  // });


  var handleChange = function handleChange(e) {
    setState(_objectSpread({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.name, e.target.value)));
  };

  var handleSubmit = function handleSubmit(event) {
    var username, url, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            username = state.username;
            url = apiUrl;
            _context.prev = 3;
            _context.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(url, {
              email: username,
              password: state.password
            }));

          case 6:
            response = _context.sent;

            if (response.data) {
              Object(_utils_auth__WEBPACK_IMPORTED_MODULE_7__["login"])({
                token: response.data.token
              });
            }

            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            console.log('Error', _context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[3, 10]], Promise);
  };

  return __jsx("div", {
    className: "jsx-458047844",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-458047844" + " " + 'login',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-458047844",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "username",
    className: "jsx-458047844",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Login"), __jsx("input", {
    type: "text",
    id: "username",
    name: "username",
    value: state.username,
    onChange: handleChange,
    className: "jsx-458047844",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("input", {
    type: "password",
    id: "password",
    name: "password",
    value: state.password,
    onChange: handleChange,
    className: "jsx-458047844",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    className: "jsx-458047844",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Login"), __jsx("p", {
    className: "jsx-458047844" + " " + "error ".concat(state.error && 'show'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, state.error && "Error: ".concat(state.error)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "458047844",
    __self: this
  }, ".login.jsx-458047844{max-width:340px;margin:0 auto;padding:1rem;border:1px solid #ccc;border-radius:4px;}form.jsx-458047844{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}label.jsx-458047844{font-weight:600;}input.jsx-458047844{padding:8px;margin:0.3rem 0 1rem;border:1px solid #ccc;border-radius:4px;}.error.jsx-458047844{margin:0.5rem 0 0;display:none;color:brown;}.error.show.jsx-458047844{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21lb2Vuc28vRGVza3RvcC9yZWZsdWVucy9yZWZsdWVucy1ob3RlbC1yZXNlcnZhdGlvbi9ob3RlbC1hcHAvcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEVrQixBQUcyQixBQU9ILEFBSUcsQUFHSixBQU1NLEFBS0osWUFWTyxFQVd2QixFQXpCZ0IsQUFXaEIsRUFTZSxZQW5CQSxDQW9CRCxFQU5VLFVBYkEsQUFvQnhCLFlBTm9CLFVBYkEsUUFjcEIsQ0FWbUIsU0FIbkIsc0RBSUEiLCJmaWxlIjoiL1VzZXJzL3JvbWVvZW5zby9EZXNrdG9wL3JlZmx1ZW5zL3JlZmx1ZW5zLWhvdGVsLXJlc2VydmF0aW9uL2hvdGVsLWFwcC9wYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBjb29raWVzIGZyb20gJ25leHQtY29va2llcyc7XG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uL3V0aWxzL2F1dGgnO1xuXG5jb25zdCBMb2dpbiA9ICh7IGFwaVVybCwgdG9rZW4gfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICB1c2VybmFtZTogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIGVycm9yOiAnJ1xuICB9KTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmKHRva2VuKXtcbiAgLy8gICB9XG4gIC8vIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgdXNlcm5hbWUgPSBzdGF0ZS51c2VybmFtZTtcbiAgICBjb25zdCB1cmwgPSBhcGlVcmxcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCB7XG4gICAgICAgIGVtYWlsOiB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHN0YXRlLnBhc3N3b3JkXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgbG9naW4oeyB0b2tlbjogcmVzcG9uc2UuZGF0YS50b2tlbiB9KVxuICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW4nPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlcm5hbWUnPkxvZ2luPC9sYWJlbD5cblxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIGlkPSd1c2VybmFtZSdcbiAgICAgICAgICAgIG5hbWU9J3VzZXJuYW1lJ1xuICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnVzZXJuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICAgIGlkPSdwYXNzd29yZCdcbiAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPkxvZ2luPC9idXR0b24+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2BlcnJvciAke3N0YXRlLmVycm9yICYmICdzaG93J31gfT5cbiAgICAgICAgICAgIHtzdGF0ZS5lcnJvciAmJiBgRXJyb3I6ICR7c3RhdGUuZXJyb3J9YH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubG9naW4ge1xuICAgICAgICAgIG1heC13aWR0aDogMzQwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgbWFyZ2luOiAwLjNyZW0gMCAxcmVtO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMCAwO1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGJyb3duO1xuICAgICAgICB9XG4gICAgICAgIC5lcnJvci5zaG93IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbkxvZ2luLmdldEluaXRpYWxQcm9wcyA9IGN0eCA9PiB7XG4gIGNvbnN0IGFwaVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvYXV0aGVudGljYXRlJztcbiAgY29uc3QgeyB0b2tlbiB9ID0gY29va2llcyhjdHgpO1xuXG4gIGlmICh0b2tlbikge1xuICAgIGlmIChjdHgucmVzKSB7XG4gICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHsgTG9jYXRpb246ICcvJyB9KVxuICAgICAgY3R4LnJlcy5lbmQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9ICcvJ1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBhcGlVcmwsIHRva2VuIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il19 */\n/*@ sourceURL=/Users/romeoenso/Desktop/refluens/refluens-hotel-reservation/hotel-app/pages/login.js */"));
};

Login.getInitialProps = function (ctx) {
  var apiUrl = 'http://localhost:4000/authenticate';

  var _cookies = next_cookies__WEBPACK_IMPORTED_MODULE_6___default()(ctx),
      token = _cookies.token;

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
    apiUrl: apiUrl,
    token: token
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.1549511f3998ef4173d1.hot-update.js.map