
          window.__NEXT_REGISTER_PAGE('/about', function() {
            var comp = module.exports =
webpackJsonp([6],{

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

/***/ 565:
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

var _jsxFileName = 'C:\\Users\\CongNguyen\\Desktop\\hello-nextjs\\layout\\pages\\about.js?entry';

exports.default = function () {
	return _react2.default.createElement(_Layout2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, _react2.default.createElement('p', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, 'this is the about page'));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\CongNguyen\\Desktop\\hello-nextjs\\layout\\pages\\about.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\CongNguyen\\Desktop\\hello-nextjs\\layout\\pages\\about.js"); } } })();
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
    })(module.exports.default || module.exports, "/about")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(565);


/***/ })

},[566]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGFib3V0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcHMvTGF5b3V0LmpzPzdhMGJkYTAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWJvdXQuanM/N2EwYmRhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbi8vIGNvbnN0IExheW91dCA9IChwcm9wcykgPT4oXHJcbi8vIFx0PGRpdj5cclxuLy8gXHRcdDxMaW5rIGhyZWY9XCIvXCI+XHJcbi8vIFx0XHRcdDxhIHN0eWxlPXt7cGFkZGluZzogMTAsIGNvbG9yOiAncmVkJywgZm9udFNpemU6IDIwfX0+SG9tZTwvYT5cclxuLy8gXHRcdDwvTGluaz5cclxuLy8gXHRcdDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuLy8gXHRcdFx0PGE+QWJvdXQ8L2E+XHJcbi8vIFx0XHQ8L0xpbms+XHJcbi8vIFx0XHR7cHJvcHMuY2hpbGRyZW59XHJcbi8vIFx0PC9kaXY+XHJcbi8vIClcclxuXHJcbmNvbnN0IExheW91dCA9KHtjaGlsZHJlbiwgdGl0bGU9XCJ0aGlzIGlzIGxheW91dFwifSkgPT4oXHJcblx0PGRpdj5cclxuXHRcdDxIZWFkPlxyXG5cdFx0XHQ8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcblx0XHRcdDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XHJcblx0XHQ8L0hlYWQ+XHJcblxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxoZWFkZXI+XHJcblx0XHRcdFx0XHQ8cD50aGlzIGlzIGEgaGVhZGVyPC9wPlxyXG5cdFx0XHRcdDwvaGVhZGVyPlxyXG5cdFx0XHRcdDxuYXY+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHQ8YSBzdHlsZT17e3BhZGRpbmc6IDEwfX0+SG9tZTwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuXHRcdFx0XHRcdFx0PGE+QWJvdXQ8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9uYXY+XHRcclxuXHRcdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdFx0XHQ8L3NlY3Rpb24+XHJcblxyXG5cdFx0XHRcdDxmb290ZXI+XHJcblx0XHRcdFx0XHQ8cD50aGlzIGlzIGEgZm9vdGVyPC9wPlxyXG5cdFx0XHRcdDwvZm9vdGVyPlx0XHRcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcclxuXHQ8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcHMvTGF5b3V0LmpzIiwiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wcy9MYXlvdXQuanMnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCk9PihcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxwPnRoaXMgaXMgdGhlIGFib3V0IHBhZ2U8L3A+XHJcblx0XHQ8L0xheW91dD5cclxuKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2Fib3V0LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBSEE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTs7QUFJQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        