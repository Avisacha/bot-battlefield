/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/app.component.js":
/*!**********************************!*\
  !*** ./src/app/app.component.js ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppComponent\", function() { return AppComponent; });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ \"./src/component.js\");\n/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ \"./src/app/home/home.component.js\");\n/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_home_component__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ \"./src/app/login/login.component.js\");\n/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_login_login_component__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game.component */ \"./src/app/game/game.component.js\");\n/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_game_game_component__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar AppComponent =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(AppComponent, _Component);\n\n  function AppComponent() {\n    var _this;\n\n    _classCallCheck(this, AppComponent);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppComponent).call(this, \"app\", \"<p>truc</p>\", \"p{color: red}\"));\n    homeComponent = new _home_home_component__WEBPACK_IMPORTED_MODULE_1__[\"HomeComponent\"]();\n    login = new _login_login_component__WEBPACK_IMPORTED_MODULE_2__[\"Login\"]();\n    game = new _game_game_component__WEBPACK_IMPORTED_MODULE_3__[\"Game\"]();\n    return _this;\n  }\n\n  return AppComponent;\n}(_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n//# sourceURL=webpack:///./src/app/app.component.js?");

/***/ }),

/***/ "./src/app/game/game.component.js":
/*!****************************************!*\
  !*** ./src/app/game/game.component.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\src\\\\app\\\\game\\\\game.component.js: super() is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class? (3:8)\\n\\n\\u001b[0m \\u001b[90m 1 | \\u001b[39m\\u001b[36mexport\\u001b[39m \\u001b[36mclass\\u001b[39m \\u001b[33mGame\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 2 | \\u001b[39m    constructor() {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 3 | \\u001b[39m        \\u001b[36msuper\\u001b[39m()\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m    }\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m}\\u001b[0m\\n    at Parser.raise (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6344:17)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8665:16)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8413:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8393:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8280:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8253:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8200:21)\\n    at Parser.parseExpression (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8148:23)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9917:23)\\n    at Parser.parseStatement (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9788:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10364:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10351:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10335:10)\\n    at Parser.parseFunctionBody (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9408:24)\\n    at Parser.parseFunctionBodyAndFinish (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9378:10)\\n    at Parser.parseMethod (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9332:10)\\n    at Parser.pushClassMethod (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10767:30)\\n    at Parser.parseClassMemberWithIsStatic (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10692:12)\\n    at Parser.parseClassMember (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10631:10)\\n    at withTopicForbiddingContext (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10586:14)\\n    at Parser.withTopicForbiddingContext (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9683:14)\\n    at Parser.parseClassBody (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10563:10)\\n    at Parser.parseClass (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10537:22)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9830:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9788:17)\\n    at Parser.parseExportDeclaration (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10980:17)\\n    at Parser.maybeParseExportDeclaration (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10930:31)\\n    at Parser.parseExport (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10859:29)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9892:27)\\n    at Parser.parseStatement (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9788:17)\");\n\n//# sourceURL=webpack:///./src/app/game/game.component.js?");

/***/ }),

/***/ "./src/app/home/home.component.js":
/*!****************************************!*\
  !*** ./src/app/home/home.component.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\src\\\\app\\\\home\\\\home.component.js: super() is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class? (6:8)\\n\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[36mexport\\u001b[39m \\u001b[36mclass\\u001b[39m \\u001b[33mHomeComponent\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m    constructor(){\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 6 | \\u001b[39m        \\u001b[36msuper\\u001b[39m()\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 8 | \\u001b[39m        menuComponent \\u001b[33m=\\u001b[39m \\u001b[36mnew\\u001b[39m \\u001b[33mMenuComponent\\u001b[39m()\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 9 | \\u001b[39m        opponentSelection \\u001b[33m=\\u001b[39m \\u001b[36mnew\\u001b[39m \\u001b[33mOpponentSelection\\u001b[39m()\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Parser.raise (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6344:17)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8665:16)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8413:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8393:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8280:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8253:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8200:21)\\n    at Parser.parseExpression (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8148:23)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9917:23)\\n    at Parser.parseStatement (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9788:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10364:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10351:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10335:10)\\n    at Parser.parseFunctionBody (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9408:24)\\n    at Parser.parseFunctionBodyAndFinish (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9378:10)\\n    at Parser.parseMethod (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9332:10)\\n    at Parser.pushClassMethod (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10767:30)\\n    at Parser.parseClassMemberWithIsStatic (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10692:12)\\n    at Parser.parseClassMember (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10631:10)\\n    at withTopicForbiddingContext (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10586:14)\\n    at Parser.withTopicForbiddingContext (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9683:14)\\n    at Parser.parseClassBody (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10563:10)\\n    at Parser.parseClass (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10537:22)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9830:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9788:17)\\n    at Parser.parseExportDeclaration (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10980:17)\\n    at Parser.maybeParseExportDeclaration (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10930:31)\\n    at Parser.parseExport (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10859:29)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9892:27)\\n    at Parser.parseStatement (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9788:17)\");\n\n//# sourceURL=webpack:///./src/app/home/home.component.js?");

/***/ }),

/***/ "./src/app/login/login.component.js":
/*!******************************************!*\
  !*** ./src/app/login/login.component.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\src\\\\app\\\\login\\\\login.component.js: super() is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class? (3:8)\\n\\n\\u001b[0m \\u001b[90m 1 | \\u001b[39m\\u001b[36mexport\\u001b[39m \\u001b[36mclass\\u001b[39m \\u001b[33mLogin\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 2 | \\u001b[39m    constructor () {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 3 | \\u001b[39m        \\u001b[36msuper\\u001b[39m()\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m    }\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m}\\u001b[0m\\n    at Parser.raise (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6344:17)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8665:16)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8413:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8393:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8280:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8253:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8200:21)\\n    at Parser.parseExpression (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8148:23)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9917:23)\\n    at Parser.parseStatement (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9788:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10364:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10351:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10335:10)\\n    at Parser.parseFunctionBody (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9408:24)\\n    at Parser.parseFunctionBodyAndFinish (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9378:10)\\n    at Parser.parseMethod (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9332:10)\\n    at Parser.pushClassMethod (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10767:30)\\n    at Parser.parseClassMemberWithIsStatic (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10692:12)\\n    at Parser.parseClassMember (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10631:10)\\n    at withTopicForbiddingContext (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10586:14)\\n    at Parser.withTopicForbiddingContext (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9683:14)\\n    at Parser.parseClassBody (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10563:10)\\n    at Parser.parseClass (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10537:22)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9830:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9788:17)\\n    at Parser.parseExportDeclaration (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10980:17)\\n    at Parser.maybeParseExportDeclaration (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10930:31)\\n    at Parser.parseExport (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10859:29)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9892:27)\\n    at Parser.parseStatement (C:\\\\Users\\\\Administrateur\\\\Desktop\\\\bot-battlefield\\\\bot-battlefield-app\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9788:17)\");\n\n//# sourceURL=webpack:///./src/app/login/login.component.js?");

/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Component =\n/*#__PURE__*/\nfunction () {\n  function Component(balise, html, scss) {\n    _classCallCheck(this, Component);\n\n    this.html = html;\n    this.scss = scss;\n    this.balise = balise;\n  }\n\n  _createClass(Component, [{\n    key: \"display\",\n    value: function display() {\n      var element = window.document.querySelector(this.balise);\n      element.innerHTML = this.html;\n    }\n  }]);\n\n  return Component;\n}();\n\n//# sourceURL=webpack:///./src/component.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ \"./src/app/app.component.js\");\n\nvar appComponent = new _app_app_component__WEBPACK_IMPORTED_MODULE_0__[\"AppComponent\"](); //console.log(appComponent);\n\nappComponent.display();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.scss?");

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/index.js ./src/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/index.scss */\"./src/index.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./src/index.scss?");

/***/ })

/******/ });