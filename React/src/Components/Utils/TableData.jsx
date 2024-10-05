import React from 'react'

const TableData = ({transactions,savingsGoals,investments}) => {

  const changeHeadings=()=>{
    if(transactions){
      return'Transaction Details';
    }else if(savingsGoals){
   return  'Saving Goals';
    }else if(investments){
      return 'Investment Details'
    }

  }

  const renderHeading=()=>{
    if(transactions){
      return (
        <tr>
          <th scope="col">No</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Type</th>
          <th scope="col">Category</th>
          <th scope="col">Transaction Date</th>
        </tr>
      );
    }else if(savingsGoals) {
      return (
        <tr>
          <th scope="col">Goal Id</th>
          <th scope="col">Goal Name</th>
          <th scope="col">Target Amount</th>
          <th scope="col">Current Savings</th>
          <th scope="col">Target Date</th>
        </tr>
      );
    } else if (investments) {
      return (
        <tr>
          <th scope="col">Investment Id</th>
          <th scope="col">Investment Name</th>
          <th scope="col">Amount Invested</th>
          <th scope="col">Current Value</th>
        </tr>
      );
    }
  };

  const renderRows = () => {
    if (transactions && transactions.length > 0) {
      return transactions.map((transaction) => (
        <tr key={transaction.id}>
          <td>{transaction.id}</td>
          <td>{transaction.description}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.type}</td>
          <td>{transaction.category}</td>
          <td>{transaction.dateTime}</td>
        </tr>
      ));
    }  else if (savingsGoals && savingsGoals.length>0) {
      return savingsGoals.map((savingsGoal)=>(
        <tr>
          <td>{savingsGoal.id}</td>
          <td>{savingsGoal.goalName}</td>
          <td>{savingsGoal.targetAmount}</td>
          <td>{savingsGoal.currentAmount}</td>
          <td>{savingsGoal.targetDate}</td>
        </tr>
      ));
    } else if (investments && investments.length>0) {
      return investments.map((investment)=>(
        <tr>
          <td>{investment.id}</td>
          <td>{investment.name}</td>
          <td>{investment.amountInvested}</td>
          <td>{investment.currentValue}</td>
        </tr>
      ));
    } else {
      return (
        <tr>
          <td colSpan="6">No data available</td>
        </tr>
      );
    }
  };

  return (
    <>
    <h2>{changeHeadings()}</h2>
      <div className="table-responsive mt-4">
        <table className="table">
          <thead className='table-dark'>
           {renderHeading()}
          </thead>
          <tbody className='table-success'>
           {renderRows()}
          </tbody>
        </table>
      </div>
      </>
  )
}

export default TableData