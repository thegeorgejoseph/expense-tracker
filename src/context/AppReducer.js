import { ACTIONS }from './GlobalState'

const AppReducer = (state,action) => {

    switch(action.type){
        case ACTIONS.DELETE:
            return {...state,transactions: state.transactions.filter(transaction => transaction.id !== action.payload)}
        case ACTIONS.ADD:
            return {...state, 
            transactions: [action.payload,...state.transactions]}
        default:
            return state
    }

}

export default AppReducer