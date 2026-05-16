// db.ts
import { Dexie, type EntityTable } from "dexie"

// import type 
import type { Transaction, Category  } from '../types/ExpenseType';

const db = new Dexie("ExpenseTrackerDB") as Dexie & {
  transactions: EntityTable<Transaction, "id">;
  categories: EntityTable<Category, "id">;
  
}

// Schema declaration:
db.version(1).stores({
  transactions: "id, title, type, amount, category, date" ,
})

// NEW VERSION
db.version(2).stores({
  transactions: "id, title, type, amount, category, date",
  categories: "id, name, amount, used",
});

export { db }
