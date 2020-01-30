import React, { Component } from 'react'
import '../../css/Transactions.css';
import PropTypes from 'prop-types';

/**
 * class to show transaction details on "/info" page
 */
export class TransactionDetails extends Component {
   renderTransactionData() {
      return this.props.transactions.map((transaction, index) => {
         const { id, amount, date } = transaction //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{amount}$</td>
               <td>{date}</td>
            </tr>
         )
      })
   }

   renderHeader() {
      let header = Object.keys(this.props.transactions[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   render() {
      return (
         <div>
            <h2 id='title' style={{paddingBottom:"5px"}}>Transaction Summary</h2>
            <table id='customers'>
               <tbody>
               <tr>{this.renderHeader()}</tr>
                  {this.renderTransactionData()}
               </tbody>
            </table>
         </div>
      )
   }
}

// PropTypes
TransactionDetails.propTypes = {
   transactions: PropTypes.object.isRequired
 }

export default TransactionDetails
