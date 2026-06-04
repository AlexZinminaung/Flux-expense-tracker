

import TransactionCard from "./TransactionCard";

// import icons
import { Search } from 'lucide-react';
import { Diamond } from 'lucide-react';

// import custom 
import { useContext, useState } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";


const TransactionContainer = () => {
  const [option, setOption] = useState('all');
  const [search, setSearch] = useState('');

  const context = useContext(ExpenseContext);
  if (!context) return null;

  const { transactions } = context;
  const filterTransactions = transactions.filter(transaction => {
    if (option == 'all')
    {
      return transaction.title.toLowerCase().includes(search.toLowerCase().trim())
    }

    if (option == 'income')
    {
      return transaction.type == 'income' && transaction.title.toLowerCase().includes(search.toLowerCase().trim());
    }

    return transaction.type == 'expense' && transaction.title.toLowerCase().includes(search.toLowerCase().trim());
  })



  return (
      <div className='w-full h-fit component-card'>
        <div className='py-4 flex justify-between'>
          <span className=' text-sm font-bold'>Transaction History</span>
          <span className=' text-xs'>{transactions.length} records</span>
        </div>

        <div className='border-t border-gray-800 '>
          <div className='py-2 flex flex-col sm:flex-row gap-2'>
            <div className='flex gap-2 bg-white/10 w-fit p-1 rounded-lg'>
              <button onClick={() => { setOption('all')}} className={`py-1 px-4 rounded-lg ${option == 'all' && 'bg-blue-400/20'}`}>All</button>
              <button onClick={() => { setOption('income')}} className={`py-1 px-4 rounded-lg ${option == 'income' && 'bg-blue-400/20'}`}>Income</button>
              <button onClick={() => { setOption('expense')}} className={`py-1 px-4 rounded-lg ${option == 'expense' && 'bg-blue-400/20'}`}>Expense</button>
            </div>
            <form onSubmit={(e) => { e.preventDefault()}} className='w-full p-2 flex justify-center items-center rounded-lg border border-gray-800'>
              <Search color="#00aaff"/>
              <input onChange={(e) => { setSearch(e.target.value)}} type='text' className='w-full h-full outline-none'/>
            </form>
          </div>

          {/* history container */}
          <div className='max-h-125 flex flex-col gap-2 overflow-y-auto'>
            {
              // if there is not transcation
              filterTransactions.length < 1 && (
                <div className="flex flex-col gap-2 justify-center items-center p-5">
                  <Diamond color="#1443ff" className=" size-20 opacity-65" />
                  <h1 className="text-gray-200">No Transactions Found</h1>
                  <p className="text-sm text-gray-400">Add Your First Transaction Using + button.</p>
                </div>)
              
            }

            {
              // if there is transcation
              filterTransactions.map( record => {
                return <TransactionCard key={record.id} data={record}/>
              }).reverse()
            }
          </div>
        </div>
      </div>
  );
}



export default TransactionContainer;