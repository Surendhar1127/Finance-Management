import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TransactionInvestmentChart = ({ transactions, investments,savingsGoal }) => {
  // Prepare data for the transactions chart
  const transactionData = {
    labels: transactions.map((transaction) => transaction.description),
    datasets: [
      {
        label: 'Transaction Amount',
        data: transactions.map((transaction) => transaction.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        barThickness: 80,  // Controls bar width
        maxBarThickness: 100,  // Maximum width of the bars
      },
    ],
  };

  const goalsData = {
    labels: savingsGoal.map((savingsGoal) => savingsGoal.goalName),
    datasets: [
      {
        label: 'Goals Value',
        data: savingsGoal.map((saving) => saving.targetAmount),
        backgroundColor: 'rgba(13, 12, 200, 0.6)',
        borderColor: 'rgba(153, 102, 205, 10)',
        borderWidth: 1,
        barThickness: 80,  // Controls bar width
        maxBarThickness: 100,  // Maximum width of the bars
      },
    ],
  };
  // Prepare data for the investments chart
  const investmentData = {
    labels: investments.map((investment) => investment.name),
    datasets: [
      {
        label: 'Investment Value',
        data: investments.map((investment) => investment.amountInvested),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        barThickness: 80,  // Controls bar width
        maxBarThickness: 100,  // Maximum width of the bars
      },
    ],
  };

  return (
    <div>
      <h2>Transaction Amounts</h2>
      <Bar data={transactionData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />

      <h2>Saving Gosls Values</h2>
      <Bar data={goalsData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
      
      <h2>Investment Values</h2>
      <Bar data={investmentData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
    </div>
  );
};

export default TransactionInvestmentChart;
