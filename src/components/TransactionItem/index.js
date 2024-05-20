// Write your code here

import './index.css'

const TransactionItem = props => {
  const {transactionTypeOptions, historyList, onDeteleUpdate} = props
  const {optionId, displayText} = transactionTypeOptions
  const {titleInput, amountInput, id, type} = historyList

  const onDelete = () => {
    onDeteleUpdate(id)
  }

  return (
    <li className="list-container">
      <p>{titleInput}</p>
      <p>Rs {amountInput}</p>
      <p>{type}</p>
      <button onClick={onDelete} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default TransactionItem
