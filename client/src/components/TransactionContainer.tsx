import TransactionCard from "./TransactionCard";

// import icons
import { Search } from 'lucide-react';

const TransactionContainer = () => {


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
              <form className='w-full px-2 flex justify-center items-center rounded-lg border border-gray-800'>
                <Search color="#00aaff" />
                <input type='text' className='w-full h-full outline-none'/>
              </form>
            </div>

            {/* history container */}
            <div className='max-h-125 flex flex-col gap-2 overflow-y-auto'>
              <TransactionCard/>
              <TransactionCard/>
            </div>
          </div>
        </div>
    );
}



export default TransactionContainer;