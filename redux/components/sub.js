import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { subNumber } from '../store.js'


class Sub extends React.Component{
    render(){
        const { __sub } = this.props
        return(
            <div className="sub-n">
                <button onClick={__sub}>-</button>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch)=>{
    return{
        __sub: bindActionCreators(subNumber, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Sub)