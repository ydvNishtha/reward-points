import moment from 'moment';

/**
 * An reward point calculation utilities based on amount
 * @param {*} amount 
 */
export function validRewardsPointsFromAmount(amount) {
    let points = 0;

    if (amount >= 50 && amount < 100) {
        // plus 1 point for every dollar spent over $50 and less than $100 in each transaction
        points = amount - 50;
    } else if (amount > 100){
        // A customer receives 2 points for every dollar spent over $100 in each transaction
        // and full 50 points for 50$ to 100$
        points =  (2 * (amount - 100) + 50);
    }
    return points;
}

/**
 * Handle reward for all transactions
 * Note that any recored before 3 months is ingnored
 * @param {*} transactionList 
 */
export function GetRewardSummary(transactionList) {

// Sort based on customerid and transaction date
let sortedTransactionList = transactionList.sort(function (a, b) {   
    return a.id - b.id || moment(a.date >= b.date) ? 1 : -1 ;
});

// And object to hold reward summary
let rewardSummary = {};

sortedTransactionList.forEach((transaction, index) => {
    
    // skip invalid entries
    if(!transaction.id || !transaction.date){
        return true;
    }
    // if it is new id, add the record first time in rewardSummary
    if(!rewardSummary[transaction.id]){
        
        // initialze new summarys
        rewardSummary[transaction.id] = {
            id: transaction.id,
            currentMonth: 0,
            lastMonth: 0,
            lastToLastMonth: 0,
            total: 0
        }
    }

    // if date is more than 3 month ignore it
    if(moment().diff(moment(transaction.date), 'months') > 3){
        // skip the current iteration
        return true; 
    } 
    
    // handle current month and update total
    if (moment().diff(moment(transaction.date), 'months') === 0 ){
        let reward = validRewardsPointsFromAmount(transaction.amount);
        rewardSummary[transaction.id].currentMonth += reward;
        rewardSummary[transaction.id].total += reward;
    }

    // handle lastMonth month and update total
    if (moment().diff(moment(transaction.date), 'months') === 1 ){
        let reward = validRewardsPointsFromAmount(transaction.amount);
        rewardSummary[transaction.id].lastMonth += reward;
        rewardSummary[transaction.id].total += reward;
    }

    // handle lastToLastMonth month and update total
    if (moment().diff(moment(transaction.date), 'months') === 2 ){
        let reward = validRewardsPointsFromAmount(transaction.amount);
        rewardSummary[transaction.id].lastToLastMonth += reward;
        rewardSummary[transaction.id].total += reward;
    }

})

return rewardSummary;

}