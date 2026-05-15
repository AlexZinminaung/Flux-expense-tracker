// import chart

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
} from "chart.js";

import { Pie, Line } from "react-chartjs-2";

// import custom 
import { useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
);


const DataChart = () => {
  const context = useContext(ExpenseContext);
  if (!context) return null;

  const { spending, monthlySummary } = context;
  
  const data1 = {
    labels: ["Food", "Shopping", "Bills", "Transport", "Freelance", "Other"],
    datasets: [
      {
        data: [spending.food, spending.shopping, spending.bills, spending.transport, spending.freelance, spending.other],
        backgroundColor: [
          "#22d3ee",
          "#818cf8",
          "#34d399",
          "#f472b6",
          "#b7eb34",
          "#c908c0",
        ],
        borderWidth: 0,
      },
    ],
  };

  const data2 = {
    labels: monthlySummary.map(item => item.month),
    datasets: [
      {
        label: "Income",
        data: monthlySummary.map(item => item.totalIncome),
        borderColor: "#22d3ee",
        backgroundColor: "rgba(34,211,238,0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Expenses",
        data: monthlySummary.map(item => item.totalExpense),
        borderColor: "#e83b2e",
        backgroundColor: "rgba(255, 107, 97,0.2)",
        tension: 0.4,
        fill: true,
      },

    ],
  };

  if (monthlySummary.length < 1) return <NoData/>;

  return (
      <div className='flex flex-wrap flex-col md:flex-row lg:flex-col gap-3'>
      <div className='flex-1 component-card min-w-0 flex justify-center items-center'>
        <Pie
          data={data1}
          options={{
            responsive: true,
            maintainAspectRatio: true,
          }}
        />
      </div>

      <div className='flex-1 component-card min-w-0 flex justify-center items-center'>
        <Line
          data={data2}
          options={{
            responsive: true,
            maintainAspectRatio: true,
          }}
        />
      </div>

        <div className='flex-1 component-card flex flex-col justify-center items-center'>
          <span className='text-start w-full p-2'>Monthly Summery</span>
          <ul className='w-full flex flex-col gap-2 p-2'>
            { 
              monthlySummary.map( (record, index) => {
                return (
                  <li key={index} className='flex gap-2 justify-between component-card p-2 rounded-lg'>
                    <span className='text-gray-400'>{record.month}</span>
                    <div className='flex gap-2'>
                      <span className='text-green-400'>+${record.totalIncome}</span>
                      <span className='text-red-400'>-${record.totalExpense}</span>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
}

const NoData = () => {

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="text-6xl mb-4">📊</div>

      <h1 className="text-2xl font-bold text-white">
        No Data To Show
      </h1>

      <p className="text-gray-400 mt-2 max-w-sm">
        Start adding transactions to see your expense analytics and charts.
      </p>
    </div>
  )
}

export default DataChart;