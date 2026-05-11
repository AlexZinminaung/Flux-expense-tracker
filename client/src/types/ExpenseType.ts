
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
  category: string;
  date: string;
}


export type { ExpenseSummary , Transaction};