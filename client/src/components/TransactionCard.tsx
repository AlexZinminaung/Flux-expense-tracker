// import icons
import { Hamburger } from "lucide-react";
import type { Transaction } from "../types/ExpenseType";

type Props = {
  data: Transaction;
};

// import custom 
import { useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";

const TransactionCard = ({data}: Props) => {
    const context = useContext(ExpenseContext);
    if (!context) return null;

    const { removeTransaction } = context;

    return (
            <div className='flex items-center justify-between border p-4 border-gray-800 rounded-lg '>
                <div className='flex items-center gap-4'>
                  <Hamburger color="#11ff00" />
                  <div className='flex flex-col'>
                    <span>{data.title}</span>
                    <div className='flex text-sm flex-wrap text-gray-400 gap-2'>
                      <span>{data.date}</span>
                      <span>{data.type}</span>
                      <span>{data.category}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span>${data.amount}</span>
                  <button onClick={() => { removeTransaction(data.id)}} className="size-6 rounded-lg flex justify-center items-center border border-gray-800 hover:bg-red-600">x</button>
                </div>

            </div>
    );
}


export default TransactionCard;