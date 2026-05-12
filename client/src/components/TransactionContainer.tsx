import TransactionCard from "./TransactionCard";

// import icons
import { Search } from 'lucide-react';
import { Diamond } from 'lucide-react';

// import custom 
import { useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";


const TransactionContainer = () => {
    
  const context = useContext(ExpenseContext);
  if (!context) return null;

  const { transactions } = context;

  return (
      <div className='w-full h-fit component-card'>
        <div className='py-4 flex justify-between'>
          <span className=' text-sm font-bold'>Transaction History</span>
          <span className=' text-xs'>9 records</span>
        </div>

        <div className='border-t border-gray-800 '>
          <div className='py-2 flex flex-col sm:flex-row gap-1'>
            <div className='flex gap-2 bg-white/10 w-fit p-1 rounded-lg'>
              <button className='py-1 px-4'>All</button>
              <button className='py-1 px-4'>Income</button>
              <button className='py-1 px-4'>Expense</button>
            </div>
            <form className='w-full p-2 flex justify-center items-center rounded-lg border border-gray-800'>
              <Search color="#00aaff" />
              <input type='text' className='w-full h-full outline-none'/>
            </form>
          </div>

          {/* history container */}
          <div className='max-h-125 flex flex-col gap-2 overflow-y-auto'>
            {
              // if there is not transcation
              transactions.length < 1 && (
                <div className="flex flex-col gap-2 justify-center items-center p-5">
                  <Diamond color="#1443ff" className=" size-20 opacity-65" />
                  <h1 className="text-gray-200">No Transactions Found</h1>
                  <p className="text-sm text-gray-400">Add Your First Transaction Using + button.</p>
                </div>)
              
            }

            {
              // if there is transcation
              transactions.map( record => {
                return < TransactionCard key={record.id} data={record}/>
              })
            }
          </div>
        </div>
      </div>
  );
}



export default TransactionContainer;