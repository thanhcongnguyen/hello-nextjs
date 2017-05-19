'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next\\dist\\lib\\head.js');

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