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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/
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
/******/ 		"main": 0
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
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/blocks/components/catalog-filter/__item-choice/vue-slider.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/blocks/components/catalog-filter/__item-choice/vue-slider.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-slider-component */ "./node_modules/vue-slider-component/dist/vue-slider-component.umd.min.js");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_slider_component__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueSlider: vue_slider_component__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      value: [1000, 20000],
      formatter2: function formatter2(v) {
        return "".concat(('' + v).replace(/\B(?=(\d{3})+(?!\d))/g, ' '), " \u20BD");
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/blocks/modules/main-catalog/__pagination/pagination.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/blocks/modules/main-catalog/__pagination/pagination.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuejs_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-paginate */ "./node_modules/vuejs-paginate/dist/index.js");
/* harmony import */ var vuejs_paginate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuejs_paginate__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "pagination",
  data: {},
  methods: {
    pageCallback: function pageCallback(pageNum) {
      console.log(pageNum);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/blocks/components/catalog-filter/__item-choice/vue-slider.vue?vue&type=template&id=25785df4&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/blocks/components/catalog-filter/__item-choice/vue-slider.vue?vue&type=template&id=25785df4& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "catalog-filter__slider" } },
    [
      _c("vue-slider", {
        attrs: {
          "enable-cross": false,
          min: 1000,
          max: 20000,
          interval: 100,
          "tooltip-formatter": _vm.formatter2
        },
        model: {
          value: _vm.value,
          callback: function($$v) {
            _vm.value = $$v
          },
          expression: "value"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/blocks/modules/main-catalog/__pagination/pagination.vue?vue&type=template&id=66d27b6d&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/blocks/modules/main-catalog/__pagination/pagination.vue?vue&type=template&id=66d27b6d& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "paginate",
    {
      attrs: {
        "page-count": 26,
        "page-range": 3,
        "margin-pages": 5,
        "prev-class": "pagination-prev",
        "next-class": "pagination-next",
        "container-class": "main-catalog__pagination",
        "page-class": "page-item",
        clickHandler: _vm.pageCallback
      }
    },
    [
      _c("span", { attrs: { slot: "prevContent" }, slot: "prevContent" }, [
        _vm._v("Changed previous button")
      ]),
      _vm._v(" "),
      _c("span", { attrs: { slot: "nextContent" }, slot: "nextContent" }, [
        _vm._v("Changed next button")
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/blocks/components/catalog-filter/__item-choice/catalog-filter__item-choice.js":
/*!*******************************************************************************************!*\
  !*** ./src/blocks/components/catalog-filter/__item-choice/catalog-filter__item-choice.js ***!
  \*******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-slider-component */ "./node_modules/vue-slider-component/dist/vue-slider-component.umd.min.js");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_slider_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vue_slider_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vue-slider.vue */ "./src/blocks/components/catalog-filter/__item-choice/vue-slider.vue");



new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: '#catalog-filter__slider',
  components: {
    VueSlider: window['vue-slider-component']
  },
  render: function render(h) {
    return h(_vue_slider_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }
});

/***/ }),

/***/ "./src/blocks/components/catalog-filter/__item-choice/vue-slider.vue":
/*!***************************************************************************!*\
  !*** ./src/blocks/components/catalog-filter/__item-choice/vue-slider.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_slider_vue_vue_type_template_id_25785df4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue-slider.vue?vue&type=template&id=25785df4& */ "./src/blocks/components/catalog-filter/__item-choice/vue-slider.vue?vue&type=template&id=25785df4&");
/* harmony import */ var _vue_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue-slider.vue?vue&type=script&lang=js& */ "./src/blocks/components/catalog-filter/__item-choice/vue-slider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vue_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vue_slider_vue_vue_type_template_id_25785df4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vue_slider_vue_vue_type_template_id_25785df4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/blocks/components/catalog-filter/__item-choice/vue-slider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/blocks/components/catalog-filter/__item-choice/vue-slider.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./src/blocks/components/catalog-filter/__item-choice/vue-slider.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vue-slider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/blocks/components/catalog-filter/__item-choice/vue-slider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/blocks/components/catalog-filter/__item-choice/vue-slider.vue?vue&type=template&id=25785df4&":
/*!**********************************************************************************************************!*\
  !*** ./src/blocks/components/catalog-filter/__item-choice/vue-slider.vue?vue&type=template&id=25785df4& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_slider_vue_vue_type_template_id_25785df4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vue-slider.vue?vue&type=template&id=25785df4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/blocks/components/catalog-filter/__item-choice/vue-slider.vue?vue&type=template&id=25785df4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_slider_vue_vue_type_template_id_25785df4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_slider_vue_vue_type_template_id_25785df4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/blocks/components/main-catalog/__item-swiper/main-catalog__item-swiper.js":
/*!***************************************************************************************!*\
  !*** ./src/blocks/components/main-catalog/__item-swiper/main-catalog__item-swiper.js ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  var newClassThumbs;
  var newClassTop;
  var newClassBtnNext;
  var newClassBtnPrev;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body .main-catalog__item').each(function (index, element) {
    newClassThumbs = 'gallery-thumbs-s' + index;
    newClassTop = 'gallery-top-s' + index;
    newClassBtnNext = 'next-' + newClassThumbs;
    newClassBtnPrev = 'prev-' + newClassThumbs;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.gallery-thumbs').addClass(newClassThumbs);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.gallery-top').addClass(newClassTop);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.item-swiper-button-next').addClass(newClassBtnNext);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.item-swiper-button-prev').addClass(newClassBtnPrev);
    newClassThumbs = '.' + newClassThumbs;
    newClassTop = '.' + newClassTop;
    newClassBtnNext = '.' + newClassBtnNext;
    newClassBtnPrev = '.' + newClassBtnPrev;
    var galleryThumbs = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](newClassThumbs, {
      spaceBetween: 0,
      slidesPerView: 'auto',
      direction: 'vertical',
      loop: true,
      freeMode: true,
      loopedSlides: 5,
      //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    });
    var galleryTop = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](newClassTop, {
      spaceBetween: 7,
      direction: 'vertical',
      effect: 'fade',
      loop: true,
      loopedSlides: 5,
      //looped slides should be the same
      thumbs: {
        swiper: galleryThumbs
      },
      navigation: {
        nextEl: newClassBtnNext,
        prevEl: newClassBtnPrev
      },
      breakpoints: {
        768: {
          direction: 'horizontal',
          slidesPerView: 1,
          spaceBetween: 0
        }
      }
    });
  });
}); // $('body .item__swiper--wrapper').each(function (index) {
//     var galleryThumbs = new Swiper('.gallery-thumbs', {
//         spaceBetween: 0,
//         slidesPerView: 'auto',
//         direction: 'vertical',
//         loop: true,
//         freeMode: true,
//         loopedSlides: 5, //looped slides should be the same
//         watchSlidesVisibility: true,
//         watchSlidesProgress: true,
//
//     });
//     var galleryTop = new Swiper('.gallery-top', {
//         spaceBetween: 7,
//         direction: 'vertical',
//         loop:true,
//         loopedSlides: 5, //looped slides should be the same
//         thumbs: {
//             swiper: galleryThumbs,
//         },
//         navigation: {
//             nextEl: '.gallery-thumbs .item-swiper-button-next',
//             prevEl: '.gallery-thumbs .item-swiper-button-prev',
//         },
//     });
// });

/***/ }),

/***/ "./src/blocks/components/main-catalog/__item/main-catalog__item.js":
/*!*************************************************************************!*\
  !*** ./src/blocks/components/main-catalog/__item/main-catalog__item.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 768) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body .main-catalog__items-container').on('click', '.main-catalog__item', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.main-catalog__items-container').find('.main-catalog__item').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
  });
}

/***/ }),

/***/ "./src/blocks/components/main-catalog/__items-sorting/main-catalog__items-sorting.js":
/*!*******************************************************************************************!*\
  !*** ./src/blocks/components/main-catalog/__items-sorting/main-catalog__items-sorting.js ***!
  \*******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body .items-sorting__view').on('click', '.items-sorting__view-item', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.items-sorting__view').find('.items-sorting__view-item').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body .items-sorting__main').on('click', '.items-sorting__main-item', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.items-sorting__main').find('.items-sorting__main-item').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body .items-sorting__main').on('click', '.items-sorting__main-item-rate', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.items-sorting__rate-item').toggleClass('active');
  });
}); // import Vue from 'vue';
// import sorting from './sorting.vue';
//
// new Vue({
//     el: '#myapp',
//     components: {
//         sorting
//     },
//     render: h => h(sorting),
//
// })

/***/ }),

/***/ "./src/blocks/modules/catalog-filter/catalog-filter.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/catalog-filter/catalog-filter.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

var Accordion = vue__WEBPACK_IMPORTED_MODULE_0__["default"].component("Accordion", {
  props: ["title", "expandAll"],
  data: function data() {
    return {
      expanded: false
    };
  },
  methods: {
    toggleCardState: function toggleCardState() {
      this.expanded = !this.expanded;
    },
    closeAll: function closeAll() {
      this.expanded = false;
    }
  },
  created: function created() {
    EventBus.$on("closeAll", this.closeAll);
  },
  template: "\n    <div class=\"catalog-filter__item--wrapper\">\n      <div class=\"catalog-filter__item\" :class=\"{ 'not-expanded': !this.expanded }\">\n\n        <div class=\"catalog-filter__item-header\" @click=\"toggleCardState\">\n          <div class=\"catalog-filter__item-title\">\n            {{title}}\n          </div>\n          <div class=\"catalog-filter__item-icon\">\n            <span class=\"icon\">\n              <img src=\"img/sprites/sprite.svg#ico_to-top-purple\" width=\"12\" height=\"7\" alt=\"\u0421\u0442\u0440\u0435\u043B\u043A\u0430\">\n            </span>\n          </div>\n        </div>\n\n        <div class=\"catalog-filter__item-content\">\n          <div class=\"content\">\n            <slot></slot>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  "
});
var EventBus = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]();
var App = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: "#catalog-filter",
  components: {
    Accordion: Accordion
  },
  methods: {
    expandAll: function expandAll() {
      EventBus.$emit("closeAll");
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/main-catalog/__pagination/main-catalog__pagination.js":
/*!**********************************************************************************!*\
  !*** ./src/blocks/modules/main-catalog/__pagination/main-catalog__pagination.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuejs_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-paginate */ "./node_modules/vuejs-paginate/dist/index.js");
/* harmony import */ var vuejs_paginate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuejs_paginate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pagination_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.vue */ "./src/blocks/modules/main-catalog/__pagination/pagination.vue");



vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('paginate', vuejs_paginate__WEBPACK_IMPORTED_MODULE_1___default.a), new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: '#pagination',
  render: function render(h) {
    return h(_pagination_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }
});

/***/ }),

/***/ "./src/blocks/modules/main-catalog/__pagination/pagination.vue":
/*!*********************************************************************!*\
  !*** ./src/blocks/modules/main-catalog/__pagination/pagination.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagination_vue_vue_type_template_id_66d27b6d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.vue?vue&type=template&id=66d27b6d& */ "./src/blocks/modules/main-catalog/__pagination/pagination.vue?vue&type=template&id=66d27b6d&");
/* harmony import */ var _pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.vue?vue&type=script&lang=js& */ "./src/blocks/modules/main-catalog/__pagination/pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pagination_vue_vue_type_template_id_66d27b6d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pagination_vue_vue_type_template_id_66d27b6d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/blocks/modules/main-catalog/__pagination/pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/blocks/modules/main-catalog/__pagination/pagination.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./src/blocks/modules/main-catalog/__pagination/pagination.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/blocks/modules/main-catalog/__pagination/pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/blocks/modules/main-catalog/__pagination/pagination.vue?vue&type=template&id=66d27b6d&":
/*!****************************************************************************************************!*\
  !*** ./src/blocks/modules/main-catalog/__pagination/pagination.vue?vue&type=template&id=66d27b6d& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_template_id_66d27b6d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pagination.vue?vue&type=template&id=66d27b6d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/blocks/modules/main-catalog/__pagination/pagination.vue?vue&type=template&id=66d27b6d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_template_id_66d27b6d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_template_id_66d27b6d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/blocks/modules/main-catalog/__sub-menu/main-catalog__sub-menu.js":
/*!******************************************************************************!*\
  !*** ./src/blocks/modules/main-catalog/__sub-menu/main-catalog__sub-menu.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  var windowWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();

  if (windowWidth < 769) {
    var myFunction = function myFunction() {
      if (window.pageYOffset > sticky) {
        filterOpen.addClass("sticky");
      } else {
        filterOpen.removeClass("sticky");
      }
    };

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.filter-open', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('.main-catalog__sub-menu').addClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('overflow-hidden');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('overflow-hidden');
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.filter-close', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('.main-catalog__sub-menu').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('overflow-hidden');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('overflow-hidden');
    });

    window.onscroll = function () {
      myFunction();
    };

    var filterOpen = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.filter-open');
    var sticky = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.filter-open').offset().top;
  }
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_catalog_filter_item_choice_catalog_filter_item_choice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/catalog-filter/__item-choice/catalog-filter__item-choice */ "./src/blocks/components/catalog-filter/__item-choice/catalog-filter__item-choice.js");
/* harmony import */ var _components_main_catalog_items_sorting_main_catalog_items_sorting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %components%/main-catalog/__items-sorting/main-catalog__items-sorting */ "./src/blocks/components/main-catalog/__items-sorting/main-catalog__items-sorting.js");
/* harmony import */ var _components_main_catalog_item_main_catalog_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %components%/main-catalog/__item/main-catalog__item */ "./src/blocks/components/main-catalog/__item/main-catalog__item.js");
/* harmony import */ var _components_main_catalog_item_swiper_main_catalog_item_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %components%/main-catalog/__item-swiper/main-catalog__item-swiper */ "./src/blocks/components/main-catalog/__item-swiper/main-catalog__item-swiper.js");





/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_catalog_filter_catalog_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/catalog-filter/catalog-filter */ "./src/blocks/modules/catalog-filter/catalog-filter.js");
/* harmony import */ var _modules_main_catalog_pagination_main_catalog_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/main-catalog/__pagination/main-catalog__pagination */ "./src/blocks/modules/main-catalog/__pagination/main-catalog__pagination.js");
/* harmony import */ var _modules_main_catalog_sub_menu_main_catalog_sub_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/main-catalog/__sub-menu/main-catalog__sub-menu */ "./src/blocks/modules/main-catalog/__sub-menu/main-catalog__sub-menu.js");




/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuejs_paginate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-paginate */ "./node_modules/vuejs-paginate/dist/index.js");
/* harmony import */ var vuejs_paginate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuejs_paginate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-slider-component */ "./node_modules/vue-slider-component/dist/vue-slider-component.umd.min.js");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_slider_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");







/***/ })

/******/ });
//# sourceMappingURL=main.js.map