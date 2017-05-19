"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initialStore = exports.reducer = exports.SUB = exports.ADD = undefined;
exports.addNumber = addNumber;
exports.subNumber = subNumber;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _redux = require("redux");

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