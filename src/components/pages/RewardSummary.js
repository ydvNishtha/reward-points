import React, { Component } from 'react'
import moment from 'moment'

import '../../css/Data.css';
class RewardSummary extends Component {
    
    renderRewardData() {
        return this.props.rewards.map((reward, index) => {
           const { id, currentMonth, lastMonth, lastToLastMonth, total } = reward //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{currentMonth}</td>
                 <td>{lastMonth}</td>
                 <td>{lastToLastMonth}</td>
                 <td>{total}</td>
              </tr>
           )
        })
     }

     renderHeader() {

        let header = ["Id", 
                    moment().subtract(0, "month").startOf("month").format('MMMM'),
                    moment().subtract(1, "month").startOf("month").format('MMMM'),
                    moment().subtract(2, "month").startOf("month").format('MMMM'),
                    "Total"
                ];
        return header.map((key, index) => {
           return <th key={index}>{key}</th>
        })
     }
  
     render() {
        return (
           <div>
              <h1 id='title'>Reward Summary</h1>
              <table id='customers'>
                 <tbody>
                 <tr>{this.renderHeader()}</tr>
                    {this.renderRewardData()}
                 </tbody>
              </table>
            <p style={{padding:"20px", textAlign: 'center'}}> 
               <b style={{color:"red"}}>Note: </b>Reward calculation before 3 months from today's date ({new Date().toJSON().slice(0,10).replace(/-/g,'/')}) is ignored.
           </p>
           </div>

        )
     }
}

export default RewardSummary
