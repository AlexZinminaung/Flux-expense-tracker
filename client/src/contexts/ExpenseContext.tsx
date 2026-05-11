import { createContext, useState } from "react";
import type { ExpenseSummary, Transaction } from "../types/ExpenseType";


type ExpenseContextType = {
    expenseSummary: ExpenseSummary,
    transactions: Transaction[],
    // adding context fuction
}

export const ExpenseContext = createContext<ExpenseContextType | null>(null);


const ExpenseProvider = ({ children }: { children: React.ReactNode }) => {
    
    const [expenseSummary, setExpenseSummery] = useState<ExpenseSummary>({total_balance: 0, total_income: 0, total_expense: 0})
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    return (
        <ExpenseContext.Provider value={{expenseSummary, transactions,}}>
            {children}
        </ExpenseContext.Provider>
    );
}


export default ExpenseProvider;