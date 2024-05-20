import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    historyList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onClickOption = event => {
    this.setState({optionId: event.target.value})
  }

  addTransction = event => {
    event.preventDefault()
    const {titleInput, amountInput, historyList, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )
    const {displayText} = typeOption

    const newHistoryList = {
      id: uuidv4(),
      titleInput:titleInput,
      amountInput: parseInt(amountInput),
      type: displayText,
    }
    this.setState(previous => ({
      historyList: [...previous.historyList, newHistoryList],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onDeteleUpdate = id => {
    const {historyList} = this.state
    const updateTranscationList = historyList.filter(each => each.id !== id)
    this.setState({historyList: updateTranscationList})
  }

  getBalance = () => {
    const {historyList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expenseAmount = 0

    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += each.amountInput
      } else {
        expenseAmount += each.amountInput
      }
    })
    balanceAmount = incomeAmount - expenseAmount
    return balanceAmount
  }

  getIncome = () => {
    const {historyList} = this.state
    let incomeAmount = 0
    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += each.amountInput
      }
    })
    return incomeAmount
  }

  getExpense = () => {
    const {historyList} = this.state
    let expenseAmount = 0
    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expenseAmount += each.amountInput
      }
    })
    return expenseAmount
  }

  render() {
    const {titleInput, amountInput, historyList, optionId} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expenseAmount = this.getExpense()
    return (
      <div className="app-container">
        <div className="second-container-MoneyManager">
          <h1 className="heading-style">Hi, Richard</h1>
          <p className="para-style">
            Welcome back to your{' '}
            <span className="span-style">Money Manager</span>
          </p>
        </div>

        <div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expenseAmount={expenseAmount}
          />
        </div>
        <div className="form-history-container">
          <form className="form-container" onSubmit={this.addTransction}>
            <h1>Add Transaction</h1>
            <label htmlFor="html" className="margin-style">
              TITLE
            </label>
            <input
              type="text"
              id="html"
              value={titleInput}
              placeholder="TITLE"
              onChange={this.onChangeTitle}
              className="margin-style input-width"
            />
            <label htmlFor="html" className="margin-style">
              AMOUNT
            </label>
            <input
              type="text"
              id="html"
              value={amountInput}
              placeholder="AMOUNT"
              className="margin-style input-width"
              onChange={this.onChangeAmount}
            />
            <label htmlFor="html" className="margin-style">
              TYPE
            </label>
            <select
              id="html"
              className=""
              onChange={this.onClickOption}
              value={optionId}
            >
              {transactionTypeOptions.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>

            <button className="button-add-style" type="submit">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1>History</h1>
            <ul className="unorder-container">
              <li className="Title-Amount-type-container">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </li>
              {historyList.map(each => (
                <TransactionItem
                  transactionTypeOptions={transactionTypeOptions}
                  historyList={each}
                  key={each.id}
                  onDeteleUpdate={this.onDeteleUpdate}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
