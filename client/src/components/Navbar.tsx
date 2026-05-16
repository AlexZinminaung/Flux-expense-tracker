// import custom 
import { useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";

const Navbar = () => {
    const context = useContext(ExpenseContext);
    if (!context) return null;

    const { toggleBudgetBox } = context;

    return (
        <nav className='w-full flex flex-wrap gap-2 justify-between items-center border-b border-gray-800 py-8'>
            {/* For Logo */}
            <div className='flex flex-col'>
            <span className=' text-3xl font-bold bg-linear-to-r from-white to-blue-800 bg-clip-text text-transparent'>FLUX</span>
            <span className=' text-sm text-gray-400'>PERSONAL FINANCE DASHBOARD</span>
            </div>
            <div className="flex gap-2">
                <button onClick={ () => {toggleBudgetBox(true)}} className=' bg-white/10 p-2 rounded-lg text-sm text-gray-400 border border-gray-400' >Budget</button>
                <span className=' bg-white/10 p-2 rounded-lg text-sm text-gray-400 '>Sun, May 10, 2026</span>
            </div>
        </nav>
    )
}

export default Navbar;