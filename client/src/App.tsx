import './App.css'

// import icons
import { FaBowlFood } from "react-icons/fa6";

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

const data1 = {
  labels: ["Food", "Shopping", "Bills", "Transport"],
  datasets: [
    {
      data: [300, 500, 200, 120],
      backgroundColor: [
        "#22d3ee",
        "#818cf8",
        "#34d399",
        "#f472b6",
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

function App() {


  return (
    <section className='container-main'>
      {/* Navbar */}
      <nav className='w-full flex justify-between items-center border-b border-gray-800 py-8'>
        {/* For Logo */}
        <div className='flex flex-col'>
          <span className=' text-3xl font-bold bg-linear-to-r from-white to-blue-800 bg-clip-text text-transparent'>FLUX</span>
          <span className=' text-sm text-gray-400'>PERSONAL FINANCE DASHBOARD</span>
        </div>
        <span className=' bg-white/10 p-2 rounded-lg text-sm text-gray-400'>Sun, May 10, 2026</span>
      </nav>

      <section className='w-full flex gap-3 py-4'>

        <div className='flex-1 flex flex-col gap-2 component-card '>
          <div className='flex gap-2'>
            <span>T</span>
            <span className='text-sm '>TOTAL BALANCE</span>
          </div>
          <span className='text-3xl '>$3000</span>
          <span className='text-sm text-green-300'>Negative balance</span>
        </div>

        <div className='flex-1 flex flex-col gap-2 component-card'>
          <div className='flex gap-2'>
            <span>T</span>
            <span className='text-sm '>TOTAL BALANCE</span>
          </div>
          <span className='text-3xl '>$3000</span>
          <span className='text-sm text-green-300'>Negative balance</span>
        </div>

        <div className='flex-1 flex flex-col gap-2 component-card'>
          <div className='flex gap-2'>
            <span>T</span>
            <span className='text-sm '>TOTAL BALANCE</span>
          </div>
          <span className='text-3xl '>$3000</span>
          <span className='text-sm text-green-300'>Negative balance</span>
        </div>

      </section>

      <section className='flex flex-col lg:flex-row gap-2'>
        <div className='w-full h-fit component-card'>
          <div className='py-4'>
            <span className=' text-sm font-bold'>Transaction History</span>
            <span className=' text-xs'>9 records</span>
          </div>

          <div className='border-t border-gray-800 '>
            <div className='py-2 flex gap-1'>
              <div className='flex gap-2 bg-white/10 w-fit p-1 rounded-lg'>
                <button className='py-1 px-4'>All</button>
                <button className='py-1 px-4'>Income</button>
                <button className='py-1 px-4'>Expense</button>
              </div>
              <form className='w-full rounded-lg border border-gray-800'>
                <input type='text' className='w-full h-full'/>
              </form>
            </div>

            {/* history container */}
            <div className='max-h-125 flex flex-col gap-2 overflow-y-auto'>
              <div className='flex items-center justify-between border p-4 border-gray-800 rounded-lg '>
                <div className='flex items-center gap-4'>
                  <FaBowlFood className='size-8'/>
                  <div className='flex flex-col'>
                    <span>Drink</span>
                    <div className='flex text-sm text-gray-400 gap-2'>
                      <span>May 10, 2026</span>
                      <span>expense</span>
                      <span>Food</span>
                    </div>
                  </div>
                </div>
                <span>$345</span>
              </div>

              <div className='flex items-center justify-between border p-4 border-gray-800 rounded-lg '>
                <div className='flex items-center gap-4'>
                  <FaBowlFood className='size-8'/>
                  <div className='flex flex-col'>
                    <span>Drink</span>
                    <div className='flex text-sm text-gray-400 gap-2'>
                      <span>May 10, 2026</span>
                      <span>expense</span>
                      <span>Food</span>
                    </div>
                  </div>
                </div>
                <span>$345</span>
              </div>

              <div className='flex items-center justify-between border p-4 border-gray-800 rounded-lg '>
                <div className='flex items-center gap-4'>
                  <FaBowlFood className='size-8'/>
                  <div className='flex flex-col'>
                    <span>Drink</span>
                    <div className='flex text-sm text-gray-400 gap-2'>
                      <span>May 10, 2026</span>
                      <span>expense</span>
                      <span>Food</span>
                    </div>
                  </div>
                </div>
                <span>$345</span>
              </div>

              <div className='flex items-center justify-between border p-4 border-gray-800 rounded-lg '>
                <div className='flex items-center gap-4'>
                  <FaBowlFood className='size-8'/>
                  <div className='flex flex-col'>
                    <span>Drink</span>
                    <div className='flex text-sm text-gray-400 gap-2'>
                      <span>May 10, 2026</span>
                      <span>expense</span>
                      <span>Food</span>
                    </div>
                  </div>
                </div>
                <span>$345</span>
              </div>

              <div className='flex items-center justify-between border p-4 border-gray-800 rounded-lg '>
                <div className='flex items-center gap-4'>
                  <FaBowlFood className='size-8'/>
                  <div className='flex flex-col'>
                    <span>Drink</span>
                    <div className='flex text-sm text-gray-400 gap-2'>
                      <span>May 10, 2026</span>
                      <span>expense</span>
                      <span>Food</span>
                    </div>
                  </div>
                </div>
                <span>$345</span>
              </div>

              <div className='flex items-center justify-between border p-4 border-gray-800 rounded-lg '>
                <div className='flex items-center gap-4'>
                  <FaBowlFood className='size-8'/>
                  <div className='flex flex-col'>
                    <span>Drink</span>
                    <div className='flex text-sm text-gray-400 gap-2'>
                      <span>May 10, 2026</span>
                      <span>expense</span>
                      <span>Food</span>
                    </div>
                  </div>
                </div>
                <span>$345</span>
              </div>

              <div className='flex items-center justify-between border p-4 border-gray-800 rounded-lg '>
                <div className='flex items-center gap-4'>
                  <FaBowlFood className='size-8'/>
                  <div className='flex flex-col'>
                    <span>Drink</span>
                    <div className='flex text-sm text-gray-400 gap-2'>
                      <span>May 10, 2026</span>
                      <span>expense</span>
                      <span>Food</span>
                    </div>
                  </div>
                </div>
                <span>$345</span>
              </div>

              <div className='flex items-center justify-between border p-4 border-gray-800 rounded-lg '>
                <div className='flex items-center gap-4'>
                  <FaBowlFood className='size-8'/>
                  <div className='flex flex-col'>
                    <span>Drink</span>
                    <div className='flex text-sm text-gray-400 gap-2'>
                      <span>May 10, 2026</span>
                      <span>expense</span>
                      <span>Food</span>
                    </div>
                  </div>
                </div>
                <span>$345</span>
              </div>

              <div className='flex items-center justify-between border p-4 border-gray-800 rounded-lg '>
                <div className='flex items-center gap-4'>
                  <FaBowlFood className='size-8'/>
                  <div className='flex flex-col'>
                    <span>Drink</span>
                    <div className='flex text-sm text-gray-400 gap-2'>
                      <span>May 10, 2026</span>
                      <span>expense</span>
                      <span>Food</span>
                    </div>
                  </div>
                </div>
                <span>$345</span>
              </div>

            </div>
          </div>
        </div>

        <div className='flex flex-wrap flex-col md:flex-row lg:flex-col gap-2'>
          <div className='flex-1 component-card flex justify-center items-center'>
            <Pie
              data={data1}
            />
          </div>

          <div className='flex-1 component-card flex justify-center items-center'>
            <Line data={data2}/>
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

      </section>
    </section>
  )
}

export default App
