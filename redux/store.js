import { createStore } from 'redux'



const initialState = {
    number:0
}

//action types

export const ADD = "ADD"
export const SUB = "SUB"

//actions

export function addNumber(){
    console.log('ban da click vao addnumber')
    return{
        type : ADD
    }
}


export function subNumber(){
    console.log('ban da click vao subnumber')
    return{
        type: SUB
    }
}



//reducers

export const reducer = (state= initialState, action)=>{
    switch(action.type){
        case ADD:
            console.log('ban da vao dc add reducer')
            return{
                ...state,
                number: state.number + 1
            }

        case SUB:
            return{
                ...state,
                number: state.number - 1
            }

        default:
            return state

    }
}



//store
export const initialStore = (initialState)=>{
    return createStore(reducer, initialState)
}


