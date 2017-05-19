'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Wrapper = exports.Title = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

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