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

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\CongNguyen\\Desktop\\redux\\components\\showNumber.js';


var Number = function (_React$Component) {
    (0, _inherits3.default)(Number, _React$Component);

    function Number() {
        (0, _classCallCheck3.default)(this, Number);

        return (0, _possibleConstructorReturn3.default)(this, (Number.__proto__ || (0, _getPrototypeOf2.default)(Number)).apply(this, arguments));
    }

    (0, _createClass3.default)(Number, [{
        key: 'render',
        value: function render() {
            var __number = this.props.__number;

            return _react2.default.createElement('div', { className: 'show-n', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, __number.number));
        }
    }]);

    return Number;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        __number: state
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Number);