import { useState } from 'react';
import './App.css'
import DataChart from './components/DataChart';




import Navbar from './components/Navbar';
import OverviewCard from './components/OverviewCard';
import TransactionContainer from './components/TransactionContainer';
import PopupForm from './components/PopupForm';

// import custom 
import { useContext } from "react";
import { ExpenseContext } from "./contexts/ExpenseContext";
import BudgetBox from './components/BudgetBox';

function App() {
  const [isFormOpen, setFormOpen] = useState(false)
  const context = useContext(ExpenseContext);
  if (!context) return null;

  const { isBudgetOpen } = context;

  return (
    <section className='container-main min-h-screen'>
        {/* Navbar */}
        <Navbar/>
        {/* Overview */}
        <OverviewCard/>
        <section className='flex flex-col lg:flex-row gap-3'>
          {/* Transaction  */}
          <TransactionContainer/>
          {/* Data chart */}
          <DataChart/>   
        </section>

        {/* Add button and Popup */}
        <button onClick={ () => {setFormOpen(true)}} className='fixed z-10 size-12 text-3xl shadow-[0_0_25px_rgba(59,130,246,0.8)] bg-blue-500 bottom-10 right-10 rounded-full'>+</button>
        {
          isFormOpen && <PopupForm setFormOpen={setFormOpen}/>
        }

        {/* Open Budget box */}
        {
          isBudgetOpen && <BudgetBox/>
        }
    </section>
  )
  
}

export default App;
