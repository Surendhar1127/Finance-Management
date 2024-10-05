import React, { useState, useEffect } from 'react';
import TableData from '../Utils/TableData';
import Transaction from '../API/TransactionApi';
import SavingsGoalApi from '../API/SavingsGoalApi';
import InvestmentApi from '../API/InvestmentApi';
import TransactionInvestmentChart from './Chart';
import { useParams, useNavigate } from 'react-router-dom';

const Dashboard = () => {

  // const { userId } = useParams();

  const userName=localStorage.getItem('userName');

  const [transactions, setTransactions] = useState([]);
  const [investment, setInvestment] = useState([]);
  const [savingsGoal, setSavingsGoal] = useState([]);

  // useEffect(() => {
  //   fetchTransaction(userId); // Pass the userId to fetchUserDataById
  // }, [userId]); 

  useEffect(() => {


    const fetchTransaction = async (userId) => {
      try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if (token) {
          const data = await Transaction.getById(token,userId);  // Pass token here
          setTransactions(data); 
        }
      } catch (error) {
        console.error("Error fetching transaction:", error);
      }
    };

    const fetchInvestment = async () => {
      try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if (token) {
          const data = await InvestmentApi.getById(token,userId);  // Pass token here
          setInvestment(data);
        }
      } catch (error) {
        console.error("Error fetching investment:", error);
      }
    };

    const fetchGoals = async () => {
      try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if (token) {
          const data = await SavingsGoalApi.getById(token,userId);  // Pass token here
          setSavingsGoal(data);
        }
      } catch (error) {
        console.error("Error fetching saving goals:", error);
      }
    };

    fetchTransaction();
    fetchInvestment();
    fetchGoals();
}, []);


  useEffect(() => {
    console.log('Updated transactions:', transactions);
    console.log('Updated savings goals:', savingsGoal);
    console.log('Updated investments:', investment);
  }, [transactions, savingsGoal, investment]);

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Welcome , {userName}</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
          </div>
        </div>
      </div>

      <TransactionInvestmentChart transactions={transactions} investments={investment} savingsGoal={savingsGoal} />
      
      
      <TableData transactions={transactions} />
      <TableData savingsGoals={savingsGoal} />
      <TableData investments={investment} />
    </main>
  );
};

export default Dashboard;
