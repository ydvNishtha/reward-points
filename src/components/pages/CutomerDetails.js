import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../../css/Data.css';

/**
 * class to show cutomer details on "/info" page
 */
export class CutomerDetails extends Component {
   renderRewardData() {
      return this.props.customers.map((customer, index) => {
         const { id, name, age, email } = customer //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{age}</td>
               <td>{email}</td>
            </tr>
         )
      })
   }

   renderHeader() {
      let header = Object.keys(this.props.customers[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   render() {
      return (
         <div>
            <h2 id='title' style={{paddingBottom:"5px"}}>Customer Info</h2>
            <table id='customers'>
               <tbody>
               <tr>{this.renderHeader()}</tr>
                  {this.renderRewardData()}
               </tbody>
            </table>
         </div>
      )
   }
}

// PropTypes
CutomerDetails.propTypes = {
   customers: PropTypes.object.isRequired
 }

export default CutomerDetails
