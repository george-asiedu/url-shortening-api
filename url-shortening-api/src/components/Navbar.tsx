import { NavLink } from 'react-router-dom' 

const Navbar = () => {
  return (
    <div className='flex items-center w-full overflow-hidden fixed top-0 py-8 px-5 sm:px-20 z-10 justify-between bg-inherit'>
        <div className='flex items-center'>
            <h1 className='text-4xl sm:mr-8'>Shortly</h1>
            <nav className='text-gray-600 hidden sm:flex'>
                <NavLink to="/">Features</NavLink>
                <NavLink to="/" className="pl-5">Pricing</NavLink>
                <NavLink to="/" className="pl-5">Resources</NavLink>
            </nav>
        </div>
        <div className='hidden sm:flex'>
            <NavLink to="/" className="py-1 px-3 mr-3">Login</NavLink>
            <NavLink to="/" className="bg-teal-400 w-full py-1 px-12 sm:px-6 text-white rounded-full">Signup</NavLink>
        </div>
    </div>
  )
}

export default Navbar