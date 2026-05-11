
interface ExpenseSummary {
    total_balance: number,
    total_income: number,
    total_expense: number
}

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: "income" | "expense";
  category:  "food" | "shopping" | "bills" | "transport" | "work" | "freelance" | "other"; 
  date: string;
}


export type { ExpenseSummary , Transaction};