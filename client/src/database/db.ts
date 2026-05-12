// db.ts
import { Dexie, type EntityTable } from "dexie"

// import type 
import type { Transaction  } from '../types/ExpenseType';

const db = new Dexie("ExpenseTrackerDB") as Dexie & {
  transactions: EntityTable<Transaction, "id">
}

// Schema declaration:
db.version(1).stores({
  transactions: "id, title, type, amount, category, date" ,
})

export { db }
