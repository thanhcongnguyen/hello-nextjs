
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

var _Layout = __webpack_require__(563);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\CongNguyen\\Desktop\\hello-nextjs\\layout\\pages\\index.js?entry';

exports.default = function () {
	return _react2.default.createElement(_Layout2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 4
		}
	}, _react2.default.createElement('p', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, 'hello next.js'));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\CongNguyen\\Desktop\\hello-nextjs\\layout\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\CongNguyen\\Desktop\\hello-nextjs\\layout\\pages\\index.js"); } } })();
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

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(562);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\CongNguyen\\Desktop\\hello-nextjs\\layout\\comps\\Layout.js';


// const Layout = (props) =>(
// 	<div>
// 		<Link href="/">
// 			<a style={{padding: 10, color: 'red', fontSize: 20}}>Home</a>
// 		</Link>
// 		<Link href="/about">
// 			<a>About</a>
// 		</Link>
// 		{props.children}
// 	</div>
// )

var Layout = function Layout(_ref) {
	var children = _ref.children,
	    _ref$title = _ref.title,
	    title = _ref$title === undefined ? "this is layout" : _ref$title;
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}, _react2.default.createElement(_head2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}, _react2.default.createElement('title', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}, title), _react2.default.createElement('meta', { charset: 'utf-8', __source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	})), _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}, _react2.default.createElement('header', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}, _react2.default.createElement('p', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}, 'this is a header')), _react2.default.createElement('nav', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}, _react2.default.createElement(_link2.default, { href: '/', __source: {
			fileName: _jsxFileName,
			lineNumber: 28
		}
	}, _react2.default.createElement('a', { style: { padding: 10 }, __source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}, 'Home')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
			fileName: _jsxFileName,
			lineNumber: 31
		}
	}, _react2.default.createElement('a', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	}, 'About'))), _react2.default.createElement('section', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}, children), _react2.default.createElement('footer', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	}, _react2.default.createElement('p', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 40
		}
	}, 'this is a footer'))));
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\CongNguyen\\Desktop\\hello-nextjs\\layout\\comps\\Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\CongNguyen\\Desktop\\hello-nextjs\\layout\\comps\\Layout.js"); } } })();

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(559);


/***/ })

},[564]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MjIyM2VmMCIsIndlYnBhY2s6Ly8vLi9jb21wcy9MYXlvdXQuanM/MjIyM2VmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL0xheW91dC5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpPT4oXHJcblx0PExheW91dD5cclxuXHRcdDxwPmhlbGxvIG5leHQuanM8L3A+XHJcblx0PC9MYXlvdXQ+XHJcbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuLy8gY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PihcclxuLy8gXHQ8ZGl2PlxyXG4vLyBcdFx0PExpbmsgaHJlZj1cIi9cIj5cclxuLy8gXHRcdFx0PGEgc3R5bGU9e3twYWRkaW5nOiAxMCwgY29sb3I6ICdyZWQnLCBmb250U2l6ZTogMjB9fT5Ib21lPC9hPlxyXG4vLyBcdFx0PC9MaW5rPlxyXG4vLyBcdFx0PExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4vLyBcdFx0XHQ8YT5BYm91dDwvYT5cclxuLy8gXHRcdDwvTGluaz5cclxuLy8gXHRcdHtwcm9wcy5jaGlsZHJlbn1cclxuLy8gXHQ8L2Rpdj5cclxuLy8gKVxyXG5cclxuY29uc3QgTGF5b3V0ID0oe2NoaWxkcmVuLCB0aXRsZT1cInRoaXMgaXMgbGF5b3V0XCJ9KSA9PihcclxuXHQ8ZGl2PlxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuXHRcdFx0PG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cclxuXHRcdDwvSGVhZD5cclxuXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGhlYWRlcj5cclxuXHRcdFx0XHRcdDxwPnRoaXMgaXMgYSBoZWFkZXI8L3A+XHJcblx0XHRcdFx0PC9oZWFkZXI+XHJcblx0XHRcdFx0PG5hdj5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XHJcblx0XHRcdFx0XHRcdDxhIHN0eWxlPXt7cGFkZGluZzogMTB9fT5Ib21lPC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG5cdFx0XHRcdFx0XHQ8YT5BYm91dDwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8L25hdj5cdFxyXG5cdFx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0XHRcdDwvc2VjdGlvbj5cclxuXHJcblx0XHRcdFx0PGZvb3Rlcj5cclxuXHRcdFx0XHRcdDxwPnRoaXMgaXMgYSBmb290ZXI8L3A+XHJcblx0XHRcdFx0PC9mb290ZXI+XHRcdFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFxyXG5cdDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wcy9MYXlvdXQuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFIQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBOztBQUlBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        