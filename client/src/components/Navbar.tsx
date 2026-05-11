
const Navbar = () => {

    return (
    <nav className='w-full flex flex-wrap gap-2 justify-between items-center border-b border-gray-800 py-8'>
        {/* For Logo */}
        <div className='flex flex-col'>
          <span className=' text-3xl font-bold bg-linear-to-r from-white to-blue-800 bg-clip-text text-transparent'>FLUX</span>
          <span className=' text-sm text-gray-400'>PERSONAL FINANCE DASHBOARD</span>
        </div>
        <span className=' bg-white/10 p-2 rounded-lg text-sm text-gray-400'>Sun, May 10, 2026</span>
    </nav>
    )
}

export default Navbar;