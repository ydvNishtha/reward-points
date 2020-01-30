import React from 'react'
/**
 * About us page
 */
function About() {
  return (
    <React.Fragment>
      <h3 style={{padding:"10px"}}>About customer reward program:</h3>
      <p style={{padding:"10px"}}> Retailer offers a rewards program to its customers, awarding points based on each recorded purchase.
      </p>
      <p style={{padding:"10px"}}>
A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction
(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points)</p>
    </React.Fragment>
  )
}


export default About;