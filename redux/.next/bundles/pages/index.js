
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

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _nextReduxWrapper = __webpack_require__(603);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _store = __webpack_require__(602);

var _showNumber = __webpack_require__(561);

var _showNumber2 = _interopRequireDefault(_showNumber);

var _sub = __webpack_require__(562);

var _sub2 = _interopRequireDefault(_sub);

var _add = __webpack_require__(563);

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\CongNguyen\\Desktop\\redux\\pages\\index.js?entry';


var Index = function (_React$Component) {
    (0, _inherits3.default)(Index, _React$Component);

    function Index() {
        (0, _classCallCheck3.default)(this, Index);

        return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
    }

    (0, _createClass3.default)(Index, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement(_showNumber2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }), _react2.default.createElement(_sub2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }), _react2.default.createElement(_add2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            })));
        }
    }]);

    return Index;
}(_react2.default.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initialStore)(Index);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\CongNguyen\\Desktop\\redux\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\CongNguyen\\Desktop\\redux\\pages\\index.js"); } } })();
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

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(559);


/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(592);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\CongNguyen\\Desktop\\redux\\components\\showNumber.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\CongNguyen\\Desktop\\redux\\components\\showNumber.js"); } } })();

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(598);

var _reactRedux = __webpack_require__(592);

var _store = __webpack_require__(602);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\CongNguyen\\Desktop\\redux\\components\\sub.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\CongNguyen\\Desktop\\redux\\components\\sub.js"); } } })();

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(598);

var _reactRedux = __webpack_require__(592);

var _store = __webpack_require__(602);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\CongNguyen\\Desktop\\redux\\components\\add.js';


// const ADD = ()=>(
//     <div className="add-n">
//         <button>+</button>
//     </div>
// )


var Add = function (_React$Component) {
    (0, _inherits3.default)(Add, _React$Component);

    function Add() {
        (0, _classCallCheck3.default)(this, Add);

        return (0, _possibleConstructorReturn3.default)(this, (Add.__proto__ || (0, _getPrototypeOf2.default)(Add)).apply(this, arguments));
    }

    (0, _createClass3.default)(Add, [{
        key: 'render',
        value: function render() {
            var __add = this.props.__add;

            return _react2.default.createElement('div', { className: 'add-n', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement('button', { onClick: __add, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, '+'));
        }
    }]);

    return Add;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        __add: (0, _redux.bindActionCreators)(_store.addNumber, dispatch)
    };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Add);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\CongNguyen\\Desktop\\redux\\components\\add.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\CongNguyen\\Desktop\\redux\\components\\add.js"); } } })();

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initialStore = exports.reducer = exports.SUB = exports.ADD = undefined;
exports.addNumber = addNumber;
exports.subNumber = subNumber;

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

var _redux = __webpack_require__(598);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    number: 0
};

//action types

var ADD = exports.ADD = "ADD";
var SUB = exports.SUB = "SUB";

//actions

function addNumber() {
    console.log('ban da click vao addnumber');
    return {
        type: ADD
    };
}

function subNumber() {
    console.log('ban da click vao subnumber');
    return {
        type: SUB
    };
}

//reducers

var reducer = exports.reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case ADD:
            console.log('ban da vao dc add reducer');
            return (0, _extends3.default)({}, state, {
                number: state.number + 1
            });

        case SUB:
            return (0, _extends3.default)({}, state, {
                number: state.number - 1
            });

        default:
            return state;

    }
};

//store
var initialStore = exports.initialStore = function initialStore(initialState) {
    return (0, _redux.createStore)(reducer, initialState);
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\CongNguyen\\Desktop\\redux\\store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\CongNguyen\\Desktop\\redux\\store.js"); } } })();

/***/ })

},[560]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NzZjMWY5NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Nob3dOdW1iZXIuanM/NzZjMWY5NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N1Yi5qcz83NmMxZjk0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRkLmpzPzc2YzFmOTQiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanM/NzZjMWY5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2luaXRpYWxTdG9yZX0gZnJvbSAnLi4vc3RvcmUuanMnXHJcbmltcG9ydCBOdW1iZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaG93TnVtYmVyLmpzJ1xyXG5pbXBvcnQgU1VCIGZyb20gJy4uL2NvbXBvbmVudHMvc3ViLmpzJ1xyXG5pbXBvcnQgQUREIGZyb20gJy4uL2NvbXBvbmVudHMvYWRkLmpzJ1xyXG5cclxuXHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE51bWJlci8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNVQi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFERC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRpYWxTdG9yZSkoSW5kZXgpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIE51bWJlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtfX251bWJlciB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LW5cIj5cclxuICAgICAgICAgICAgICAgIDxwPnsgX19udW1iZXIubnVtYmVyIH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICBfX251bWJlcjogc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShOdW1iZXIpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zaG93TnVtYmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzdWJOdW1iZXIgfSBmcm9tICcuLi9zdG9yZS5qcydcclxuXHJcblxyXG5jbGFzcyBTdWIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7IF9fc3ViIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1uXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e19fc3VifT4tPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICBfX3N1YjogYmluZEFjdGlvbkNyZWF0b3JzKHN1Yk51bWJlciwgZGlzcGF0Y2gpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShTdWIpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zdWIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGFkZE51bWJlcn0gZnJvbSAnLi4vc3RvcmUuanMnXHJcblxyXG4vLyBjb25zdCBBREQgPSAoKT0+KFxyXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtblwiPlxyXG4vLyAgICAgICAgIDxidXR0b24+KzwvYnV0dG9uPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vIClcclxuXHJcblxyXG5jbGFzcyBBZGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7X19hZGQgfSA9dGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtblwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtfX2FkZH0+KzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICBfX2FkZDogYmluZEFjdGlvbkNyZWF0b3JzKGFkZE51bWJlciwgZGlzcGF0Y2gpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShBZGQpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9hZGQuanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xyXG5cclxuXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBudW1iZXI6MFxyXG59XHJcblxyXG4vL2FjdGlvbiB0eXBlc1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERCA9IFwiQUREXCJcclxuZXhwb3J0IGNvbnN0IFNVQiA9IFwiU1VCXCJcclxuXHJcbi8vYWN0aW9uc1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE51bWJlcigpe1xyXG4gICAgY29uc29sZS5sb2coJ2JhbiBkYSBjbGljayB2YW8gYWRkbnVtYmVyJylcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlIDogQUREXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ViTnVtYmVyKCl7XHJcbiAgICBjb25zb2xlLmxvZygnYmFuIGRhIGNsaWNrIHZhbyBzdWJudW1iZXInKVxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IFNVQlxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vcmVkdWNlcnNcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlPSBpbml0aWFsU3RhdGUsIGFjdGlvbik9PntcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBREQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiYW4gZGEgdmFvIGRjIGFkZCByZWR1Y2VyJylcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBudW1iZXI6IHN0YXRlLm51bWJlciArIDFcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIFNVQjpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBudW1iZXI6IHN0YXRlLm51bWJlciAtIDFcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy9zdG9yZVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0b3JlID0gKGluaXRpYWxTdGF0ZSk9PntcclxuICAgIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcbn1cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZS5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUdBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFJQTtBQUpBO0FBQUE7Ozs7O0FBUEE7QUFDQTtBQWFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBSUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFMQTtBQUNBO0FBV0E7O0FBSUE7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUVBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTs7Ozs7QUFSQTtBQUNBO0FBV0E7O0FBRUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBOzs7OztBQVJBO0FBQ0E7QUFZQTs7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQVFBO0FBQ0E7Ozs7O0FBeEJBO0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBOztBQUlBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFDQTs7QUFJQTtBQUZBOzs7QUFRQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7O0FBcEJBO0FBQ0E7QUF1QkE7QUFBQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        