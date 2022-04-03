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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\r\nconsole.log('JS loaded')\r\n\r\n\r\n//日夜模式\r\n// 依照模式替換logo及SVG並改變整頁底色\r\nconst modeSwitcher = document.querySelector('.mode-switcher');\r\nconst logo = document.querySelectorAll('.logo')\r\nconst body = document.querySelector('body')\r\nconst header = document.querySelector('header')\r\n\r\nconst changeImage = function () {\r\n  const imgPath =\r\n    body.classList.contains('darkmode') ? './image/logo-dark@2x.png' : './image/logo@2x.png';\r\n  const modeIconPath = \r\n    body.classList.contains('darkmode') ? './image/sun-regular.svg#sun' : './image/moon-regular.svg#moon';\r\n  const applyBackground = \r\n    body.classList.contains('darkmode') ? '#121212' : '#ffffff';\r\n    \r\n  logo.forEach(e => e.src = imgPath)\r\n  modeSwitcher.innerHTML = `<use href=${modeIconPath}></use>`\r\n  header.style.backgroundColor = applyBackground;\r\n}\r\n\r\nmodeSwitcher.addEventListener('click', () => {\r\n  body.classList.toggle('darkmode')\r\n  changeImage()\r\n});\r\n\r\n// 使 header中的導覽列展開時與深色模式一致\r\n// 以及導覽與功能區是否顯示\r\n\r\nconst navTrigger = document.querySelector('.nav-trigger-button');\r\nconst nav = document.querySelector('.nav')\r\nconst features = document.querySelector('.features')\r\nconst navCheckbox = document.querySelector('.nav-trigger')\r\n\r\n\r\nconst toggleNavAndFeatures = function () {\r\n  const isNavTriggered = navCheckbox.checked;\r\n  if (isNavTriggered) {\r\n    header.style.backgroundColor = ''\r\n    header.classList.remove('extend')\r\n    nav.classList.add('hidden')\r\n    features.classList.add('hidden')\r\n\r\n  } else {\r\n    const applyBackground = \r\n    body.classList.contains('darkmode') ? '#121212' : '#ffffff';\r\n    header.style.backgroundColor = applyBackground\r\n\r\n    header.classList.add('extend')\r\n    nav.classList.remove('hidden')\r\n    features.classList.remove('hidden')\r\n  }\r\n}\r\n\r\n    // 確保viewport從 小 > 大 > 又回到小時，回復原本可點、可展開導覽的狀態\r\nconst mediaQueryList = window.matchMedia(\"screen and (min-width: 375px)\")\r\nconst showNav = function () {\r\n  if (mediaQueryList.matches) {\r\n    header.classList.remove('extend')\r\n    nav.classList.remove('hidden')\r\n    features.classList.remove('hidden')\r\n  } else {\r\n    header.classList.remove('extend')\r\n    nav.classList.add('hidden')\r\n    features.classList.add('hidden')\r\n    navCheckbox.checked = false\r\n  }\r\n}\r\nmediaQueryList.addEventListener(\"change\",showNav)\r\nnavTrigger.addEventListener('click', toggleNavAndFeatures);\r\n\r\n///////////////////////\r\n/////////// 表單顯示\r\n\r\nconst prevButton = document.querySelector('.form__control--prev');\r\nconst nextButton = document.querySelector('.form__control--next');\r\nconst formAddress = document.querySelector('.form__address')\r\nconst formDelivery = document.querySelector('.form__delivery')\r\nconst formPayment = document.querySelector('.form__payment')\r\nconst form = document.querySelector('.form')\r\n\r\n          ////////// 當前階段的顯示\r\nconst stepperShapes = Array.from(document.querySelectorAll('.stepper>div'))\r\nconst stepperText = Array.from(document.querySelectorAll('.stepper>span'));\r\n\r\nfunction showStep(stepNum=1) {\r\n  stepperShapes.forEach(e => {\r\n    if (stepperShapes.indexOf(e) < stepNum*2) {\r\n      e.classList.add('darken')\r\n    } else {\r\n      e.classList.remove('darken')\r\n    }\r\n  })\r\n\r\n  stepperText.forEach(e => {\r\n    if (stepperText.indexOf(e) < stepNum) {\r\n        e.classList.add('darken')\r\n    } else {\r\n      e.classList.remove('darken')\r\n    }\r\n  })\r\n}\r\nshowStep()\r\n\r\n        /////////// 依前或後一步切換表單內容\r\n\r\nlet currentStep = 'first'\r\n\r\nconst stepFowrard = function (event) {\r\n  event.preventDefault();\r\n  switch (currentStep) {\r\n    case 'first':\r\n      formAddress.classList.add('hidden')\r\n      formDelivery.classList.remove('hidden')\r\n      prevButton.classList.remove('hidden')\r\n      currentStep = 'second'\r\n      showStep(2)\r\n      break;\r\n    case 'second':\r\n      formDelivery.classList.add('hidden')\r\n      formPayment.classList.remove('hidden')\r\n      this.textContent = '確認下單'\r\n      currentStep = 'third'\r\n      showStep(3)\r\n      break;\r\n    // case 'third':\r\n    //   formPayment.classList.add('hidden')\r\n    //   formAddress.classList.remove('hidden')\r\n    //   // form.submit()\r\n    //   this.innerHTML = '下一步<span>&rarr;</span>'\r\n  }\r\n}\r\n\r\nconst stepBack = function (event) {\r\n    event.preventDefault();\r\n    switch (currentStep) {\r\n    case 'second':\r\n      formDelivery.classList.add('hidden')\r\n      formAddress.classList.remove('hidden')\r\n      this.classList.add('hidden')\r\n        currentStep = 'first'\r\n        showStep(1)\r\n      break;\r\n    case 'third':\r\n      formPayment.classList.add('hidden')\r\n      formDelivery.classList.remove('hidden')\r\n      currentStep = 'second'\r\n      this.nextElementSibling.innerHTML = '下一步<span>&rarr;</span>'\r\n      showStep(2)\r\n  }\r\n}\r\n\r\nnextButton.addEventListener('click', stepFowrard);\r\nprevButton.addEventListener('click', stepBack);\r\n\r\n\r\n/////////////// 總金額計算\r\nconst products = [{\r\n    id:'1',\r\n    name: '破壞補丁修身牛仔褲',\r\n    price: 1299\r\n  }, {\r\n    id:'2',\r\n    name: '刷色直筒牛仔褲',\r\n    price: 3999\r\n  }]\r\n\r\nconst shopBag = document.querySelector('.shop-bag');\r\nconst deliveryFee = document.querySelector('.shop-bag__delivery-fee')\r\nconst total = document.querySelector('.shop-bag__total')\r\n\r\nconst delivery = document.querySelector('.form__delivery')\r\nconst deliveryOption = document.querySelectorAll('input[type=\"radio\"]')\r\n\r\nconst countPrice = function ({target}) {\r\n  const isClickOnBtn = target.classList.contains('counter-btn')\r\n  if (!isClickOnBtn) return\r\n\r\n  if (isClickOnBtn) {\r\n    const changeNum = target.classList.contains('minus') ? -1 : 1\r\n    const quantityTag = target.parentElement.children[1]\r\n    let currentQty = Number(quantityTag.textContent)\r\n    const priceTag = target.parentElement.nextElementSibling\r\n    const clickedItem = target.parentElement.parentElement.dataset.id\r\n    const price = products.find(e => e.id === clickedItem).price\r\n    \r\n    if (!currentQty && changeNum === -1) return\r\n    quantityTag.innerHTML = `<span>${currentQty += changeNum}<span>`\r\n    priceTag.innerHTML = `<div>$${Number(currentQty * price).toLocaleString()}</div>`\r\n    addToTotal()\r\n  }\r\n}\r\n\r\nconst addDeliveryFee = function () {\r\n  deliveryOption.forEach(e => {\r\n    if (e.checked) {\r\n      deliveryFee.textContent = e.parentElement.lastElementChild.textContent\r\n      addToTotal()\r\n      return\r\n    }\r\n  })\r\n}\r\n\r\nconst priceTags = document.querySelectorAll('.shop-bag__item-price')\r\n\r\nconst addToTotal = function () {\r\n  let subtotal = 0\r\n  let deliveryFeeNum = Number(deliveryFee.textContent.slice(1).replace(',', \"\"))\r\n\r\n  if (isNaN(deliveryFeeNum)) {deliveryFeeNum = 0}\r\n  \r\n  priceTags.forEach(e => {\r\n    const priceNum = Number(e.textContent.slice(1).replace(',', \"\"))\r\n    subtotal += priceNum\r\n  })\r\n  \r\n  \r\n  total.innerHTML = `<span class=\"shop-bag__total\">$${(subtotal+deliveryFeeNum).toLocaleString()}</span>`\r\n}\r\n\r\nshopBag.addEventListener('click', countPrice);\r\ndelivery.addEventListener('click', addDeliveryFee);\r\n\r\n/////////////\n\n//# sourceURL=webpack://ac_shop/./src/main.js?");

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