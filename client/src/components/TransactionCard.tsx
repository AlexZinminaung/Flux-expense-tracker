// import icons
import { Hamburger } from "lucide-react";

const TransactionCard = () => {

    return (
            <div className='flex items-center justify-between border p-4 border-gray-800 rounded-lg '>
                <div className='flex items-center gap-4'>
                  <Hamburger color="#11ff00" />
                  <div className='flex flex-col'>
                    <span>Drink</span>
                    <div className='flex text-sm flex-wrap text-gray-400 gap-2'>
                      <span>May 10, 2026</span>
                      <span>expense</span>
                      <span>Food</span>
                    </div>
                  </div>
                </div>
                <span>$345</span>
            </div>
    );
}


export default TransactionCard;