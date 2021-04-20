import {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'


export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext)
    const amount = transactions.map(transaction => transaction.amount)

    const income = amount.filter(item => item>0).reduce((tot,amt)=>(tot+amt),0).toFixed(2)
    const expense = amount.filter(item => item<0).reduce((tot,amt)=>(tot+amt),0).toFixed(2)


    return(
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money-plus">+${income}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p id="money-minus" className="money-minus">-${Math.abs(expense)}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses;