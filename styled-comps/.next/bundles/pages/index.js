
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _styled = __webpack_require__(567);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\CongNguyen\\Desktop\\hello-nextjs\\styled-comps\\pages\\index.js?entry';

exports.default = function () {
  return _react2.default.createElement(_styled.Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'Hello Next.js with styled-components');
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\CongNguyen\\Desktop\\hello-nextjs\\styled-comps\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\CongNguyen\\Desktop\\hello-nextjs\\styled-comps\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Wrapper = exports.Title = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(562);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = __webpack_require__(568);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tcolor: red;\n\tfont-size: 20px;\n\tborder: 1px solid #eee;\n\tpadding: 10px;\n\n'], ['\n\tcolor: red;\n\tfont-size: 20px;\n\tborder: 1px solid #eee;\n\tpadding: 10px;\n\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tbackground: pink;\n\theight: 200px;\n'], ['\n\tbackground: pink;\n\theight: 200px;\n']);

// import React from 'react'


// export default class Title extends React.Component{

// 	render(){
// 		return(

// 				styled.h1`
// 					color: red;
// 					font-size: 20px;
// 				`
// 		)
// 	}
// }


var Title = _styledComponents2.default.h1(_templateObject);

var Wrapper = _styledComponents2.default.div(_templateObject2);

// export default {
//     Title,
//     Wrapper
// }

exports.Title = Title;
exports.Wrapper = Wrapper;

//em khong the export ca 2  


// khong dung dc export va module.export

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\CongNguyen\\Desktop\\hello-nextjs\\styled-comps\\comps\\styled.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\CongNguyen\\Desktop\\hello-nextjs\\styled-comps\\comps\\styled.js"); } } })();

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(559);


/***/ })

},[569]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz83NzdkMDg5Iiwid2VicGFjazovLy8uL2NvbXBzL3N0eWxlZC5qcz83NzdkMDg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7Ozs7OztrQkFBZTt5QkFBUTs7Z0JBQUQ7a0JBQUE7QUFBQTtBQUFBO0FBQXRCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xPOzs7Ozs7Ozs7QUFDUDs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBTSxRQUFRLDJCQUFPLEdBQXJCOztBQVNBLElBQU0sVUFBVSwyQkFBTyxJQUF2Qjs7QUFLQTtBQUNBO0FBQ0E7QUFHQTs7UUFDSTtRQUNBOztBQUdKOzs7QUFHQSx3QyIsImZpbGUiOiJidW5kbGVzXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RpdGxlfSBmcm9tICcuLi9jb21wcy9zdHlsZWQuanMnXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoPFRpdGxlPkhlbGxvIE5leHQuanMgd2l0aCBzdHlsZWQtY29tcG9uZW50czwvVGl0bGU+KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuLy8gXHRyZW5kZXIoKXtcclxuLy8gXHRcdHJldHVybihcclxuXHRcdFxyXG4vLyBcdFx0XHRcdHN0eWxlZC5oMWBcclxuLy8gXHRcdFx0XHRcdGNvbG9yOiByZWQ7XHJcbi8vIFx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XHJcbi8vIFx0XHRcdFx0YFxyXG4vLyBcdFx0KVxyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxyXG5cdGNvbG9yOiByZWQ7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHJcbmBcclxuXHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHRiYWNrZ3JvdW5kOiBwaW5rO1xyXG5cdGhlaWdodDogMjAwcHg7XHJcbmBcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHtcclxuLy8gICAgIFRpdGxlLFxyXG4vLyAgICAgV3JhcHBlclxyXG4vLyB9XHJcblxyXG5leHBvcnQge1xyXG4gICAgVGl0bGUsXHJcbiAgICBXcmFwcGVyXHJcbn1cclxuXHJcbi8vZW0ga2hvbmcgdGhlIGV4cG9ydCBjYSAyICBcclxuXHJcblxyXG4vLyBraG9uZyBkdW5nIGRjIGV4cG9ydCB2YSBtb2R1bGUuZXhwb3J0XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wcy9zdHlsZWQuanMiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        