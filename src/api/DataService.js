/**
 * A mock DataService which act like a bank data base and return customers, transactions and initial rewards
 */
export default function DataService() {
    // simulates data coming from a database.
    return Promise.resolve(
      {
        customers: [
          { id: 101, name: 'Oliver', age : 21, email: 'oliver@email.com'},
          { id: 102, name: 'Jacob', age: 19, email: 'jacob@email.com' },
          { id: 103, name: 'Thomas', age: 16, email: 'thomas@email.com' },
          { id: 104, name: 'George', age: 25, email: 'george@email.com' }
       ],
       transactions : [
        {id:101, amount:60, date:"2019-12-21"},
        {id:102, amount:300, date:"2020-01-05"},
        {id:104, amount:100, date:"2019-12-07"},
        {id:104, amount:25, date:"2019-09-05"},
        {id:103, amount:30, date:"2019-12-22"},
        {id:101, amount:55, date:"2020-01-04"},
        {id:102, amount:30, date:"2019-11-09"},
        {id:104, amount:10, date:"2019-12-07"},
        {id:104, amount:250, date:"2019-11-05"},
        {id:103, amount:20, date:"2019-12-26"},
       ],
       rewards :[
         {
           id: 101,
           currentMonth: "0",
           lastMonth: "0",
           lastToLastMonth: "0",
           total: "0"
         },
         {
          id: 102,
          currentMonth: "0",
          lastMonth: "0",
          lastToLastMonth: "0",
          total: "0"
        },
        {
          id: 103,
          currentMonth: "0",
          lastMonth: "0",
          lastToLastMonth: "0",
          total: "0"
        },
        {
          id: 104,
          currentMonth: "0",
          lastMonth: "0",
          lastToLastMonth: "0",
          total: "0"
        }
       ]
      }
    );
  };