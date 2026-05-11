import type { Dispatch, SetStateAction } from "react";

type Props = {
  setFormOpen: Dispatch<SetStateAction<boolean>>;
};


const PopupForm = ({setFormOpen}: Props) => {

    return (
        <div className='fixed inset-0 bg-black/30 z-50 flex justify-center items-center'>
          <div className='bg-black component-card w-[90%] max-w-md'>
            <div className='flex justify-between gap-2'>
              <span className=' font-bold'>New Transaction</span>
              <button onClick={() => { setFormOpen(false)}} className='size-6 p-2 border border-gray-800 rounded-lg flex justify-center items-center hover:bg-gray-400'>x</button>
            </div>

            <form className='flex flex-col gap-4'>
              <label className=' text-sm text-gray-400'>TYPE</label>
              <div className='flex gap-2'>
                <button className='flex-1 border border-gray-800 px-2 py-1 rounded-lg'>Income</button>
                <button className='flex-1 border border-gray-800 px-2 py-1 rounded-lg'>Expense</button>
              </div>
              <label className=' text-sm text-gray-400'>TITLE</label>
              <input type='text' className='p-2 outline-none border border-gray-800 rounded-lg'/>

              <div className='flex flex-col sm:flex-row gap-2'>
                <div className='flex flex-col w-full'>
                  <label className=' text-sm text-gray-400'>AMOUNT ($)</label>
                  <input type='text' className='p-2 outline-none border border-gray-800 rounded-lg'/>
                </div>
                <div className='flex flex-col w-full'>
                  <label className=' text-sm text-gray-400'>DATE</label>
                  <input type='date' className='p-2 outline-none border border-gray-800 rounded-lg'/>
                </div>
              </div>

              <label>Catagory</label>
              <input type='text' className='p-2 outline-none border border-gray-800 rounded-lg'/>
            </form>
          </div>
        </div>
    );
}

export default PopupForm;