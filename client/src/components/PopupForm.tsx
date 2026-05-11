import { useReducer } from "react";

// import type
import type { Dispatch, SetStateAction } from "react";
import type { Transaction } from "../types/ExpenseType";

// import custom 
import { useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";


type Props = {
  setFormOpen: Dispatch<SetStateAction<boolean>>;
};
type TransactionType = "income" | "expense";
type TransactionCategory = "food" | "shopping" | "bills" | "transport" | "work" | "freelance" | "other"; 

type Action =
  | { type: "change_type"; payload: TransactionType }
  | { type: "change_title"; payload: string }
  | { type: "change_amount"; payload: number }
  | { type: "change_date"; payload: string }
  | { type: "change_category"; payload: TransactionCategory };

const initialState: Transaction = {
  id: 0,
  title: "",
  amount: 0,
  type: "income",
  category: "food",
  date: "",
};


const reducer = (state: Transaction, action: Action): Transaction => {
  switch (action.type) {
    case "change_type":
      return {
        ...state,
        type: action.payload,
      };

    case "change_title":
      return {
        ...state,
        title: action.payload,
      };

    case "change_amount":
      return {
        ...state,
        amount: action.payload,
      };

    case "change_date":
      return {
        ...state,
        date: action.payload,
      };

    case "change_category":
      return {
        ...state,
        category: action.payload,
      };

    default:
      throw new Error("Unknown action");
  }

}




const PopupForm = ({setFormOpen}: Props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const context = useContext(ExpenseContext);
    if (!context) return null;

    const { addTransaction } = context;

    // handler function
    const handleForm = ( field: "type" | "title" | "amount" | "date" | "category", value: string ) => {
        switch (field) {
          case "type":
            dispatch({type: "change_type", payload: value as TransactionType});
            break;

          case "title":
            dispatch({type: "change_title", payload: value});
            break;

          case "amount":
            const amount = Number(value) || 0; 
            dispatch({type: "change_amount", payload: amount});
            break;

          case "date":
            dispatch({type: "change_date", payload: value});
            break;

          case "category":
            dispatch({type: "change_category", payload: value as TransactionCategory});
            break;
        }
      };
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log(state);
    }

    return (
        <div className='fixed inset-0 bg-black/80 z-50 flex justify-center items-center'>
          <div className=' component-card w-[90%] max-w-md'>
            <div className='flex justify-between gap-2'>
              <span className=' font-bold'>New Transaction</span>
              <button onClick={() => { setFormOpen(false)}} className='size-6 p-2 border border-gray-800 rounded-lg flex justify-center items-center hover:bg-gray-400'>x</button>
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <label className=' text-sm text-gray-400'>TYPE</label>
              <div className='flex gap-2'>
                <button onClick={() => { handleForm("type", "income") }} type="button" className={`flex-1 border px-2 py-1 rounded-lg ${state.type == 'income' ? 'border-green-400':  'border-gray-800'}`}>Income</button>
                <button onClick={() => { handleForm("type", "expense") }} type="button"  className={`flex-1 border px-2 py-1 rounded-lg ${state.type == 'expense' ? 'border-green-400':  'border-gray-800'}`}>Expense</button>
              </div>
              <label className=' text-sm text-gray-400'>TITLE</label>
              <input value={state.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { handleForm("title", e.target.value)}} type='text' className='p-2 outline-none border border-gray-800 rounded-lg'/>

              <div className='flex flex-col sm:flex-row gap-2'>
                <div className='flex flex-col w-full gap-4'>
                  <label className=' text-sm text-gray-400'>AMOUNT ($)</label>
                  <input value={state.amount === 0 ? "" : state.amount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { handleForm("amount", e.target.value)}} type='number' className='p-2 outline-none border border-gray-800 rounded-lg'/>
                </div>
                <div className='flex flex-col w-full gap-4'>
                  <label className=' text-sm text-gray-400'>DATE</label>
                  <input value={state.date} onChange={(e) => handleForm("date", e.target.value)} type='date' className='p-2 outline-none border border-gray-800 rounded-lg'/>
                </div>
              </div>

              <label className=' text-sm text-gray-400'>CATEGORY</label>
              <select   value={state.category} onChange={(e) => handleForm("category", e.target.value)} className="p-2 outline-none border border-gray-800 rounded-lg">
                <option value="food">Food</option>
                <option value="shopping">Shopping</option>
                <option value="bills">Bills</option>
                <option value="transport">Transport</option>
                <option value="work">Work</option>
                <option value="freelance">Freelance</option>
                <option value="other">Other</option>

              </select>

              {/* submit */}
              <input className="p-2 bg-blue-500 rounded-lg" type="submit" value={'Add Transaction'}/>
            </form>
          </div>
        </div>
    );
}

export default PopupForm;