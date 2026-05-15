
interface ExpenseSummary {
    total_balance: number,
    total_income: number,
    total_expense: number,
    income_transaction: number,
    expense_transaction: number
}

interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: "income" | "expense";
  category:  "food" | "shopping" | "bills" | "transport"| "entertainment" | "salary" | "freelance" | "other"; 
  date: string;
}

interface Spending {
  food: number,
  shopping: number,
  bills: number,
  entertainment: number,
  transport: number,
  freelance: number,
  salary: number,
  other: number,
}

interface MonthlySummary {
  month: string,
  totalExpense: number,
  totalIncome: number,
  
}


export type { ExpenseSummary , Transaction, Spending, MonthlySummary };