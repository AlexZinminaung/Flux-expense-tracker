import './App.css'
import DataChart from './components/DataChart';




import Navbar from './components/Navbar';
import OverviewCard from './components/OverviewCard';
import TransactionContainer from './components/TransactionContainer';
import ExpenseProvider from './contexts/ExpenseContext';


function App() {


  return (
    <section className='container-main'>
      <ExpenseProvider>
        {/* Navbar */}
        <Navbar/>
        {/* Overview */}
        <OverviewCard/>
        <section className='flex flex-col lg:flex-row gap-2'>
          {/* Transaction  */}
          <TransactionContainer/>
          {/* Data chart */}
          <DataChart/>   
        </section>
      </ExpenseProvider>
    </section>
  )
  
}

export default App;
