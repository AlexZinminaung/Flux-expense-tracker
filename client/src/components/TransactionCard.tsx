// import icons
import { Hamburger } from "lucide-react";
import type { Transaction } from "../types/ExpenseType";

type Props = {
  data: Transaction;
};

const TransactionCard = ({data}: Props) => {

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
                <span>${data.amount}</span>
            </div>
    );
}


export default TransactionCard;