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

	__webpack_require__(1);
	module.exports = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	"use strict";

	var menu_start = document.getElementById("menu"),
	    menu_stick = "submenu-stick",
	    main_stick = "main-stick",
	    header = document.getElementsByClassName("top-bg-container")[0],
	    main = document.getElementById("main"),
	    top_style = window.getComputedStyle(header),
	    header = parseInt(top_style.getPropertyValue('height'));

	window.addEventListener("scroll", function (e) {
	  if (window.scrollY > header) {
	    addClass(menu_start, menu_stick);
	    addClass(main, main_stick);
	  } else {
	    removeClass(menu_start, menu_stick);
	    removeClass(main, main_stick);
	  }
	});

	function addClass(el, className) {
	  if (el.classList) el.classList.add(className);else if (!hasClass(el, className)) el.className += " " + className;
	}

	function removeClass(el, className) {
	  if (el.classList) el.classList.remove(className);else if (hasClass(el, className)) {
	    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
	    el.className = el.className.replace(reg, ' ');
	  }
	}

/***/ }
/******/ ]);