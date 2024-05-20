// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expenseAmount} = props
  return (
    <div className="money-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          className="balance-png"
          alt="balance"
        />
        <div className="balanace-style">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balanceAmount}</p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png  "
          className="balance-png"
          alt="income"
        />
        <div className="balanace-style">
          <p>Your Income</p>
          <p data-testid="incomeAmount"> Rs {incomeAmount}</p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          className="balance-png"
          alt="expenses"
        />
        <div className="balanace-style">
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expenseAmount}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
