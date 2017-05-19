import withRedux from 'next-redux-wrapper'
import React from 'react'
import {initialStore} from '../store.js'
import Number from '../components/showNumber.js'
import SUB from '../components/sub.js'
import ADD from '../components/add.js'



class Index extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Number/>
                    <SUB/>
                    <ADD/>
                </div>
            </div>
        )
    }
}

 export default withRedux(initialStore)(Index)