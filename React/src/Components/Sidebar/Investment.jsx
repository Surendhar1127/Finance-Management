import React,{useState} from 'react';
import investmentAPi from '../API/InvestmentApi'
const Investment = () => {

  const[investment,setInvestment]=useState({
    name: '',
    amountInvested: '',
    currentValue: ''
  });

  const handleInputChange=(e)=>{
    console.log(e.target);
    const{name,value}=e.target;
    setInvestment({
      ...investment,
      [name]:value
    });
    console.log(investment);
  }


  const addInvestment= async (investment)=>{
    try{
      console.log("1");
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
await investmentAPi.add(investment,token,userId);
setInvestment({
  name: '',
  amountInvested: '',
  currentValue: ''
});
console.log("2");

alert('Savings Goals add successfully');
    }catch(err){
      console.error('Error adding investment:', err);
    }
  }

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div className='mt-3'>
  
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '15px 0' }}>
    <h1 className="display-6">Investment</h1>
    </div>
  
  
  
    <div style={{ display: 'flex', justifyContent: 'center', margin: '15px 0' }}>
    <div className="input-group input-group-sm mb-3" style={{ width: '800px' }}>
    <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
    <input type="text" name="name" value={investment.name} onChange={handleInputChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
  </div>
  </div>  
  
  <div style={{ display: 'flex', justifyContent: 'center', margin: '15px 0' }}>
  <div className="input-group input-group-sm mb-3" style={{ width: '800px' }}>
    <span className="input-group-text" id="inputGroup-sizing-default">Amount Invested</span>
    <input type="text" name="amountInvested" value={investment.amountInvested} onChange={handleInputChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
  </div>
  </div>
  
  
  <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
  <div className="input-group input-group-sm mb-3" style={{ width: '800px' }}>
    <span className="input-group-text" id="inputGroup-sizing-default">Current Value</span>
    <input type="text" name="currentValue" value={investment.currentValue} onChange={handleInputChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
  </div>
  </div>
  
  <div className="d-grid gap-2 col-6 mx-auto">
    <button className="btn btn-primary" type="button" onClick={()=>addInvestment(investment)}>Add </button>
  </div>
    </div>
    </main>
  )
};

export default Investment;
