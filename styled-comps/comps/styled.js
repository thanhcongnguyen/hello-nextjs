import styled from 'styled-components'
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


const Title = styled.h1`
	color: red;
	font-size: 20px;
	border: 1px solid #eee;
	padding: 10px;

`


const Wrapper = styled.div`
	background: pink;
	height: 200px;
`

// export default {
//     Title,
//     Wrapper
// }

export {
    Title,
    Wrapper
}

//em khong the export ca 2  


// khong dung dc export va module.export

