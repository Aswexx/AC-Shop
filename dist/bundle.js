/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ac_shop/./src/scss/main.scss?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\r\nconsole.log('JS loaded')\r\n\r\n\r\n//日夜模式\r\nconst modeSwitcher = document.querySelector('.mode-switcher');\r\nconst logo = document.querySelector('.logo')\r\nconst body = document.querySelector('body')\r\n\r\nconst header = document.querySelector('header')\r\n\r\nconst changeImage = function () {\r\n  const imgPath =\r\n    body.classList.contains('darkmode') ? './image/logo-dark@2x.png' : './image/logo@2x.png';\r\n  const modeIconPath = \r\n    body.classList.contains('darkmode') ? './image/sun-regular.svg#sun' : './image/moon-regular.svg#moon';\r\n    logo.src = imgPath\r\n  modeSwitcher.innerHTML = `<use href=${modeIconPath}></use>`\r\n  \r\n  const applyBackground = \r\n  body.classList.contains('darkmode') ? '#121212' : '#ffffff';\r\n  header.style.backgroundColor = applyBackground\r\n}\r\n\r\nmodeSwitcher.addEventListener('click', () => {\r\n  body.classList.toggle('darkmode')\r\n  changeImage()\r\n});\r\n\r\n//\r\n\r\nconst navTrigger = document.querySelector('.nav-trigger-button');\r\n\r\nconst toggleNavAndFeatures = function () {\r\n  const isNavTriggered = document.querySelector('.nav-trigger').checked;\r\n  if (isNavTriggered) {\r\n    header.style.backgroundColor = ''\r\n\r\n  } else {\r\n    const applyBackground = \r\n    body.classList.contains('darkmode') ? '#121212' : '#ffffff';\r\n    header.style.backgroundColor = applyBackground\r\n  }\r\n}\r\n\r\nnavTrigger.addEventListener('click', toggleNavAndFeatures);\r\n\r\n\n\n//# sourceURL=webpack://ac_shop/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;