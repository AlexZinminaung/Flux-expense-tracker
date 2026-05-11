// import icons
import { Hamburger } from "lucide-react";

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
              <form className='w-full rounded-lg border border-gray-800'>
                <input type='text' className='w-full h-full'/>
              </form>
            </div>

            {/* history container */}
            <div className='max-h-125 flex flex-col gap-2 overflow-y-auto'>
              <div className='flex items-center justify-between border p-4 border-gray-800 rounded-lg '>
                <div className='flex items-center gap-4'>
                  <Hamburger color="#11ff00" />
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
                  <Hamburger color="#11ff00" />
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
                  <Hamburger color="#11ff00" />
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
                  <Hamburger color="#11ff00" />
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
    );
}



export default TransactionContainer;