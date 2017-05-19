import React from 'react'
import { connect } from 'react-redux'




class Number extends React.Component{
    render(){
        const {__number } = this.props
        return(
            <div className="show-n">
                <p>{ __number.number }</p>
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        __number: state
    }
}


export default connect(mapStateToProps)(Number)