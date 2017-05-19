import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addNumber} from '../store.js'

// const ADD = ()=>(
//     <div className="add-n">
//         <button>+</button>
//     </div>
// )


class Add extends React.Component{
    render(){
        const {__add } =this.props
        return(
            <div className="add-n">
                <button onClick={__add}>+</button>
            </div>
            )
    }
}



const mapDispatchToProps = (dispatch)=>{
    return{
        __add: bindActionCreators(addNumber, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Add)