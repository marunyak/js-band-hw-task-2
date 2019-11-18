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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n    outline: 0;\\n}\\n\\nhtml {\\n    height: 100%;\\n    font-family: 'Courier New', Courier, monospace;\\n    font-size: 16px;\\n    font-weight: 700;\\n    color:#fff;\\n}\\n\\nheader, footer{\\n   width: 100%;\\n   height: 60px;\\n   padding: 20px;\\n   font-size: 20px;\\n   font-weight: 700;\\n   background-color: lightsalmon;\\n}\\n\\nheader {\\n    margin-bottom: 40px;\\n}\\n\\n#root {\\n    width: 100%;\\n}\\n\\nmain {\\n    max-width: 1200px;\\n    margin: 0 auto;\\n    padding: 0 20px;\\n}\\n\\np {\\n    text-align: center;\\n    margin-bottom: 15px;\\n    font-size: 20px;\\n    color: black;\\n}\\n\\ninput, textarea {\\n    width: 100%;\\n    padding: 10px;\\n    font-size: 15px;\\n    border: 1px solid darkgrey;\\n}\\n\\nli {\\n    list-style: none;\\n}\\n\\nfooter {\\n    position: fixed;\\n    left: 0;\\n    bottom: 0;\\n}\\n\\n#root.opacity {\\n    opacity: 0.2;\\n}\\n\\n.stop-scrolling {\\n    height: 100%;\\n    overflow: hidden;\\n}\\n\\ntable {\\n    border-radius: 10px;\\n    border-spacing: 0;\\n    text-align: center;\\n    margin: 0 auto;\\n}\\n\\nth {\\n    color:black;\\n    padding: 25px;\\n}\\n\\nth, td {\\n    border-style: solid;\\n    border-width: 1px;\\n    border-color: lightgray;\\n    color:black;\\n}\\n\\ntd {\\n    padding: 10px 20px;\\n}\\n\\ntr:last-child td:first-child {\\n    border-radius: 0 0 0 10px;\\n}\\n\\ntr:last-child td:last-child {\\n    border-radius: 0 0 10px 0;\\n}\\n\\ntr:last-child th:first-child {\\n    border-radius: 10px 0 0 0;\\n}\\n\\ntr:last-child th:last-child {\\n    border-radius: 0 10px 0 0;\\n}\\n\\n.table-transport {\\n    margin-bottom: 45px;\\n}\\n\\n.table-costs {\\n    margin-bottom: 90px;\\n}\\n\\n\\n.create-transport-track, .create-transport-ship, .create-cost-delivery {\\n    display: none;\\n}\\n\\n.create-transport-ship label, .create-transport-track label, .create-cost-delivery label {\\n    display: block;\\n    margin: 9px 0;\\n}\\n\\n.create-transport-ship.show, .create-transport-track.show, .create-cost-delivery.show {\\n    display: block;\\n    position: absolute;\\n    margin: auto;\\n    top: 0;\\n    left: 0;\\n    right:0;\\n    bottom: 0;\\n    padding: 20px;\\n    max-width: 400px;\\n    width: 400px;\\n    max-height:650px;\\n    background-color: white;\\n    color: black;\\n    font-size: 16px;\\n    box-shadow: -1px 0px 20px 0px rgba(0, 0, 0, 0.1);\\n    z-index: 99999;\\n}\\n\\ninput[name=\\\"ship-team\\\"], input[name=\\\"track-gas\\\"], input[name=\\\"cost-dist\\\"]  {\\n    margin-bottom: 20px;\\n}\\n\\n.create-item {\\n    position: absolute;\\n    left: 50px;\\n    top: 150px;\\n}\\n\\n.create-item .button {\\n    margin-bottom: 15px;\\n}\\n\\n.buttons {\\n    display: flex;\\n    justify-content:space-between;\\n}\\n\\n.button {\\n    padding: 10px 10px;\\n    text-align: center;\\n    width:150px;\\n    color: #fff;\\n    border-radius: 10px;\\n    cursor: pointer;\\n}\\n\\n.button.track {\\n    background-color: #921bff;\\n}\\n\\n.button.ship {\\n    background-color: #1bd5ff;\\n}\\n\\n.button.cost {\\n    background-color: #1b96ff;\\n}\\n\\n.button.cancel {\\n    background-color: #ffce1b;\\n}\\n\\n.button.save {\\n    background-color: green;\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/LocalStorage.js */ \"./src/js/modules/LocalStorage.js\");\n/* harmony import */ var _modules_Catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Catalog */ \"./src/js/modules/Catalog.js\");\n/* harmony import */ var _modules_Buttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Buttons.js */ \"./src/js/modules/Buttons.js\");\n/* harmony import */ var _modules_Ship_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Ship.js */ \"./src/js/modules/Ship.js\");\n/* harmony import */ var _modules_Track_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Track.js */ \"./src/js/modules/Track.js\");\n\n\n\n\n\n\nvar root = document.querySelector(\"#root\");\nvar ship = document.querySelector('.create-transport-ship');\nvar track = document.querySelector('.create-transport-track');\nvar costDelivery = document.querySelector('.create-cost-delivery'); //Render info for transport-catalog\n\nvar LocalStorage1 = new _modules_LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('cost');\nvar listCosts = LocalStorage1.get();\n\nif (listCosts) {\n  var catalog = new _modules_Catalog__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.table-costs');\n  listCosts.forEach(function (_ref) {\n    var model = _ref.model,\n        cost1 = _ref.cost1,\n        cost2 = _ref.cost2;\n    return catalog.add(model, cost1, cost2);\n  });\n} //Render info for cost-catalog\n\n\nvar LocalStorage2 = new _modules_LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('transport');\nvar listTransport = LocalStorage2.get();\n\nif (listTransport) {\n  var _catalog = new _modules_Catalog__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.table-transport');\n\n  listTransport.forEach(function (item) {\n    if (item.licensePlate) {\n      var _track = new _modules_Track_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](item.averageSpeed);\n\n      var capacity = _track.showCapacityInPounds(item.capacity);\n\n      var averageSpeed = _track.showAvarageSpeed();\n\n      _catalog.add(item.id, item.model, item.licensePlate, item.producedYear, capacity, averageSpeed, item.typeOfGas);\n    } else if (item.name) {\n      var _ship = new _modules_Ship_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](item.averageSpeed);\n\n      var _capacity = _ship.showCapacityInPounds(item.capacity);\n\n      var _averageSpeed = _ship.showAvarageSpeed();\n\n      _catalog.add(item.id, item.model, item.name, item.producedYear, _capacity, _averageSpeed, item.countOfTeam);\n    }\n  });\n}\n\ndocument.querySelector(\".create-item\").addEventListener('click', function (e) {\n  var elem = e.target;\n\n  if (elem.classList.contains('ship')) {\n    ship.classList.toggle('show');\n  } else if (elem.classList.contains('track')) {\n    track.classList.toggle('show');\n  } else if (elem.classList.contains('cost')) {\n    costDelivery.classList.toggle('show');\n  }\n\n  root.classList.toggle('opacity');\n  document.body.classList.toggle('stop-scrolling');\n});\ndocument.body.addEventListener('click', function (e) {\n  var elem = e.target;\n\n  if (elem.classList.contains('cancel')) {\n    var button = new _modules_Buttons_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](root);\n    button.cancel(elem);\n  } else if (elem.classList.contains('save')) {\n    var _button = new _modules_Buttons_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](root);\n\n    _button.save(elem);\n\n    _button.cancel(elem);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/Buttons.js":
/*!***********************************!*\
  !*** ./src/js/modules/Buttons.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CostOfDelivery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CostOfDelivery.js */ \"./src/js/modules/CostOfDelivery.js\");\n/* harmony import */ var _LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalStorage.js */ \"./src/js/modules/LocalStorage.js\");\n/* harmony import */ var _Catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Catalog */ \"./src/js/modules/Catalog.js\");\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ship.js */ \"./src/js/modules/Ship.js\");\n/* harmony import */ var _Track_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Track.js */ \"./src/js/modules/Track.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\nvar Buttons =\n/*#__PURE__*/\nfunction () {\n  function Buttons() {\n    _classCallCheck(this, Buttons);\n\n    this.root = root;\n  }\n\n  _createClass(Buttons, [{\n    key: \"save\",\n    value: function save(elem) {\n      var nameElement = elem.parentElement.parentElement.parentElement;\n\n      if (nameElement.classList.contains('create-transport-ship')) {\n        var id = nameElement.querySelector('input[name=\"ship-id\"]').value.replace(/(<([^>]+)>)/ig, '');\n        var model = nameElement.querySelector('input[name=\"ship-model\"]').value.replace(/(<([^>]+)>)/ig, '');\n        var name = nameElement.querySelector('input[name=\"ship-name\"]').value.replace(/(<([^>]+)>)/ig, '');\n        var year = nameElement.querySelector('input[name=\"ship-year\"]').value.replace(/(<([^>]+)>)/ig, '');\n        var capacity = nameElement.querySelector('input[name=\"ship-capacity\"]').value.replace(/(<([^>]+)>)/ig, '');\n        var speed = nameElement.querySelector('input[name=\"ship-speed\"]').value.replace(/(<([^>]+)>)/ig, '');\n        var team = nameElement.querySelector('input[name=\"ship-team\"]').value.replace(/(<([^>]+)>)/ig, '');\n        if (id === '' || model === '' || name === '' || year === '' || capacity === '' || speed === '' || team === '') return;\n        var local1 = new _LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('transport');\n        var list = local1.get();\n        list.push({\n          id: id,\n          model: model,\n          name: name,\n          producedYear: year,\n          capacity: capacity,\n          averageSpeed: speed,\n          countOfTeam: team\n        });\n        local1.save(list);\n        var ship = new _Ship_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](speed);\n        capacity = ship.showCapacityInPounds(capacity);\n        speed = ship.showAvarageSpeed();\n        var catalog1 = new _Catalog__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.table-transport');\n        catalog1.add(id, model, name, year, capacity, speed, team);\n      } else if (nameElement.classList.contains('create-transport-track')) {\n        var _id = nameElement.querySelector('input[name=\"track-id\"]').value.replace(/(<([^>]+)>)/ig, '');\n\n        var _model = nameElement.querySelector('input[name=\"track-model\"]').value.replace(/(<([^>]+)>)/ig, '');\n\n        var license = nameElement.querySelector('input[name=\"track-license\"]').value.replace(/(<([^>]+)>)/ig, '');\n\n        var _year = nameElement.querySelector('input[name=\"track-year\"]').value.replace(/(<([^>]+)>)/ig, '');\n\n        var _capacity = nameElement.querySelector('input[name=\"track-capacity\"]').value.replace(/(<([^>]+)>)/ig, '');\n\n        var _speed = nameElement.querySelector('input[name=\"track-speed\"]').value.replace(/(<([^>]+)>)/ig, '');\n\n        var gas = nameElement.querySelector('input[name=\"track-gas\"]').value.replace(/(<([^>]+)>)/ig, '');\n        if (_id === '' || _model === '' || license === '' || _year === '' || _capacity === '' || _speed === '' || gas === '') return;\n        var local2 = new _LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('transport');\n\n        var _list = local2.get();\n\n        _list.push({\n          id: _id,\n          model: _model,\n          licensePlate: license,\n          producedYear: _year,\n          capacity: _capacity,\n          averageSpeed: _speed,\n          typeOfGas: gas\n        });\n\n        local2.save(_list);\n        var track = new _Track_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](_speed);\n        _capacity = track.showCapacityInPounds(_capacity);\n        _speed = track.showAvarageSpeed();\n        var catalog2 = new _Catalog__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.table-transport');\n        catalog2.add(_id, _model, license, _year, _capacity, _speed, gas);\n      } else if (nameElement.classList.contains('create-cost-delivery')) {\n        var cost = nameElement.querySelector('input[name=\"cost-model\"]').value.replace(/(<([^>]+)>)/ig, '');\n        var cargo = nameElement.querySelector('input[name=\"cost-cargo\"]').value.replace(/(<([^>]+)>)/ig, '');\n        var dist = nameElement.querySelector('input[name=\"cost-dist\"]').value.replace(/(<([^>]+)>)/ig, '');\n        if (cost === '' || cargo === '' || dist === '') return;\n        var CostDelivery = new _CostOfDelivery_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        CostDelivery.setItem(cost, cargo, dist);\n        var catalog = new _Catalog__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.table-costs');\n        catalog.add(cost, cargo, dist);\n      }\n    }\n  }, {\n    key: \"cancel\",\n    value: function cancel(elem) {\n      elem.parentElement.parentElement.parentElement.classList.toggle('show');\n      this.root.classList.toggle('opacity');\n      document.body.classList.toggle('stop-scrolling');\n    }\n  }]);\n\n  return Buttons;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Buttons);\n\n//# sourceURL=webpack:///./src/js/modules/Buttons.js?");

/***/ }),

/***/ "./src/js/modules/Catalog.js":
/*!***********************************!*\
  !*** ./src/js/modules/Catalog.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Catalog =\n/*#__PURE__*/\nfunction () {\n  function Catalog(to) {\n    _classCallCheck(this, Catalog);\n\n    this.to = to;\n  }\n\n  _createClass(Catalog, [{\n    key: \"add\",\n    value: function add() {\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      var itemCatalog = args.map(function (item) {\n        return \"<td>\".concat(item, \"</td>\");\n      });\n      var item = \"<tr>\".concat(itemCatalog.join(''), \"</tr>\");\n      document.querySelector(\"\".concat(this.to, \" tbody\")).innerHTML += item;\n    }\n  }]);\n\n  return Catalog;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Catalog);\n\n//# sourceURL=webpack:///./src/js/modules/Catalog.js?");

/***/ }),

/***/ "./src/js/modules/CostOfDelivery.js":
/*!******************************************!*\
  !*** ./src/js/modules/CostOfDelivery.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalStorage.js */ \"./src/js/modules/LocalStorage.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar CostOfDelivery =\n/*#__PURE__*/\nfunction () {\n  function CostOfDelivery() {\n    _classCallCheck(this, CostOfDelivery);\n  }\n\n  _createClass(CostOfDelivery, [{\n    key: \"setItem\",\n    value: function setItem(model, cost1, cost2) {\n      var local = new _LocalStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('cost');\n      var list = local.get();\n      list.push({\n        model: model,\n        cost1: cost1,\n        cost2: cost2\n      });\n      local.save(list);\n    }\n  }, {\n    key: \"getItem\",\n    value: function getItem() {\n      var local = new _LocalStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('cost');\n      return local.get();\n    }\n  }]);\n\n  return CostOfDelivery;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CostOfDelivery);\n\n//# sourceURL=webpack:///./src/js/modules/CostOfDelivery.js?");

/***/ }),

/***/ "./src/js/modules/LocalStorage.js":
/*!****************************************!*\
  !*** ./src/js/modules/LocalStorage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar LocalStorage =\n/*#__PURE__*/\nfunction () {\n  function LocalStorage(name) {\n    _classCallCheck(this, LocalStorage);\n\n    this.name = name;\n  }\n\n  _createClass(LocalStorage, [{\n    key: \"save\",\n    value: function save(arr) {\n      localStorage.setItem(this.name, JSON.stringify(arr));\n    }\n  }, {\n    key: \"get\",\n    value: function get() {\n      return JSON.parse(localStorage.getItem(this.name)) || [];\n    }\n  }]);\n\n  return LocalStorage;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocalStorage);\n\n//# sourceURL=webpack:///./src/js/modules/LocalStorage.js?");

/***/ }),

/***/ "./src/js/modules/Ship.js":
/*!********************************!*\
  !*** ./src/js/modules/Ship.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Transport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transport.js */ \"./src/js/modules/Transport.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Ship =\n/*#__PURE__*/\nfunction (_Transport) {\n  _inherits(Ship, _Transport);\n\n  function Ship() {\n    _classCallCheck(this, Ship);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Ship).apply(this, arguments));\n  }\n\n  _createClass(Ship, [{\n    key: \"showAvarageSpeed\",\n    value: function showAvarageSpeed() {\n      return this.speed;\n    }\n  }]);\n\n  return Ship;\n}(_Transport_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);\n\n//# sourceURL=webpack:///./src/js/modules/Ship.js?");

/***/ }),

/***/ "./src/js/modules/Track.js":
/*!*********************************!*\
  !*** ./src/js/modules/Track.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Transport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transport.js */ \"./src/js/modules/Transport.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Track =\n/*#__PURE__*/\nfunction (_Transport) {\n  _inherits(Track, _Transport);\n\n  function Track() {\n    _classCallCheck(this, Track);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Track).apply(this, arguments));\n  }\n\n  _createClass(Track, [{\n    key: \"showAvarageSpeed\",\n    value: function showAvarageSpeed() {\n      return this.speed;\n    }\n  }]);\n\n  return Track;\n}(_Transport_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Track);\n\n//# sourceURL=webpack:///./src/js/modules/Track.js?");

/***/ }),

/***/ "./src/js/modules/Transport.js":
/*!*************************************!*\
  !*** ./src/js/modules/Transport.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Transport =\n/*#__PURE__*/\nfunction () {\n  function Transport(speed) {\n    _classCallCheck(this, Transport);\n\n    this.speed = speed;\n  }\n\n  _createClass(Transport, [{\n    key: \"showAvarageSpeed\",\n    value: function showAvarageSpeed() {}\n  }, {\n    key: \"showCapacityInPounds\",\n    value: function showCapacityInPounds(kg) {\n      return kg * 2.2;\n    }\n  }]);\n\n  return Transport;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Transport);\n\n//# sourceURL=webpack:///./src/js/modules/Transport.js?");

/***/ })

/******/ });