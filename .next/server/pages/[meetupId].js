module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupDetail.module.css */ \"./components/meetups/MeetupDetail.module.css\");\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/allan.carvalho/workspace/courses/react/complete-guide/section-23_next-js/nextjs-project/components/meetups/MeetupDetail.js\";\n\n\nfunction MeetupDetail(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: props.image,\n      alt: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n      children: props.address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: props.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzP2YyYmYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlsIiwicHJvcHMiLCJjbGFzc2VzIiwiZGV0YWlsIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQ3pCLHNCQUNJO0FBQVMsYUFBUyxFQUFFQywrREFBTyxDQUFDQyxNQUE1QjtBQUFBLDRCQUNJO0FBQ0ksU0FBRyxFQUFFRixLQUFLLENBQUNHLEtBRGY7QUFFSSxTQUFHLEVBQUVILEtBQUssQ0FBQ0k7QUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFLSTtBQUFBLGdCQUFLSixLQUFLLENBQUNJO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLGVBTUk7QUFBQSxnQkFBVUosS0FBSyxDQUFDSztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkosZUFPSTtBQUFBLGdCQUFJTCxLQUFLLENBQUNNO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7O0FBRWNQLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4vTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBNZWV0dXBEZXRhaWwocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLmltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD17cHJvcHMudGl0bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuICAgICAgICAgICAgPGFkZHJlc3M+e3Byb3BzLmFkZHJlc3N9PC9hZGRyZXNzPlxuICAgICAgICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.js\n");

/***/ }),

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"detail\": \"MeetupDetail_detail__C_8IT\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3M/ZTY0MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbFwiOiBcIk1lZXR1cERldGFpbF9kZXRhaWxfX0NfOElUXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.module.css\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n/* harmony import */ var _shared_util_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/util/db */ \"./shared/util/db.js\");\n\nvar _jsxFileName = \"/Users/allan.carvalho/workspace/courses/react/complete-guide/section-23_next-js/nextjs-project/pages/[meetupId]/index.js\";\n\n\n\n\n\nfunction MeetupDetails(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: props.meetupData.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: props.meetupData.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      image: props.meetupData.image,\n      title: props.meetupData.title,\n      address: props.meetupData.address,\n      description: props.meetupData.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }, this);\n}\n\nasync function getStaticPaths() {\n  const meetups = await Object(_shared_util_db__WEBPACK_IMPORTED_MODULE_4__[\"find\"])('meetups', '_id');\n  return {\n    fallback: false,\n    paths: meetups.map(m => ({\n      params: {\n        meetupId: m._id.toString()\n      }\n    }))\n  };\n}\nasync function getStaticProps(context) {\n  const {\n    params\n  } = context; // fetch data from single meetup\n\n  const selectedMeetup = await Object(_shared_util_db__WEBPACK_IMPORTED_MODULE_4__[\"findOne\"])('meetups', {\n    _id: params.meetupId\n  });\n  return {\n    props: {\n      meetupData: {\n        image: selectedMeetup.image,\n        title: selectedMeetup.title,\n        description: selectedMeetup.description,\n        address: selectedMeetup.address\n      }\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzkyYTYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlscyIsInByb3BzIiwibWVldHVwRGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImFkZHJlc3MiLCJnZXRTdGF0aWNQYXRocyIsIm1lZXR1cHMiLCJmaW5kIiwiZmFsbGJhY2siLCJwYXRocyIsIm1hcCIsIm0iLCJwYXJhbXMiLCJtZWV0dXBJZCIsIl9pZCIsInRvU3RyaW5nIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0Iiwic2VsZWN0ZWRNZWV0dXAiLCJmaW5kT25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDMUIsc0JBQ0kscUVBQUMsOENBQUQ7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDhCQUNJO0FBQUEsa0JBQVFBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUVGLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkU7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0kscUVBQUMsd0VBQUQ7QUFDSSxXQUFLLEVBQUVILEtBQUssQ0FBQ0MsVUFBTixDQUFpQkcsS0FENUI7QUFFSSxXQUFLLEVBQUVKLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsS0FGNUI7QUFHSSxhQUFPLEVBQUVGLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkksT0FIOUI7QUFJSSxpQkFBVyxFQUFFTCxLQUFLLENBQUNDLFVBQU4sQ0FBaUJFO0FBSmxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWVIOztBQUVNLGVBQWVHLGNBQWYsR0FBZ0M7QUFFbkMsUUFBTUMsT0FBTyxHQUFHLE1BQU1DLDREQUFJLENBQUMsU0FBRCxFQUFXLEtBQVgsQ0FBMUI7QUFFQSxTQUFPO0FBQ0hDLFlBQVEsRUFBRSxLQURQO0FBRUhDLFNBQUssRUFBRUgsT0FBTyxDQUFDSSxHQUFSLENBQVlDLENBQUMsS0FBSztBQUNyQkMsWUFBTSxFQUFFO0FBQ0pDLGdCQUFRLEVBQUVGLENBQUMsQ0FBQ0csR0FBRixDQUFNQyxRQUFOO0FBRE47QUFEYSxLQUFMLENBQWI7QUFGSixHQUFQO0FBUUg7QUFFTSxlQUFlQyxjQUFmLENBQThCQyxPQUE5QixFQUF1QztBQUMxQyxRQUFNO0FBQUVMO0FBQUYsTUFBYUssT0FBbkIsQ0FEMEMsQ0FHMUM7O0FBRUEsUUFBTUMsY0FBYyxHQUFHLE1BQU1DLCtEQUFPLENBQUMsU0FBRCxFQUFZO0FBQUVMLE9BQUcsRUFBRUYsTUFBTSxDQUFDQztBQUFkLEdBQVosQ0FBcEM7QUFFQSxTQUFPO0FBQ0hkLFNBQUssRUFBRTtBQUNIQyxnQkFBVSxFQUFFO0FBQ1JHLGFBQUssRUFBRWUsY0FBYyxDQUFDZixLQURkO0FBRVJGLGFBQUssRUFBRWlCLGNBQWMsQ0FBQ2pCLEtBRmQ7QUFHUkMsbUJBQVcsRUFBRWdCLGNBQWMsQ0FBQ2hCLFdBSHBCO0FBSVJFLGVBQU8sRUFBRWMsY0FBYyxDQUFDZDtBQUpoQjtBQURUO0FBREosR0FBUDtBQVVIO0FBRWNOLDRFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgTWVldHVwRGV0YWlsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwnO1xuXG5pbXBvcnQgeyBmaW5kLCBmaW5kT25lIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWwvZGInO1xuXG5mdW5jdGlvbiBNZWV0dXBEZXRhaWxzKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPntwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxNZWV0dXBEZXRhaWxcbiAgICAgICAgICAgICAgICBpbWFnZT17cHJvcHMubWVldHVwRGF0YS5pbWFnZX1cbiAgICAgICAgICAgICAgICB0aXRsZT17cHJvcHMubWVldHVwRGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgICBhZGRyZXNzPXtwcm9wcy5tZWV0dXBEYXRhLmFkZHJlc3N9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0ZyYWdtZW50PlxuXG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuXG4gICAgY29uc3QgbWVldHVwcyA9IGF3YWl0IGZpbmQoJ21lZXR1cHMnLCdfaWQnKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICAgICAgcGF0aHM6IG1lZXR1cHMubWFwKG0gPT4gKHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIG1lZXR1cElkOiBtLl9pZC50b1N0cmluZygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHBhcmFtcyB9ID0gY29udGV4dDtcblxuICAgIC8vIGZldGNoIGRhdGEgZnJvbSBzaW5nbGUgbWVldHVwXG5cbiAgICBjb25zdCBzZWxlY3RlZE1lZXR1cCA9IGF3YWl0IGZpbmRPbmUoJ21lZXR1cHMnLCB7IF9pZDogcGFyYW1zLm1lZXR1cElkIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIG1lZXR1cERhdGE6IHtcbiAgICAgICAgICAgICAgICBpbWFnZTogc2VsZWN0ZWRNZWV0dXAuaW1hZ2UsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHNlbGVjdGVkTWVldHVwLnRpdGxlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzZWxlY3RlZE1lZXR1cC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBzZWxlY3RlZE1lZXR1cC5hZGRyZXNzLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "./shared/util/db.js":
/*!***************************!*\
  !*** ./shared/util/db.js ***!
  \***************************/
/*! exports provided: find, findOne, insertOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return find; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findOne\", function() { return findOne; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertOne\", function() { return insertOne; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst connection = async collection => {\n  const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"]('mongodb+srv://react-course:react-course-pass@cluster0.7s65w.mongodb.net/meetups?retryWrites=true&w=majority');\n  await client.connect();\n  const db = client.db();\n  const conn = db.collection(collection);\n  return {\n    conn,\n    client\n  };\n};\n\nconst find = async (collection, property) => {\n  const {\n    conn,\n    client\n  } = await connection(collection);\n  const params = property && {\n    [property]: 1\n  };\n  const result = await conn.find({}, params).toArray();\n  client.close();\n  return result;\n};\nconst findOne = async (collection, filter) => {\n  const {\n    conn,\n    client\n  } = await connection(collection);\n  const parsedFilter = Object.keys(filter).reduce((final, key) => {\n    if (key === '_id') {\n      final[key] = new mongodb__WEBPACK_IMPORTED_MODULE_0__[\"ObjectId\"](filter[key]);\n    } else {\n      final[key] = filter[key];\n    }\n\n    return final;\n  }, {});\n  const result = await conn.findOne(parsedFilter);\n  client.close();\n  return result;\n};\nconst insertOne = async (collection, data) => {\n  const {\n    conn,\n    client\n  } = await connection(collection);\n  const result = await conn.insertOne(data);\n  client.close();\n  return result;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaGFyZWQvdXRpbC9kYi5qcz8yOWZjIl0sIm5hbWVzIjpbImNvbm5lY3Rpb24iLCJjb2xsZWN0aW9uIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwiZGIiLCJjb25uIiwiZmluZCIsInByb3BlcnR5IiwicGFyYW1zIiwicmVzdWx0IiwidG9BcnJheSIsImNsb3NlIiwiZmluZE9uZSIsImZpbHRlciIsInBhcnNlZEZpbHRlciIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJmaW5hbCIsImtleSIsIk9iamVjdElkIiwiaW5zZXJ0T25lIiwiZGF0YSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLE1BQU9DLFVBQVAsSUFBc0I7QUFDckMsUUFBTUMsTUFBTSxHQUFHLElBQUlDLG1EQUFKLENBQWdCLDZHQUFoQixDQUFmO0FBRUEsUUFBTUQsTUFBTSxDQUFDRSxPQUFQLEVBQU47QUFFQSxRQUFNQyxFQUFFLEdBQUdILE1BQU0sQ0FBQ0csRUFBUCxFQUFYO0FBRUEsUUFBTUMsSUFBSSxHQUFHRCxFQUFFLENBQUNKLFVBQUgsQ0FBY0EsVUFBZCxDQUFiO0FBRUEsU0FBTztBQUFFSyxRQUFGO0FBQVFKO0FBQVIsR0FBUDtBQUNILENBVkQ7O0FBWU8sTUFBTUssSUFBSSxHQUFHLE9BQU9OLFVBQVAsRUFBbUJPLFFBQW5CLEtBQWdDO0FBQ2hELFFBQU07QUFBRUYsUUFBRjtBQUFRSjtBQUFSLE1BQW1CLE1BQU1GLFVBQVUsQ0FBQ0MsVUFBRCxDQUF6QztBQUVBLFFBQU1RLE1BQU0sR0FBR0QsUUFBUSxJQUFLO0FBQUUsS0FBQ0EsUUFBRCxHQUFZO0FBQWQsR0FBNUI7QUFFQSxRQUFNRSxNQUFNLEdBQUcsTUFBTUosSUFBSSxDQUFDQyxJQUFMLENBQVUsRUFBVixFQUFjRSxNQUFkLEVBQXNCRSxPQUF0QixFQUFyQjtBQUVBVCxRQUFNLENBQUNVLEtBQVA7QUFFQSxTQUFPRixNQUFQO0FBQ0gsQ0FWTTtBQVlBLE1BQU1HLE9BQU8sR0FBRyxPQUFPWixVQUFQLEVBQW1CYSxNQUFuQixLQUE4QjtBQUNqRCxRQUFNO0FBQUVSLFFBQUY7QUFBUUo7QUFBUixNQUFtQixNQUFNRixVQUFVLENBQUNDLFVBQUQsQ0FBekM7QUFFQSxRQUFNYyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxNQUFaLEVBQW9CSSxNQUFwQixDQUEyQixDQUFDQyxLQUFELEVBQVFDLEdBQVIsS0FBZ0I7QUFDNUQsUUFBSUEsR0FBRyxLQUFLLEtBQVosRUFBbUI7QUFDZkQsV0FBSyxDQUFDQyxHQUFELENBQUwsR0FBYSxJQUFJQyxnREFBSixDQUFhUCxNQUFNLENBQUNNLEdBQUQsQ0FBbkIsQ0FBYjtBQUNILEtBRkQsTUFFTztBQUNIRCxXQUFLLENBQUNDLEdBQUQsQ0FBTCxHQUFhTixNQUFNLENBQUNNLEdBQUQsQ0FBbkI7QUFDSDs7QUFFRCxXQUFPRCxLQUFQO0FBQ0gsR0FSb0IsRUFRbEIsRUFSa0IsQ0FBckI7QUFVQSxRQUFNVCxNQUFNLEdBQUcsTUFBTUosSUFBSSxDQUFDTyxPQUFMLENBQWFFLFlBQWIsQ0FBckI7QUFFQWIsUUFBTSxDQUFDVSxLQUFQO0FBRUEsU0FBT0YsTUFBUDtBQUNILENBbEJNO0FBb0JBLE1BQU1ZLFNBQVMsR0FBRyxPQUFPckIsVUFBUCxFQUFtQnNCLElBQW5CLEtBQTRCO0FBQ2pELFFBQU07QUFBRWpCLFFBQUY7QUFBUUo7QUFBUixNQUFtQixNQUFNRixVQUFVLENBQUNDLFVBQUQsQ0FBekM7QUFFQSxRQUFNUyxNQUFNLEdBQUcsTUFBTUosSUFBSSxDQUFDZ0IsU0FBTCxDQUFlQyxJQUFmLENBQXJCO0FBRUFyQixRQUFNLENBQUNVLEtBQVA7QUFFQSxTQUFPRixNQUFQO0FBQ0gsQ0FSTSIsImZpbGUiOiIuL3NoYXJlZC91dGlsL2RiLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYic7XG5cbmNvbnN0IGNvbm5lY3Rpb24gPSBhc3luYyAoY29sbGVjdGlvbikgPT4ge1xuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCgnbW9uZ29kYitzcnY6Ly9yZWFjdC1jb3Vyc2U6cmVhY3QtY291cnNlLXBhc3NAY2x1c3RlcjAuN3M2NXcubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKVxuXG4gICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcblxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICBjb25zdCBjb25uID0gZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uKTtcblxuICAgIHJldHVybiB7IGNvbm4sIGNsaWVudCB9O1xufVxuXG5leHBvcnQgY29uc3QgZmluZCA9IGFzeW5jIChjb2xsZWN0aW9uLCBwcm9wZXJ0eSkgPT4ge1xuICAgIGNvbnN0IHsgY29ubiwgY2xpZW50IH0gPSBhd2FpdCBjb25uZWN0aW9uKGNvbGxlY3Rpb24pO1xuXG4gICAgY29uc3QgcGFyYW1zID0gcHJvcGVydHkgJiYgKHsgW3Byb3BlcnR5XTogMSB9ICk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb25uLmZpbmQoe30sIHBhcmFtcykudG9BcnJheSgpO1xuXG4gICAgY2xpZW50LmNsb3NlKCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgY29uc3QgZmluZE9uZSA9IGFzeW5jIChjb2xsZWN0aW9uLCBmaWx0ZXIpID0+IHtcbiAgICBjb25zdCB7IGNvbm4sIGNsaWVudCB9ID0gYXdhaXQgY29ubmVjdGlvbihjb2xsZWN0aW9uKTtcblxuICAgIGNvbnN0IHBhcnNlZEZpbHRlciA9IE9iamVjdC5rZXlzKGZpbHRlcikucmVkdWNlKChmaW5hbCwga2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT09ICdfaWQnKSB7XG4gICAgICAgICAgICBmaW5hbFtrZXldID0gbmV3IE9iamVjdElkKGZpbHRlcltrZXldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpbmFsW2tleV0gPSBmaWx0ZXJba2V5XVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZpbmFsO1xuICAgIH0sIHt9KTtcbiAgICBcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb25uLmZpbmRPbmUocGFyc2VkRmlsdGVyKTtcblxuICAgIGNsaWVudC5jbG9zZSgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGNvbnN0IGluc2VydE9uZSA9IGFzeW5jIChjb2xsZWN0aW9uLCBkYXRhKSA9PiB7XG4gICAgY29uc3QgeyBjb25uLCBjbGllbnQgfSA9IGF3YWl0IGNvbm5lY3Rpb24oY29sbGVjdGlvbik7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb25uLmluc2VydE9uZShkYXRhKTtcblxuICAgIGNsaWVudC5jbG9zZSgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./shared/util/db.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });