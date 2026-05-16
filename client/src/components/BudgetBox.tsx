// import custom 
import { useContext, useReducer } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";


import type { Category } from "../types/ExpenseType";


type Action =
  | { type: "change_food"; payload: number }
  | { type: "change_shopping"; payload: number }
  | { type: "change_bills"; payload: number }
  | { type: "change_entertainment"; payload: number }
  | { type: "change_transport"; payload: number }
  | { type: "change_freelance"; payload: number }
  | { type: "change_salary"; payload: number }
  | { type: "change_other"; payload: number }
  | { type: "change_title"; payload: string }
  | { type: "change_amount"; payload: number }
  | { type: "change_date"; payload: string }
  | { type: "change_category"; payload: string }
  | { type: "add_category"; payload: Category }
  | { type: "remove_category"; payload: number }

const reducer = (state: Category[], action: Action): Category[] => {
  switch (action.type) {
    case "add_category":
        return [...state, action.payload];

    case "remove_category":
    return state.filter((item) => item.id !== action.payload);

    case "change_food":
      return state.map((item) =>
        item.name === "food"
          ? { ...item, amount: action.payload }
          : item
      );

    case "change_shopping":
      return state.map((item) =>
        item.name === "shopping"
          ? { ...item, amount: action.payload }
          : item
      );

    case "change_bills":
      return state.map((item) =>
        item.name === "bills"
          ? { ...item, amount: action.payload }
          : item
      );

    case "change_entertainment":
      return state.map((item) =>
        item.name === "entertainment"
          ? { ...item, amount: action.payload }
          : item
      );

    case "change_transport":
      return state.map((item) =>
        item.name === "transport"
          ? { ...item, amount: action.payload }
          : item
      );

    case "change_freelance":
      return state.map((item) =>
        item.name === "freelance"
          ? { ...item, amount: action.payload }
          : item
      );

    case "change_salary":
      return state.map((item) =>
        item.name === "salary"
          ? { ...item, amount: action.payload }
          : item
      );

    case "change_other":
      return state.map((item) =>
        item.name === "other"
          ? { ...item, amount: action.payload }
          : item
      );

    default:
      return state;
  }
};


const categoryIndex: Category[] = [
  { id: 1, name: "food", amount: 0, used: 0, icon: "🍔" },
  { id: 2, name: "shopping", amount: 0, used: 0, icon: "🛍️" },
  { id: 3, name: "bills", amount: 0, used: 0, icon: "📄" },
  { id: 4, name: "entertainment", amount: 0, used: 0, icon: "🎮" },
  { id: 5, name: "transport", amount: 0, used: 0, icon: "🚌" },
  { id: 6, name: "freelance", amount: 0, used: 0, icon: "💻" },
  { id: 7, name: "salary", amount: 0, used: 0, icon: "💰" },
  { id: 8, name: "other", amount: 0, used: 0, icon: "📦" },
];



const BudgetBox = () => {
    const context = useContext(ExpenseContext);
    if (!context) return null;

    const { toggleBudgetBox, categories, createPlan, spending } = context;
    const [state, dispatch] = useReducer(reducer, categories);

    const totalBudget = state.reduce((acc, item) => acc + item.amount, 0)
    const totalSpending = Object.values(spending).reduce(
        (sum, value) => sum + value, 0
     );

    // handler 

    const handleInput = (
    field:
        | "food"
        | "shopping"
        | "bills"
        | "entertainment"
        | "transport"
        | "freelance"
        | "salary"
        | "other",
    value: string
    ) => {
    const amount = Number(value) || 0;

    switch (field) {
        case "food":
        dispatch({ type: "change_food", payload: amount });
        break;

        case "shopping":
        dispatch({ type: "change_shopping", payload: amount });
        break;

        case "bills":
        dispatch({ type: "change_bills", payload: amount });
        break;

        case "entertainment":
        dispatch({ type: "change_entertainment", payload: amount });
        break;

        case "transport":
        dispatch({ type: "change_transport", payload: amount });
        break;

        case "freelance":
        dispatch({ type: "change_freelance", payload: amount });
        break;

        case "salary":
        dispatch({ type: "change_salary", payload: amount });
        break;

        case "other":
        dispatch({ type: "change_other", payload: amount });
        break;
    }
    };

    const addCategory = () => {
        // find category not already added
        const newCategory = categoryIndex.find(
            (item1) =>
            !state.some(
                (item2) => item1.name === item2.name
            )
        );

        // stop if all added
        if (!newCategory) return;
        dispatch({
            type: "add_category",
            payload: newCategory,
        });
    }

    const removeCategory = (categoryId: number) => {
        dispatch({
            type: "remove_category",
            payload: categoryId,
        });
        
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createPlan(state);
    }

    return (
        <div className='fixed inset-0 bg-black/80 z-50 flex justify-center items-center'>
            <div className=' component-card w-[90%] max-w-md flex flex-col gap-2  max-h-dvh overflow-auto'>
                <div className='flex justify-between gap-2'>
                    <span className=' font-bold'>🎯 Budget Planner</span>
                    <button 
                    onClick={() => { toggleBudgetBox(false) }} 
                    className='size-6 p-2 border border-gray-800 rounded-lg flex justify-center items-center hover:bg-gray-400'>
                    x
                    </button>

                </div>

                <div className=" component-card flex flex-col gap-4">
                    <h1 className="w-full text-sm text-gray-400">📅 This Month's Overview </h1>
                    <div className="flex justify-between text-sm">
                        <span className=" text-gray-400">Total Budget</span><span className="text-blue-400">${totalBudget}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className=" text-gray-400">Spend This Month</span><span className="text-red-400">$ {totalSpending}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className=" text-gray-400">Remaining</span><span className="text-green-400">$ {totalBudget - totalSpending}</span>
                    </div>

                    {/* Add dynamic web progress bar */}
                    {
                        state.map( category => {
                            if (category.amount <= 0) return null;
                            const percent = (category.used / category.amount) * 100; 
                            return (
                                <div key={category.id} className=" relative text-xm text-gray-400">
                                    <span>{category.name}</span>
                                    <span className="block w-full h-1 bg-gray-800 rounded-2xl"></span>
                                    <span className="absolute bottom-0 block w-full h-1 bg-green-400 rounded-2xl" style={{width: `${percent <= 100 ? percent : 100}%`}}></span>
                                </div>
                            )
                        })
                    }

                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <ul className="text-sm flex flex-col gap-2 p-2">
                    {
                        state.map( category => {
                            return (                 
                                <li key={category.id} className="w-full flex justify-between items-center">
                                    <span>{category.icon} {category.name}</span>
                                    <div className="flex gap-2 items-center">
                                        <input onChange={ (e) => { handleInput(category.name, e.target.value) }} type="number" value={category.amount === 0 ? "" : category.amount} placeholder="$0.0" className=" border border-gray-800 rounded-lg p-2"/>
                                        <button onClick={() => { removeCategory(category.id)}} type="button" className=" size-8 text-xs border border-gray-800 rounded-lg">❌</button>
                                    </div>
                                </li>
                                )
                        })
                    }
                    </ul>
                    <input onClick={addCategory} type="button" value={'+ Add Category Budget'} className="p-2 text-gray-400 border border-dashed border-gray-800 rounded-lg w-full"/>
                    <input type="submit" value={'Save'} className="p-2 text-white border border-gray-800 bg-green-400 rounded-lg w-full"/>
                </form>
            </div>
        </div>
    )
};


export default BudgetBox;