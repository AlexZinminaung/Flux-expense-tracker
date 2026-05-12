import { useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";

// importing icons
import { Diamond } from 'lucide-react';
import { MoveUp } from 'lucide-react';
import { MoveDown } from 'lucide-react';

const OverviewCard = () => {

    const context = useContext(ExpenseContext);
    if (!context) return null;

    const { expenseSummary } = context;
    return (
            <section className='w-full flex flex-col sm:flex-row gap-3 py-4'>
                <div className='flex-1 flex flex-col gap-2 component-card '>
                  <div className='flex gap-2 items-center'>
                    <Diamond color="#1443ff" />
                    <span className='text-sm '>TOTAL BALANCE</span>
                  </div>
                  <span className='text-3xl '>${expenseSummary.total_balance}</span>
                  <span className={`text-sm ${expenseSummary.total_balance < 0 ? "text-red-400" : "text-green-400"}`}>
                    {expenseSummary.total_balance < 0 ? "Negative balance" : "Net position"}
                  </span>
                </div>
        
                <div className='flex-1 flex flex-col gap-2 component-card'>
                  <div className='flex gap-2 items-center'>
                    <MoveUp color="#00ff40" />
                    <span className='text-sm '>TOTAL INCOME</span>
                  </div>
                  <span className='text-3xl '>${expenseSummary.total_income}</span>
                  <span className='text-sm text-gray-400'>{expenseSummary.income_transaction} transaction</span>
                </div>
        
                <div className='flex-1 flex flex-col gap-2 component-card'>
                  <div className='flex gap-2 items-center'>
                    <MoveDown color="#ff0a0a" />
                    <span className='text-sm '>TOTAL EXPENSE</span>
                  </div>
                  <span className='text-3xl '>${expenseSummary.total_expense}</span>
                  <span className='text-sm text-gray-400'>{expenseSummary.expense_transaction} transaction</span>
                </div>
            </section>
    )
}


export default OverviewCard