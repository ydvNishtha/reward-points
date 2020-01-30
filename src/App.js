import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About';
import {GetRewardSummary} from './api/TransactionHelper';
import DataService from './api/DataService';

import './css/App.css';
import RewardSummary from './components/pages/RewardSummary';
import CutomerDetails from './components/pages/CutomerDetails';
import TransactionDetails from './components/pages/TransactionDetails';
import AddTransaction from './components/pages/AddTransaction';


class App extends Component {
  /**
   * Default App state, will be filled by DataService response
   */
  state = {
    customers: [],
    transactions: [],
    rewards: []
	}
	
  /**
   * Method reposisble for set state correctly.
   */
  updateTransactionAndRefreshReward = (response, transactions) => {
    let summary = GetRewardSummary(transactions);
    let header = Object.keys(summary);
    let calculatedRewards = header.map((key, index) => {
         return summary[key];
      })
    this.setState({ customers: response.customers, transactions: transactions, rewards: calculatedRewards })
  }
  
  /**
   *  App initilizer
   */
  componentDidMount() {
    // Get bank response form mock service
    DataService().then((response) => {
      
      this.updateTransactionAndRefreshReward(response, response.transactions);
      
    })
  
	}



  /**
   * add new transactions by user input.
   */
  addTransaction = (userInputTransaction) => {
    const newTransaction = {
      id: userInputTransaction.id,
      amount: userInputTransaction.amount,
      date: userInputTransaction.date
    }
    
    const updatedTransactions = [...this.state.transactions, newTransaction];
    this.updateTransactionAndRefreshReward(this.state, updatedTransactions)
   
  }

  /**
   * Main render method with all routes infomation
   */
	render() {
		return (
			<Router>
				<div className='App'>
					<div className='container'>
						<Header />
            <Route
							exact
							path='/'
							render={(props) => (
								<React.Fragment>
									<RewardSummary rewards={this.state.rewards} />
								</React.Fragment>
							)}
						/>
            <Route
							path='/info'
							render={(props) => (
								<React.Fragment>
									<CutomerDetails customers={this.state.customers} />
									<TransactionDetails
										transactions={this.state.transactions}
									/>
								</React.Fragment>
							)}
						/>
            <Route
							path='/addRecord'
							render={(props) => (
								<React.Fragment>
									<AddTransaction addTransaction={this.addTransaction} />
								</React.Fragment>
							)}
						/>
            <Route path='/about' component={About} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;