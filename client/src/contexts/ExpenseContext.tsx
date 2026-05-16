import { createContext, useEffect, useState } from "react";
import type { ExpenseSummary, Transaction, Spending, MonthlySummary, Category } from "../types/ExpenseType";
import { db } from "../database/db";

type ExpenseContextType = {
    expenseSummary: ExpenseSummary,
    transactions: Transaction[],
    spending: Spending,
    monthlySummary: MonthlySummary[],
    isBudgetOpen: boolean,
    categories: Category[],
    // adding context fuction
    addTransaction: (transaction: Transaction) => void;
    removeTransaction: (transactionId: string) => void;
    toggleBudgetBox: (option: boolean) => void;
    createPlan: (data: Category[]) => void;
}

export const ExpenseContext = createContext<ExpenseContextType | null>(null);


const ExpenseProvider = ({ children }: { children: React.ReactNode }) => {
    
    const [expenseSummary, setExpenseSummery] = useState<ExpenseSummary>({total_balance: 0, total_income: 0, total_expense: 0, income_transaction: 0, expense_transaction: 0})
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isBudgetOpen, setBudgetOpen] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);

    // fetch data from database
    useEffect(() => {
  const loadData = async () => {
        try {
            const [transactions, categories] = await Promise.all([
                db.transactions.toArray(),
                db.categories.toArray(),
            ]);

            setTransactions(transactions);
            setCategories(categories);
            } catch (error) {
            console.error("Failed to load DB data:", error);
            }
        }


        loadData()
    }, [])

    // tracking expense data by catagory
    const spending = transactions.reduce((acc, transaction) => {
        if (transaction.type === "expense") {
            acc[transaction.category] += transaction.amount;
        }
        return acc;
    }, { food: 0, shopping: 0, bills: 0, entertainment: 0, transport: 0, freelance: 0, salary: 0, other: 0 });

    // tracking expense and income by months

    const monthlySummary = transactions.reduce<MonthlySummary[]>((acc, item) => {
    const month = new Date(item.date).toLocaleString("en-US", {
        month: "long",
    });

    const existingMonth = acc.find(m => m.month === month);

    if (existingMonth) {
        if (item.type === "expense") {
        existingMonth.totalExpense += item.amount;
        } else {
        existingMonth.totalIncome += item.amount;
        }
    } else {
        acc.push({
        month,
        totalExpense: item.type === "expense" ? item.amount : 0,
        totalIncome: item.type === "income" ? item.amount : 0,
        });
    }

    return acc;
    }, []);

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

        const now = new Date();
        const currentMonth = now.getMonth() + 1;
        const currentYear = now.getFullYear();
        const currentTransactions = transactions.filter(record => {
            if (record.type == 'income') return ;
            const date = new Date(record.date);

            return (
                date.getMonth() + 1 === currentMonth &&
                date.getFullYear() === currentYear
            );
        });

        setCategories(prev => {
            return prev.map(category => {
                const totalUsed = currentTransactions
                .filter(t => t.category === category.name)
                .reduce((sum, t) => sum + t.amount, 0);

                return {
                ...category,
                used: totalUsed,
                };
            });
        });

    

    }, [transactions])


    // handler function
    const addTransaction = async (transaction: Transaction) => {
        await db.transactions.add(transaction);

        setTransactions(prev => {
            return [...prev, transaction]
        })

    }

    const toggleBudgetBox = (option: boolean) => {
        setBudgetOpen(option);
    }

    const removeTransaction = async (transactionId: string) => {
        await db.transactions.delete(transactionId);
        const filterTransaction = transactions.filter( record => {
            return record.id != transactionId
        })

        setTransactions(filterTransaction);
    }

    const createPlan = async (data: Category[]) => {
        await db.categories.bulkPut(data);
        setCategories(data);
        
    }

    return (
        <ExpenseContext.Provider value={{   expenseSummary, transactions, spending, monthlySummary, isBudgetOpen, categories, 
                                            addTransaction, removeTransaction, toggleBudgetBox, createPlan
                                        }}>
            {children}
        </ExpenseContext.Provider>
    );
}


export default ExpenseProvider;