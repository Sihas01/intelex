import React, { useState } from 'react'
import '../css/navbar.css';
import { motion } from 'framer-motion'

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-slate-950 sticky top-0 w-full z-20"
    >


      <nav className='text-white flex justify-between items-center px-[24px] lg:px-[51px] py-5'>
        <div className="brand font-title lg:text-2xl text-2xl">
          INTELEX
        </div>

        <div className="lg:hidden flex items-center" onClick={handleNav}>
          <button className="mobile-menu-button" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>bars-3-bottom-left</title>
              <g fill="none">
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
          </button>
        </div>



        <div className="nav-items hidden lg:block">
          <ul className='flex gap-4 text-base text-[#dfecfa] font-body font-medium items-center'>
            <li className='cursor-pointer hover:text-purple-400 transition-colors'>Products </li>
            <li className='cursor-pointer hover:text-purple-400 transition-colors'>Why</li>
            <li className='cursor-pointer hover:text-purple-400 transition-colors'>Customers</li>
            <li className='cursor-pointer hover:text-purple-400 transition-colors'>Category</li>
            <li className='cursor-pointer hover:text-purple-400 transition-colors'>Pricing</li>
            <li className='cursor-pointer hover:text-purple-400 transition-colors'>About us</li>

          </ul>
        </div>

        <div className="login text-[#dfecfa] hidden lg:block">
          <div className="wrapper ">
            <a href="#" className='buttonOne'><span>GET STATED</span></a>
          </div>


        </div>

        <ul
          className={
            nav
              ? 'fixed lg:hidden left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#070510] ease-in-out duration-500 p-5 text-center'
              : 'ease-in-out w-[70%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
          {/* Mobile Logo */}
          <div className="brand font-title lg:text-2xl text-2xl text-center mt-5 mb-5">
            INTELEX
          </div>
          <hr />
          {/* Mobile Navigation Items */}

          <li className='p-4 border-b rounded-xl hover:bg-[#ccbdee18] duration-300 hover:text-white cursor-pointer border-none mt-12'>Products</li>
          <li className='p-4 border-b rounded-xl hover:bg-[#ccbdee18] duration-300 hover:text-white cursor-pointer border-none '>Why</li>
          <li className='p-4 border-b rounded-xl hover:bg-[#ccbdee18] duration-300 hover:text-white cursor-pointer border-none '>Customers</li>
          <li className='p-4 border-b rounded-xl hover:bg-[#ccbdee18] duration-300 hover:text-white cursor-pointer border-none '>Category</li>
          <li className='p-4 border-b rounded-xl hover:bg-[#ccbdee18] duration-300 hover:text-white cursor-pointer border-none '>Pricing</li>
          <li className='p-4 border-b rounded-xl hover:bg-[#ccbdee18] duration-300 hover:text-white cursor-pointer border-none '>About us</li>

          <div className="login text-[#dfecfa] mt-5 mx-12">
            <div className="wrapper ">
              <a href="#" className='buttonOne'><span>GET STATED</span></a>
            </div>


          </div>

        </ul>
      </nav>
    </motion.div>
  )
}

export default Navbar
