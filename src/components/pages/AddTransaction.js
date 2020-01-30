import React, { Component } from 'react';

import PropTypes from 'prop-types';

class AddTransaction extends Component {
  /**
   * Default state of AddTransaction
   */
  state = {
    id:"",
    amount:0,
    date:""
  }
  /**
   * Handle user input
   */
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTransaction(this.state); // back fill
    this.setState({ id: '', amount: 0, date:"" });
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  
  render() {
    return (
        <div>
            <form onSubmit={this.onSubmit}>
            CustomerId:
            <select name="id" onChange={this.onChange}>
              <option value="101">101</option>
              <option value="102">102</option>
              <option value="103">103</option>
              <option value="104">104</option>
          </select>
                <input type='text' 
                name="amount"
                style={{flex:'10', padding:'5px'}} 
                placeholder="Add transaction amount"
                value={this.state.amount}
                onChange={this.onChange}
                />
                <input type='text' 
                name="date"
                style={{flex:'10', padding:'5px'}} 
                placeholder="Add transaction date in YYYY-MM-DD format"
                value={this.state.date}
                onChange={this.onChange}
                />
                <input type="submit" 
                value="Submit" 
                className="btn"
                />
            </form>
        </div>
    )
}
}

// PropTypes
AddTransaction.propTypes = {
  addTransaction: PropTypes.func.isRequired
}

export default AddTransaction;