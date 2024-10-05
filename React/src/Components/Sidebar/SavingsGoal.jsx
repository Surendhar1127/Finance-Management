import React, { useState } from 'react';
import SavingoalsApi from '../API/SavingsGoalApi';


const SavingsGoal = () => {

  const[savingsGoal,setSavingsGoal]=useState({
    goalName: '',
    targetAmount: '',
    currentAmount: ''
  });

  const handleInputChange=(e)=>{
    console.log(e.target);
    const{name,value}=e.target;
    setSavingsGoal({
      ...savingsGoal,
      [name]:value
    });
    console.log(savingsGoal);
  }


  const addSavingGoals= async (savingsGoal)=>{
    try{
      console.log("1");
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
await SavingoalsApi.add(savingsGoal,token,userId);
setSavingsGoal({
  goalName: '',
    targetAmount: '',
    currentAmount: ''
});
console.log("2");

alert('Savings Goals add successfully');
    }catch(err){
      console.error('Error adding Goals:', err);
    }
  }

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div className='mt-3'>
  
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '15px 0' }}>
    <h1 className="display-6">Saving Goals</h1>
    </div>
  
  
  
    <div style={{ display: 'flex', justifyContent: 'center', margin: '15px 0' }}>
    <div className="input-group input-group-sm mb-3" style={{ width: '800px' }}>
    <span className="input-group-text" id="inputGroup-sizing-default">Goal Name</span>
    <input type="text" name="goalName" value={savingsGoal.goalName} onChange={handleInputChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
  </div>
  </div>  
  
  <div style={{ display: 'flex', justifyContent: 'center', margin: '15px 0' }}>
  <div className="input-group input-group-sm mb-3" style={{ width: '800px' }}>
    <span className="input-group-text" id="inputGroup-sizing-default">Target Amount</span>
    <input type="text" name="targetAmount" value={savingsGoal.targetAmount} onChange={handleInputChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
  </div>
  </div>
  
  <div style={{ display: 'flex', justifyContent: 'center', margin: '15px 0' }}>
  <div className="input-group input-group-sm mb-3" style={{ width: '800px' }}>
    <span className="input-group-text" id="inputGroup-sizing-default">Current Amount</span>
    <input type="text" name="currentAmount" value={savingsGoal.currentAmount} onChange={handleInputChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
  </div>
  </div>

  
  <div className="d-grid gap-2 col-6 mx-auto">
    <button className="btn btn-primary" type="button" onClick={()=>addSavingGoals(savingsGoal)}>Add</button>
  </div>
    </div>
    </main>
  );
};

export default SavingsGoal;
