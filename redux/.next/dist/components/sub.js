'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _store = require('../store.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\CongNguyen\\Desktop\\redux\\components\\sub.js';


var Sub = function (_React$Component) {
    (0, _inherits3.default)(Sub, _React$Component);

    function Sub() {
        (0, _classCallCheck3.default)(this, Sub);

        return (0, _possibleConstructorReturn3.default)(this, (Sub.__proto__ || (0, _getPrototypeOf2.default)(Sub)).apply(this, arguments));
    }

    (0, _createClass3.default)(Sub, [{
        key: 'render',
        value: function render() {
            var __sub = this.props.__sub;

            return _react2.default.createElement('div', { className: 'sub-n', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement('button', { onClick: __sub, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, '-'));
        }
    }]);

    return Sub;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        __sub: (0, _redux.bindActionCreators)(_store.subNumber, dispatch)
    };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Sub);