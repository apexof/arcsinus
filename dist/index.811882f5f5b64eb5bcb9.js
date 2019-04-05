/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./index.jsx","libs"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./AC/ACcommon.js":
/*!************************!*\
  !*** ./AC/ACcommon.js ***!
  \************************/
/*! exports provided: START, ERR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START", function() { return START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR", function() { return ERR; });
const START = "_START";
const ERR = "_ERR";

/***/ }),

/***/ "./AC/AClogin.js":
/*!***********************!*\
  !*** ./AC/AClogin.js ***!
  \***********************/
/*! exports provided: LOG_IN, REG, SMS_CHECK, CREAR_REG, smsCheck, login, registrate, clearReg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN", function() { return LOG_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REG", function() { return REG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMS_CHECK", function() { return SMS_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREAR_REG", function() { return CREAR_REG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smsCheck", function() { return smsCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registrate", function() { return registrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearReg", function() { return clearReg; });
/* harmony import */ var redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-api-middleware */ "../node_modules/redux-api-middleware/lib/index.umd.js");
/* harmony import */ var redux_api_middleware__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ACcommon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ACcommon */ "./AC/ACcommon.js");


const LOG_IN = "LOG_IN";
const REG = "REG";
const SMS_CHECK = "SMS_CHECK";
const CREAR_REG = "CREAR_REG";
function smsCheck(formData) {
  return {
    [redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__["RSAA"]]: {
      method: "POST",
      endpoint: "/sms-check",
      body: formData,
      types: [_ACcommon__WEBPACK_IMPORTED_MODULE_1__["START"], SMS_CHECK, _ACcommon__WEBPACK_IMPORTED_MODULE_1__["ERR"]]
    }
  };
}
function login(formData) {
  return {
    [redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__["RSAA"]]: {
      method: "POST",
      endpoint: "/login",
      body: formData,
      types: [_ACcommon__WEBPACK_IMPORTED_MODULE_1__["START"], LOG_IN, LOG_IN + _ACcommon__WEBPACK_IMPORTED_MODULE_1__["ERR"]]
    }
  };
}
function registrate(formData) {
  return {
    [redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__["RSAA"]]: {
      method: "POST",
      endpoint: "/registrate",
      body: formData,
      types: [_ACcommon__WEBPACK_IMPORTED_MODULE_1__["START"], REG, REG + _ACcommon__WEBPACK_IMPORTED_MODULE_1__["ERR"]]
    }
  };
}
function clearReg() {
  return {
    type: CREAR_REG
  };
}

/***/ }),

/***/ "./AC/index.js":
/*!*********************!*\
  !*** ./AC/index.js ***!
  \*********************/
/*! exports provided: START, ERR, LOG_IN, REG, SMS_CHECK, CREAR_REG, smsCheck, login, registrate, clearReg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ACcommon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ACcommon */ "./AC/ACcommon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "START", function() { return _ACcommon__WEBPACK_IMPORTED_MODULE_0__["START"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERR", function() { return _ACcommon__WEBPACK_IMPORTED_MODULE_0__["ERR"]; });

/* harmony import */ var _AClogin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AClogin */ "./AC/AClogin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOG_IN", function() { return _AClogin__WEBPACK_IMPORTED_MODULE_1__["LOG_IN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REG", function() { return _AClogin__WEBPACK_IMPORTED_MODULE_1__["REG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SMS_CHECK", function() { return _AClogin__WEBPACK_IMPORTED_MODULE_1__["SMS_CHECK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREAR_REG", function() { return _AClogin__WEBPACK_IMPORTED_MODULE_1__["CREAR_REG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "smsCheck", function() { return _AClogin__WEBPACK_IMPORTED_MODULE_1__["smsCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _AClogin__WEBPACK_IMPORTED_MODULE_1__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registrate", function() { return _AClogin__WEBPACK_IMPORTED_MODULE_1__["registrate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearReg", function() { return _AClogin__WEBPACK_IMPORTED_MODULE_1__["clearReg"]; });




/***/ }),

/***/ "./HOC/windows/MainWindow.jsx":
/*!************************************!*\
  !*** ./HOC/windows/MainWindow.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "../node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



react_modal__WEBPACK_IMPORTED_MODULE_1___default.a.setAppElement("#root");

function bodyScroll(val) {
  document.body.style.overflow = val ? "auto" : "hidden";
}

class MainWindow extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      showModal: false
    });

    _defineProperty(this, "openModal", () => {
      bodyScroll(false);
      this.setState({
        showModal: true
      });
    });

    _defineProperty(this, "closeModal", () => {
      bodyScroll(true);
      this.setState({
        showModal: false
      });
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainWindow);

/***/ }),

/***/ "./HOC/windows/smsWindow/index.jsx":
/*!*****************************************!*\
  !*** ./HOC/windows/smsWindow/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "../node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _windows_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../windows.sass */ "./HOC/windows/windows.sass");
/* harmony import */ var _windows_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_windows_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MainWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MainWindow */ "./HOC/windows/MainWindow.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





/* harmony default export */ __webpack_exports__["default"] = ((Button, Component) => class ModalWindow extends _MainWindow__WEBPACK_IMPORTED_MODULE_3__["default"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, _extends({}, this.props, {
      openModal: this.openModal
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
      isOpen: this.state.showModal,
      className: _windows_sass__WEBPACK_IMPORTED_MODULE_2___default.a.window,
      overlayClassName: _windows_sass__WEBPACK_IMPORTED_MODULE_2___default.a.overlay,
      onRequestClose: this.closeModal,
      shouldCloseOnOverlayClick: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _windows_sass__WEBPACK_IMPORTED_MODULE_2___default.a.closeButton,
      onClick: this.closeModal
    }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, this.props, {
      closeModal: this.closeModal
    }))));
  }

});

/***/ }),

/***/ "./HOC/windows/windows.sass":
/*!**********************************!*\
  !*** ./HOC/windows/windows.sass ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"window":"P5XCtLjIoQCf45mkpLLs4","overlay":"_3AWXWE5T3KYNxf8w8WZ9uG","closeButton":"_3mR4MlLA52GYGPTnrXttRn"};

/***/ }),

/***/ "./components/App.jsx":
/*!****************************!*\
  !*** ./components/App.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SignIn */ "./components/SignIn/index.js");
/* harmony import */ var _LogIn_LogIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LogIn/LogIn */ "./components/LogIn/LogIn.jsx");
/* harmony import */ var _global_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global.sass */ "./components/global.sass");
/* harmony import */ var _global_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_global_sass__WEBPACK_IMPORTED_MODULE_6__);








function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: _store_store__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/",
    component: _SignIn__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/loginPage",
    component: _LogIn_LogIn__WEBPACK_IMPORTED_MODULE_5__["default"]
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/Footer/Footer.jsx":
/*!**************************************!*\
  !*** ./components/Footer/Footer.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.sass */ "./components/Footer/Footer.sass");
/* harmony import */ var _Footer_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mail_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail.png */ "./components/Footer/mail.png");
/* harmony import */ var _mail_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mail_png__WEBPACK_IMPORTED_MODULE_2__);




function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _Footer_sass__WEBPACK_IMPORTED_MODULE_1___default.a.img,
    src: _mail_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "\u0418\u043A\u043E\u043D\u043A\u0430 \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0430"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 \u043F\u043E\u0434\u0434\u0435\u0440\u0434\u043A\u0443")));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Footer/Footer.sass":
/*!***************************************!*\
  !*** ./components/Footer/Footer.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"img":"_23xnXP_z0WoKBeBjTR2glX"};

/***/ }),

/***/ "./components/Footer/mail.png":
/*!************************************!*\
  !*** ./components/Footer/mail.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABb0lEQVR42ozSwWuCUBwHcN+jlrHKwIIaRYHBRo0igg56EXr2BwcdghzFYrUgGKP0kAoWJBSOtLI8VDs42opR/i4Pvu99+B3eF+j6stv9MIwV5noAACQZZpgiqNdbFJWKRMIkGXaJ53Nd0xaGsYamuUkmY+12X1VnbuRoJPX7n+l0wjRXEMMwHL+rVOjBYHjTC4KkKFOEaAAAhmHQSQkicNMLgiTLU46jcdznJPB0d90Lgnwhz/AVL4qyLKsInclL7MyFF0VZklSEmOPxePHyDOv6stl8gxA4XlGmw+F4PFYRYixr22i8bjbW/9g01+12n2GKweA9QQQQoicTbbH44jjG7/eRZDiff2o2e7udfSIe57CsHc/3SqXnWCzqJKFQgGXLf/dQVNK2bZ7vVavM7+b9fs/z3Vwuk0o9XP/nbDYTj0dbrfefntZqL4XCI4QwkYi5rKeqzrZbezabA01bdDoDp+4u8eFw8Ho9LFv+HgB3Qbkl+GS6pQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./components/Header/Header.jsx":
/*!**************************************!*\
  !*** ./components/Header/Header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.sass */ "./components/Header/Header.sass");
/* harmony import */ var _Header_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_sass__WEBPACK_IMPORTED_MODULE_1__);



function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: _Header_sass__WEBPACK_IMPORTED_MODULE_1___default.a.header
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: _Header_sass__WEBPACK_IMPORTED_MODULE_1___default.a.h1
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _Header_sass__WEBPACK_IMPORTED_MODULE_1___default.a.web
  }, "Web"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _Header_sass__WEBPACK_IMPORTED_MODULE_1___default.a.app
  }, "App")));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/Header.sass":
/*!***************************************!*\
  !*** ./components/Header/Header.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"_1JEKvVm5E9RuaGrl_eqdJ9","h1":"_1EdMXJmlnwdOFfqo-V7noF","web":"_2N9O5T0AOjQFqsIIue7NVs","app":"r-fRa7qSQ3elaXxsW5xQD"};

/***/ }),

/***/ "./components/Input/Input.jsx":
/*!************************************!*\
  !*** ./components/Input/Input.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _forms_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forms.sass */ "./components/forms.sass");
/* harmony import */ var _forms_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_forms_sass__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function Input({
  reg,
  children,
  id,
  type,
  name,
  props
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _forms_sass__WEBPACK_IMPORTED_MODULE_2___default.a.inputContainer
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _forms_sass__WEBPACK_IMPORTED_MODULE_2___default.a.label
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    className: _forms_sass__WEBPACK_IMPORTED_MODULE_2___default.a.input,
    type: type || id,
    name: name || id
  }, props)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _forms_sass__WEBPACK_IMPORTED_MODULE_2___default.a.notValid
  }, reg[id] || reg[name]));
}

Input.propTypes = {
  reg: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  props: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
Input.defaultProps = {
  reg: {},
  id: undefined,
  name: undefined,
  type: undefined,
  props: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/Input/index.js":
/*!***********************************!*\
  !*** ./components/Input/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "./components/Input/Input.jsx");



const mapStateToProps = state => ({
  reg: state.registrate
});

const ConnectedInput = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_Input__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedInput);

/***/ }),

/***/ "./components/Loading/Loading.sass":
/*!*****************************************!*\
  !*** ./components/Loading/Loading.sass ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"spinner":"iHcljqRxUbN7hB4a8Al3q"};

/***/ }),

/***/ "./components/Loading/index.jsx":
/*!**************************************!*\
  !*** ./components/Loading/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _spinner_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.gif */ "./components/Loading/spinner.gif");
/* harmony import */ var _spinner_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_spinner_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loading_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading.sass */ "./components/Loading/Loading.sass");
/* harmony import */ var _Loading_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Loading_sass__WEBPACK_IMPORTED_MODULE_2__);



function Loading() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _spinner_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...",
    className: _Loading_sass__WEBPACK_IMPORTED_MODULE_2___default.a.spinner
  });
}

/***/ }),

/***/ "./components/Loading/spinner.gif":
/*!****************************************!*\
  !*** ./components/Loading/spinner.gif ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/spinner.gif";

/***/ }),

/***/ "./components/LogIn/LogIn.jsx":
/*!************************************!*\
  !*** ./components/LogIn/LogIn.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header/Header */ "./components/Header/Header.jsx");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginForm */ "./components/LogIn/LoginForm/index.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Footer/Footer */ "./components/Footer/Footer.jsx");
/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Nav/Nav */ "./components/Nav/Nav.jsx");
/* harmony import */ var _LogIn_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LogIn.sass */ "./components/LogIn/LogIn.sass");
/* harmony import */ var _LogIn_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_LogIn_sass__WEBPACK_IMPORTED_MODULE_5__);






function SignIn() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _LogIn_sass__WEBPACK_IMPORTED_MODULE_5___default.a.container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}

/***/ }),

/***/ "./components/LogIn/LogIn.sass":
/*!*************************************!*\
  !*** ./components/LogIn/LogIn.sass ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"PPdjnNMzQDmyO_kIByJ10"};

/***/ }),

/***/ "./components/LogIn/LoginForm/LoginForm.jsx":
/*!**************************************************!*\
  !*** ./components/LogIn/LoginForm/LoginForm.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Input */ "./components/Input/index.js");
/* harmony import */ var _forms_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forms.sass */ "./components/forms.sass");
/* harmony import */ var _forms_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_forms_sass__WEBPACK_IMPORTED_MODULE_3__);





function LoginForm({
  login,
  openModal
}) {
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    login(formData);
    openModal();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _forms_sass__WEBPACK_IMPORTED_MODULE_3___default.a.container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: _forms_sass__WEBPACK_IMPORTED_MODULE_3___default.a.formTitle
  }, "\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    autoComplete: "off",
    className: _forms_sass__WEBPACK_IMPORTED_MODULE_3___default.a.signForm
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "text",
    name: "login"
  }, "\u041B\u043E\u0433\u0438\u043D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "text",
    id: "password"
  }, "\u041F\u0430\u0440\u043E\u043B\u044C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: _forms_sass__WEBPACK_IMPORTED_MODULE_3___default.a.formButton,
    type: "submit"
  }, "\u0412\u043E\u0439\u0442\u0438")));
}

LoginForm.propTypes = {
  login: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  openModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./components/LogIn/LoginForm/index.js":
/*!*********************************************!*\
  !*** ./components/LogIn/LoginForm/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../AC */ "./AC/index.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginForm */ "./components/LogIn/LoginForm/LoginForm.jsx");
/* harmony import */ var _smsContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../smsContent */ "./components/LogIn/smsContent/index.js");
/* harmony import */ var _HOC_windows_smsWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../HOC/windows/smsWindow */ "./HOC/windows/smsWindow/index.jsx");





const mapDispatchToProps = {
  login: _AC__WEBPACK_IMPORTED_MODULE_1__["login"]
};
const ConnectedForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(null, mapDispatchToProps)(_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_windows_smsWindow__WEBPACK_IMPORTED_MODULE_4__["default"])(ConnectedForm, _smsContent__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./components/LogIn/smsContent/index.js":
/*!**********************************************!*\
  !*** ./components/LogIn/smsContent/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _smsContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smsContent */ "./components/LogIn/smsContent/smsContent.jsx");
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../AC */ "./AC/index.js");



const mapDispatchToProps = {
  smsCheck: _AC__WEBPACK_IMPORTED_MODULE_2__["smsCheck"]
};

const mapStateToProps = state => ({
  smsValid: state.smsValid
});

const ConnectedSmsContent = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_smsContent__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedSmsContent);

/***/ }),

/***/ "./components/LogIn/smsContent/smsContent.jsx":
/*!****************************************************!*\
  !*** ./components/LogIn/smsContent/smsContent.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _forms_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forms.sass */ "./components/forms.sass");
/* harmony import */ var _forms_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forms_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smsContent_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smsContent.sass */ "./components/LogIn/smsContent/smsContent.sass");
/* harmony import */ var _smsContent_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smsContent_sass__WEBPACK_IMPORTED_MODULE_2__);




function smsContent({
  smsCheck,
  smsValid
}) {
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    smsCheck(formData); // openModal();
  };

  console.log("smsValid", smsValid);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    autoComplete: "off",
    className: _forms_sass__WEBPACK_IMPORTED_MODULE_1___default.a.smsForm
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _forms_sass__WEBPACK_IMPORTED_MODULE_1___default.a.label
  }, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u0438\u0437 \u0441\u043C\u0441"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: _smsContent_sass__WEBPACK_IMPORTED_MODULE_2___default.a.smsInput,
    type: "number",
    name: "code",
    required: true
  }), smsValid === false && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _smsContent_sass__WEBPACK_IMPORTED_MODULE_2___default.a.notValid
  }, "\u0412\u0432\u0435\u0434\u0435\u043D \u043D\u0435 \u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043E\u0434"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: `${_forms_sass__WEBPACK_IMPORTED_MODULE_1___default.a.signButton} ${_smsContent_sass__WEBPACK_IMPORTED_MODULE_2___default.a.smsButton}`,
    type: "submit"
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")));
}

/* harmony default export */ __webpack_exports__["default"] = (smsContent);

/***/ }),

/***/ "./components/LogIn/smsContent/smsContent.sass":
/*!*****************************************************!*\
  !*** ./components/LogIn/smsContent/smsContent.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"smsInput":"_3RJFpeCrTXfJRPrwjDt1a7","notValid":"uwTPp9cZkkqTcuXkh1E6T","smsButton":"_23lI9sLrdSceNpyFDzsije"};

/***/ }),

/***/ "./components/Nav/Nav.jsx":
/*!********************************!*\
  !*** ./components/Nav/Nav.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Nav_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav.sass */ "./components/Nav/Nav.sass");
/* harmony import */ var _Nav_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Nav_sass__WEBPACK_IMPORTED_MODULE_3__);





function Nav({
  location
}) {
  const isReg = location.pathname === "/";
  const isLogin = location.pathname === "/loginPage";
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Nav_sass__WEBPACK_IMPORTED_MODULE_3___default.a.container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    className: _Nav_sass__WEBPACK_IMPORTED_MODULE_3___default.a.notLink
  }, "\u042F \u0437\u0430\u0431\u044B\u043B \u043F\u0430\u0440\u043E\u043B\u044C")), isLogin && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/"
  }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"), isReg && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/loginPage"
  }, "\u0412\u0445\u043E\u0434"));
}

Nav.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Nav));

/***/ }),

/***/ "./components/Nav/Nav.sass":
/*!*********************************!*\
  !*** ./components/Nav/Nav.sass ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"_3dsEcDaoCCytBFsKwXg_SN","notLink":"_1LlWJAVqsFZKfm8c7PX4NA"};

/***/ }),

/***/ "./components/SignIn/AutoInput/AutoInput.jsx":
/*!***************************************************!*\
  !*** ./components/SignIn/AutoInput/AutoInput.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AutoInput_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutoInput.sass */ "./components/SignIn/AutoInput/AutoInput.sass");
/* harmony import */ var _AutoInput_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AutoInput_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _forms_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forms.sass */ "./components/forms.sass");
/* harmony import */ var _forms_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_forms_sass__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class AutoInput extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      val: "",
      focusInput: false
    });

    _defineProperty(this, "handlePen", e => {
      this.changeVal(e.target.value);
    });

    _defineProperty(this, "chooseField", e => {
      this.changeVal(e.target.innerHTML);
    });
  }

  static getDerivedStateFromProps({
    fields
  }) {
    return !fields.length ? {
      val: ""
    } : null;
  }

  changeVal(val) {
    this.setState({
      val
    });
    if (this.props.callback) this.props.callback(val);
  }

  render() {
    const {
      fields,
      label,
      name,
      required,
      reg
    } = this.props;
    const FilteredFields = fields.filter(field => field.toUpperCase().startsWith(this.state.val.toUpperCase()));
    const List = FilteredFields.map(field => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: field,
      onMouseDown: this.chooseField,
      className: _AutoInput_sass__WEBPACK_IMPORTED_MODULE_2___default.a.field
    }, field));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _forms_sass__WEBPACK_IMPORTED_MODULE_3___default.a.inputContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _forms_sass__WEBPACK_IMPORTED_MODULE_3___default.a.label
    }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: _forms_sass__WEBPACK_IMPORTED_MODULE_3___default.a.input,
      value: this.state.val,
      type: "text",
      name: name,
      autoComplete: "new-password",
      onChange: this.handlePen,
      onFocus: () => this.setState({
        focusInput: true
      }),
      onBlur: () => this.setState({
        focusInput: false
      }),
      required: required
    }), List.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `${_AutoInput_sass__WEBPACK_IMPORTED_MODULE_2___default.a.list} ${!this.state.focusInput && _AutoInput_sass__WEBPACK_IMPORTED_MODULE_2___default.a.dn}`
    }, List), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _forms_sass__WEBPACK_IMPORTED_MODULE_3___default.a.notValid
    }, reg[name]));
  }

}

AutoInput.propTypes = {
  reg: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  fields: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Array).isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  callback: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  required: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
AutoInput.defaultProps = {
  reg: {},
  callback: undefined,
  required: false
};
/* harmony default export */ __webpack_exports__["default"] = (AutoInput);

/***/ }),

/***/ "./components/SignIn/AutoInput/AutoInput.sass":
/*!****************************************************!*\
  !*** ./components/SignIn/AutoInput/AutoInput.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"list":"_3NDuYmdenmSZ5p2yl3m1Yr","field":"_2xJjkj6t8WomhXvqyjujJD","dn":"_20gR2tYmbbUh1ZJR7bbcgP"};

/***/ }),

/***/ "./components/SignIn/AutoInput/index.js":
/*!**********************************************!*\
  !*** ./components/SignIn/AutoInput/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _AutoInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoInput */ "./components/SignIn/AutoInput/AutoInput.jsx");



const mapStateToProps = state => ({
  reg: state.registrate
});

const ConnectedAutoInput = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_AutoInput__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedAutoInput);

/***/ }),

/***/ "./components/SignIn/CitySelect.jsx":
/*!******************************************!*\
  !*** ./components/SignIn/CitySelect.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AutoInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoInput */ "./components/SignIn/AutoInput/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const cities = {
  Russia: ["Москва", "Рязань", "Калуга"],
  USA: ["New York", "Texas", "California"],
  France: ["Paris", "Alpes-Maritimes", "Bas-Rhin"]
};
const countries = Object.keys(cities);

class CitySelect extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      cites: []
    });

    _defineProperty(this, "getCountry", country => {
      this.setState({
        cites: cities[country] || []
      });
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AutoInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
      callback: this.getCountry,
      fields: countries,
      label: "\u0421\u0442\u0440\u0430\u043D\u0430",
      name: "country",
      required: true
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AutoInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
      fields: this.state.cites,
      label: "\u0413\u043E\u0440\u043E\u0434",
      name: "city",
      required: true
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CitySelect);

/***/ }),

/***/ "./components/SignIn/SignForm/SignForm.jsx":
/*!*************************************************!*\
  !*** ./components/SignIn/SignForm/SignForm.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _CitySelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CitySelect */ "./components/SignIn/CitySelect.jsx");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Input */ "./components/Input/index.js");
/* harmony import */ var _forms_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../forms.sass */ "./components/forms.sass");
/* harmony import */ var _forms_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_forms_sass__WEBPACK_IMPORTED_MODULE_5__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class SignForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      const formData = new FormData(e.target);
      this.props.registrate(formData);
    });
  }

  render() {
    const {
      reg,
      clearReg,
      history
    } = this.props;

    if (reg === true) {
      alert("Регистрация прошла успешна. Попробуйте войти в свой аккаунт");
      clearReg();
      history.replace("/loginPage");
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _forms_sass__WEBPACK_IMPORTED_MODULE_5___default.a.container
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: _forms_sass__WEBPACK_IMPORTED_MODULE_5___default.a.formTitle
    }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      autoComplete: "off",
      noValidate: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "text",
      name: "fio"
    }, "\u0424\u0418\u041E"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CitySelect__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "tel",
      props: {
        placeholder: "Например: 9539055080"
      }
    }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "email"
    }, "E-mail"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "password"
    }, "\u041F\u0430\u0440\u043E\u043B\u044C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _forms_sass__WEBPACK_IMPORTED_MODULE_5___default.a.inputContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _forms_sass__WEBPACK_IMPORTED_MODULE_5___default.a.label
    }, "\u041E\u0421 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      className: _forms_sass__WEBPACK_IMPORTED_MODULE_5___default.a.input,
      name: "os"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Android"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "iOS"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: _forms_sass__WEBPACK_IMPORTED_MODULE_5___default.a.formButton,
      type: "submit"
    }, "\u0412\u043E\u0439\u0442\u0438")));
  }

}

SignForm.propTypes = {
  registrate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  reg: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  clearReg: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    replace: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired
};
SignForm.defaultProps = {
  reg: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(SignForm));

/***/ }),

/***/ "./components/SignIn/SignForm/index.js":
/*!*********************************************!*\
  !*** ./components/SignIn/SignForm/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../AC */ "./AC/index.js");
/* harmony import */ var _SignForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignForm */ "./components/SignIn/SignForm/SignForm.jsx");



const mapDispatchToProps = {
  registrate: _AC__WEBPACK_IMPORTED_MODULE_1__["registrate"],
  clearReg: _AC__WEBPACK_IMPORTED_MODULE_1__["clearReg"]
};

const mapStateToProps = state => ({
  reg: state.registrate
});

const ConnectedForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_SignForm__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedForm);

/***/ }),

/***/ "./components/SignIn/SignIn.jsx":
/*!**************************************!*\
  !*** ./components/SignIn/SignIn.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/Header */ "./components/Header/Header.jsx");
/* harmony import */ var _SignForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignForm */ "./components/SignIn/SignForm/index.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Footer/Footer */ "./components/Footer/Footer.jsx");
/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Nav/Nav */ "./components/Nav/Nav.jsx");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Loading */ "./components/Loading/index.jsx");
/* harmony import */ var _LogIn_LogIn_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../LogIn/LogIn.sass */ "./components/LogIn/LogIn.sass");
/* harmony import */ var _LogIn_LogIn_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_LogIn_LogIn_sass__WEBPACK_IMPORTED_MODULE_7__);









function SignIn({
  loading
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _LogIn_LogIn_sass__WEBPACK_IMPORTED_MODULE_7___default.a.container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SignForm__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
}

SignIn.propTypes = {
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SignIn);

/***/ }),

/***/ "./components/SignIn/index.js":
/*!************************************!*\
  !*** ./components/SignIn/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignIn */ "./components/SignIn/SignIn.jsx");



function mapStateToProps(state) {
  return {
    loading: state.loading
  };
}

const ConnectedSignIn = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_SignIn__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedSignIn);

/***/ }),

/***/ "./components/forms.sass":
/*!*******************************!*\
  !*** ./components/forms.sass ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"_39UkF26ZO4bU1wAboqGR-J","form":"vPsj1bYHSyEchb1RKNAjH","formTitle":"_10ssDSrANPtOdYkFD86Hkc","inputContainer":"_3dEvXXareCiasPkV5qoDS0","label":"_5lFPcAG9nJLGYsIho0Ret","input":"_3-1HxGTgb4nXtRqJdEZlof","notValid":"VgdVNF-nTcJc83-Qiw9sh","formButton":"_3m9oKnVNwch4DscQaf5viu"};

/***/ }),

/***/ "./components/global.sass":
/*!********************************!*\
  !*** ./components/global.sass ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./index.jsx":
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./components/App.jsx");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById("root"));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var _loadingReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadingReducer */ "./reducers/loadingReducer.js");
/* harmony import */ var _loginReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginReducer */ "./reducers/loginReducer.js");
/* harmony import */ var _regReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./regReducer */ "./reducers/regReducer.js");
/* harmony import */ var _smsReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smsReducer */ "./reducers/smsReducer.js");





const reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  loading: _loadingReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  login: _loginReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  registrate: _regReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  smsValid: _smsReducer__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/loadingReducer.js":
/*!************************************!*\
  !*** ./reducers/loadingReducer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AC */ "./AC/index.js");


function loadingReducer(loading = false, action) {
  switch (action.type) {
    case _AC__WEBPACK_IMPORTED_MODULE_0__["START"]:
      return true;

    default:
      return false;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (loadingReducer);

/***/ }),

/***/ "./reducers/loginReducer.js":
/*!**********************************!*\
  !*** ./reducers/loginReducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AC */ "./AC/index.js");


function loginReducer(login, {
  type,
  payload: data
}) {
  switch (type) {
    case _AC__WEBPACK_IMPORTED_MODULE_0__["LOG_IN"]:
      console.log(data);
      return true;

    default:
      return false;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (loginReducer);

/***/ }),

/***/ "./reducers/regReducer.js":
/*!********************************!*\
  !*** ./reducers/regReducer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AC */ "./AC/index.js");


function regReducer(registrate = false, action) {
  switch (action.type) {
    case _AC__WEBPACK_IMPORTED_MODULE_0__["REG"]:
      const {
        payload: data
      } = action;
      console.log(data);

      if (data.err) {
        return data.errMsg;
      }

      return true;

    case _AC__WEBPACK_IMPORTED_MODULE_0__["CREAR_REG"]:
      return false;

    default:
      return registrate;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (regReducer);

/***/ }),

/***/ "./reducers/smsReducer.js":
/*!********************************!*\
  !*** ./reducers/smsReducer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AC */ "./AC/index.js");


function smsReducer(smsValid = null, {
  type,
  payload: data
}) {
  switch (type) {
    case _AC__WEBPACK_IMPORTED_MODULE_0__["SMS_CHECK"]:
      console.log(data);
      return data.smsValid;

    default:
      return smsValid;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (smsReducer);

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var redux_api_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-api-middleware */ "../node_modules/redux-api-middleware/lib/index.umd.js");
/* harmony import */ var redux_api_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_api_middleware__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");



const state = {
  loading: false,
  login: false,
  registrate: false,
  smsValid: null
};
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], state, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_api_middleware__WEBPACK_IMPORTED_MODULE_1__["apiMiddleware"]));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ })

/******/ });
//# sourceMappingURL=index.811882f5f5b64eb5bcb9.js.map