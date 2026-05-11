import { createContext, useState } from "react";
import type { ExpenseSummary, Transaction } from "../types/ExpenseType";


type ExpenseContextType = {
    expenseSummary: ExpenseSummary,
    transactions: Transaction[],
    // adding context fuction
    addTransaction: (transaction: Transaction) => void;
}

export const ExpenseContext = createContext<ExpenseContextType | null>(null);


const ExpenseProvider = ({ children }: { children: React.ReactNode }) => {
    
    const [expenseSummary, setExpenseSummery] = useState<ExpenseSummary>({total_balance: 0, total_income: 0, total_expense: 0})
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    // handler function
    const addTransaction = () => {

        console.log('Add Transcation!');
    }

    return (
        <ExpenseContext.Provider value={{expenseSummary, transactions, addTransaction}}>
            {children}
        </ExpenseContext.Provider>
    );
}


export default ExpenseProvider;