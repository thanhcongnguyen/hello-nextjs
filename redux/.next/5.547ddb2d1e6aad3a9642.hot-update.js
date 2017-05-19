webpackHotUpdate(5,{

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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41NDdkZGIyZDFlNmFhZDNhOTY0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3RvcmUuanM/YzE4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xyXG5cclxuXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBudW1iZXI6MFxyXG59XHJcblxyXG4vL2FjdGlvbiB0eXBlc1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERCA9IFwiQUREXCJcclxuZXhwb3J0IGNvbnN0IFNVQiA9IFwiU1VCXCJcclxuXHJcbi8vYWN0aW9uc1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE51bWJlcigpe1xyXG4gICAgY29uc29sZS5sb2coJ2JhbiBkYSBjbGljayB2YW8gYWRkbnVtYmVyJylcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlIDogQUREXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ViTnVtYmVyKCl7XHJcbiAgICBjb25zb2xlLmxvZygnYmFuIGRhIGNsaWNrIHZhbyBzdWJudW1iZXInKVxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IFNVQlxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vcmVkdWNlcnNcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlPSBpbml0aWFsU3RhdGUsIGFjdGlvbik9PntcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBREQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiYW4gZGEgdmFvIGRjIGFkZCByZWR1Y2VyJylcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBudW1iZXI6IHN0YXRlLm51bWJlciArIDFcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIFNVQjpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBudW1iZXI6IHN0YXRlLm51bWJlciAtIDFcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy9zdG9yZVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0b3JlID0gKGluaXRpYWxTdGF0ZSk9PntcclxuICAgIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcbn1cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBZUE7QUFRQTtBQUNBOzs7OztBQXhCQTtBQUNBOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTs7QUFJQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBQ0E7O0FBSUE7QUFGQTs7O0FBUUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFHQTtBQUNBOztBQXBCQTtBQUNBO0FBdUJBO0FBQUE7QUFDQTtBQURBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=