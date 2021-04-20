import React,{ useReducer } from 'react'
import AppReducer from './AppReducer'
//Initial state
const initialState= {
    transactions: [
    ]
}

// Create Context
export const GlobalContext = React.createContext(initialState) 

//Actions
export const ACTIONS = {
    DELETE : 'Delete',
    ADD : 'Add'
}

//Provider Context
export const GlobalProvider = ({ children })=>{
    const [state,dispatch] = useReducer(AppReducer,initialState)

    const deleteTransaction = (id) => {
        dispatch({type:ACTIONS.DELETE,payload:id})
    }
    const addTransaction = (transaction) => {
        dispatch({type:ACTIONS.ADD,payload:transaction})
    }


    return (<GlobalContext.Provider value={{transactions: state.transactions,deleteTransaction,addTransaction }}>
        {children}
    </GlobalContext.Provider>)
}