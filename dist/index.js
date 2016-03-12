(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _String = __webpack_require__(1);

  var _String2 = _interopRequireDefault(_String);

  var _Number = __webpack_require__(2);

  var _Number2 = _interopRequireDefault(_Number);

  var _Object = __webpack_require__(3);

  var _Object2 = _interopRequireDefault(_Object);

  var _Common = __webpack_require__(4);

  var _Common2 = _interopRequireDefault(_Common);

  var _Filters = __webpack_require__(5);

  var _Filters2 = _interopRequireDefault(_Filters);

  var _MergeObjects = __webpack_require__(6);

  var _MergeObjects2 = _interopRequireDefault(_MergeObjects);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  module.exports = (0, _MergeObjects2.default)(_String2.default, _Number2.default, _Object2.default, _Common2.default, _Filters2.default);

/***/ },
/* 1 */
/***/ function(module, exports) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  var StringValidations = {};

  /**
   *
   * @param string
   * @param minSize
   * @returns {*|boolean}
   */
  StringValidations.isSizeSmallerThanN = function (string, minSize) {
      return string ? string.length < minSize : minSize > 0;
  };

  /**
   *
   * @param string
   * @param maxSize
   * @returns {*|boolean}
   */

  StringValidations.isSizeGreaterThanN = function (string, maxSize) {
      return string ? string.length > maxSize : maxSize < 0;
  };

  /**
   * Testing for a valid email address
   *
   */
  StringValidations.isValidEmail = function (string) {
      return string ? /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(string) : false;
  };

  StringValidations.containsOnlyLetters = function (string) {
      return string ? /^[a-zA-Z]+$/.test(string) : false;
  };

  StringValidations.containsOnlySmallCaseLetters = function (string) {
      return (/^[a-z]+$/.test(string)
      );
  };

  StringValidations.containsOnlyCapsLetters = function (string) {
      return (/^[A-Z]+$/.test(string)
      );
  };

  StringValidations.isStringWithSplChars = function (string) {};
  StringValidations.matchStringWithPattern = function (string, pattern) {
      pattern = typeof pattern == 'string' ? new RegExp(pattern) : pattern;
      return pattern instanceof RegExp ? pattern.test(string) : false;
  };

  exports.default = StringValidations;

/***/ },
/* 2 */
/***/ function(module, exports) {

  
  "use strict";

  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  var NumberValidators = {};

  NumberValidators.isPositive = function (number) {
      return parseFloat(number) > 0;
  };

  NumberValidators.isNegative = function (number) {
      return parseFloat(number) < 0;
  };

  NumberValidators.isNumber = function (number) {
      return (/^-?\d+$/.test(number)
      );
  };

  NumberValidators.isDecimalNumber = function (number) {
      return (/^-?\d+\.\d+$/.test(number)
      );
  };

  NumberValidators.hasNDecimalPlaces = function (number, n) {
      var regExp = new RegExp("^-?\\d+.\\d{0," + n + "}$");
      return regExp.test(number);
  };

  exports.default = NumberValidators;

/***/ },
/* 3 */
/***/ function(module, exports) {

  

  "use strict";

  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  var ObjectValidators = {};

  ObjectValidators.containsField = function (obj, field) {
      return obj.hasOwnProperty(field);
  };

  exports.default = ObjectValidators;

/***/ },
/* 4 */
/***/ function(module, exports) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  var ObjectValidators = {};

  /**
   *
   * @param val
   * @returns {*|boolean}
   */
  ObjectValidators.isEmpty = function (val) {

      var dataType = Object.prototype.toString.call(val);

      if (['[object Number]', '[object RegExp]', '[object Boolean]'].indexOf(dataType) != -1) {
          // Numbers and RegEx can not be empty

          return false;
      }
      if (['[object Null]', '[object Undefined]', '[object WeakMap]', '[object WeakSet]'].indexOf(dataType) != -1) {

          return true;
      }
      /**
       * Entities which  can be empty :
       * 1. Object,
       * 2. Array
       * 3. Strings
       * 4. Map
       * 5. Set
       */

      if (dataType == '[object Object]') {

          return Object.keys(val).length == 0;
      } else if (['[object Map]', '[object Set]'].indexOf(dataType) != -1) {

          return val.size == 0;
      }

      return val.length == 0;
  };

  exports.default = ObjectValidators;

/***/ },
/* 5 */
/***/ function(module, exports) {

  
  "use strict";

  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  var FilterObject = {};

  FilterObject.filterNumbers = function (string) {
      return String(string).replace(/\D+/g, '').replace(/\W+/, '').replace(/\_+/, '');
  };

  FilterObject.filterCharacters = function (string) {
      return String(string).replace(/\d+/g, '').replace(/\W+/, '').replace(/\_+/, ''); //remove numbers and special characters
  };

  exports.default = FilterObject;

/***/ },
/* 6 */
/***/ function(module, exports) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
      value: true
  });

  exports.default = function () {
      //dont move it to array functions, you dont get argument object
      var combined = Array.prototype.slice.call(arguments);
      var combinedObj = {};

      combined.forEach(function (classType) {
          Object.keys(classType).forEach(function (methodName) {
              if (classType.hasOwnProperty(methodName)) {
                  combinedObj[methodName] = classType[methodName];
              }
          });
      });
      return combinedObj;
  };

  ;

/***/ }
/******/ ])
});
;