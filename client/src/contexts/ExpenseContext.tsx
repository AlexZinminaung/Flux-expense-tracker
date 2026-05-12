import { createContext, useEffect, useState } from "react";
import type { ExpenseSummary, Transaction, Spending } from "../types/ExpenseType";


type ExpenseContextType = {
    expenseSummary: ExpenseSummary,
    transactions: Transaction[],
    spending: Spending,
    // adding context fuction
    addTransaction: (transaction: Transaction) => void;
    removeTransaction: (transactionId: string) => void;
}

export const ExpenseContext = createContext<ExpenseContextType | null>(null);


const ExpenseProvider = ({ children }: { children: React.ReactNode }) => {
    
    const [expenseSummary, setExpenseSummery] = useState<ExpenseSummary>({total_balance: 0, total_income: 0, total_expense: 0, income_transaction: 0, expense_transaction: 0})
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    // tracking expense data by catagory
    const spending = transactions.reduce((acc, transaction) => {
        if (transaction.type === "expense") {
            acc[transaction.category] += transaction.amount;
        }
        return acc;
    }, { food: 0, shopping: 0, bills: 0, transport: 0, freelance: 0, work: 0, other: 0 });

    // fetch balance
    useEffect(() => {
        const total_balance = transactions.reduce((accumulator, currentValue) => {
            if (currentValue.type === "income") { return accumulator + currentValue.amount;}
            return accumulator - currentValue.amount;}, 0)

        const total_income = transactions.reduce((accumulator, currentValue) => {
            if (currentValue.type === "income") { return accumulator + currentValue.amount;}
            return accumulator;}, 0)
            
        const total_expense = transactions.reduce((accumulator, currentValue) => {
            if (currentValue.type === "expense") { return accumulator + currentValue.amount;}
            return accumulator;}, 0)    
            
        const total_income_transaction = transactions.reduce((accumulator, currentValue) => {
            if (currentValue.type == "income") { return accumulator + 1}
            return accumulator;}, 0)    
    
        const total_expense_transaction = transactions.reduce((accumulator, currentValue) => {
            if (currentValue.type == "expense") { return accumulator + 1}
            return accumulator;}, 0)   
        
        setExpenseSummery({ total_balance, 
                    total_income, 
                    total_expense, 
                    income_transaction: total_income_transaction, 
                    expense_transaction: total_expense_transaction,
                });

    }, [transactions])


    // handler function
    const addTransaction = (transaction: Transaction) => {
        setTransactions(prev => {
            return [...prev, transaction]
        })
    }

    const removeTransaction = (transactionId: string) => {

        const filterTransaction = transactions.filter( record => {
            return record.id != transactionId
        })

        setTransactions(filterTransaction);
    }

    return (
        <ExpenseContext.Provider value={{expenseSummary, transactions, addTransaction, removeTransaction, spending}}>
            {children}
        </ExpenseContext.Provider>
    );
}


export default ExpenseProvider;