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

  const { spending } = context;
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
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Income",
        data: [100, 700, 500, 900, 650],
        borderColor: "#22d3ee",
        backgroundColor: "rgba(34,211,238,0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Expenses",
        data: [10, 440, 600, 1200, 850],
        borderColor: "#e83b2e",
        backgroundColor: "rgba(255, 107, 97,0.2)",
        tension: 0.4,
        fill: true,
      },

    ],
  };

    return (
        <div className='flex flex-wrap flex-col md:flex-row lg:flex-col gap-2'>
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
              <li className='flex gap-2 justify-between component-card p-2 rounded-lg'>
                <span className='text-gray-400'>May 26</span>
                <div className='flex gap-2'>
                  <span className='text-green-400'>+$2320</span>
                  <span className='text-red-400'>-$420</span>
                </div>
              </li>
              <li className='flex gap-2 justify-between component-card p-2 rounded-lg'>
                <span className='text-gray-400'>May 26</span>
                <div className='flex gap-2'>
                  <span className='text-green-400'>+$2320</span>
                  <span className='text-red-400'>-$420</span>
                </div>
              </li>

              <li className='flex gap-2 justify-between component-card p-2 rounded-lg'>
                <span className='text-gray-400'>May 26</span>
                <div className='flex gap-2'>
                  <span className='text-green-400'>+$2320</span>
                  <span className='text-red-400'>-$420</span>
                </div>
              </li>

              <li className='flex gap-2 justify-between component-card p-2 rounded-lg'>
                <span className='text-gray-400'>May 26</span>
                <div className='flex gap-2'>
                  <span className='text-green-400'>+$2320</span>
                  <span className='text-red-400'>-$420</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
    )
}


export default DataChart;