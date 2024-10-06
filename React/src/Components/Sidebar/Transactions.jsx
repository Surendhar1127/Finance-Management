import React, { useState } from 'react';
import Transaction from "../API/TransactionApi"


const Transactions = () => {

  const[transactions,setTransactions]=useState({
    description: '',
    amount: '',
    type: '',
    category: ''
  });

  const handleInputChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setTransactions({
      ...transactions,
      [name]: value
    });
    console.log(transactions);
  };


  const addTransaction= async (transactions)=>{
    try{
      console.log("1");
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
await Transaction.add(transactions,token,userId);
setTransactions({
  description: '',
  amount: '',
  type: '',
  category: ''
});
console.log("2");

alert('Transaction  add successfully');
    }catch(err){
      console.error('Error adding Transaction:', error);
    }
  }


  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
  <div className='mt-3'>

  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '15px 0' }}>
  <h1 className="display-6">Transaction</h1>
  </div>



  <div style={{ display: 'flex', justifyContent: 'center', margin: '15px 0' }}>
  <div className="input-group input-group-sm mb-3" style={{ width: '800px' }}>
  <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
  <input type="text" name="description" value={transactions.description} onChange={handleInputChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>
</div>  

<div style={{ display: 'flex', justifyContent: 'center', margin: '15px 0' }}>
<div className="input-group input-group-sm mb-3" style={{ width: '800px' }}>
  <span className="input-group-text" id="inputGroup-sizing-default">Amount</span>
  <input type="text" name="amount" value={transactions.amount} onChange={handleInputChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>
</div>

<div style={{ display: 'flex', justifyContent: 'center', margin: '15px 0' }}>
  <div className="input-group input-group-sm mb-3" style={{ width: '800px' }}>
    <label className="input-group-text" htmlFor="inputGroupSelect01">Type</label>
    <select className="form-select" id="inputGroupSelect01" name="type" value={transactions.type} onChange={handleInputChange}> 
    <option value="">Select the type</option> {/* Set value as an empty string for default */}
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
    </select>
  </div>
</div>

<div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
<div className="input-group input-group-sm mb-3" style={{ width: '800px' }}>
  <span className="input-group-text" id="inputGroup-sizing-default">Category</span>
  <input type="text" name="category" value={transactions.category} onChange={handleInputChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>
</div>

<div className="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-primary" type="button" onClick={()=>addTransaction(transactions)}>Add Transaction</button>
</div>
  </div>
  </main>

);
};

export default Transactions;
