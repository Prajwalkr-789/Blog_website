import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import navbarimg from '../utils/_ed3f7202-34d4-47ba-bafc-2fabe0b1ddaa.jpg'

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const checkMobile = () => {
    if (window.innerWidth < 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsDropdownOpen(false); // Close dropdown if switching to desktop view
    }
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <nav className='bg-white fixed z-10 top-0 border-gray-200 w-full'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <div className='flex'>
          <img className='w-10 rounded-full' src={navbarimg} alt="" />
        <a href="/" className='flex items-center space-x-3 rtl:space-x-reverse'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap'>Blogger</span>
        </a>
        </div>
        
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
          aria-controls="navbar-default"
          aria-expanded={isDropdownOpen}
          onClick={toggleDropdown}
        >
          <span className='sr-only'>Open main menu</span>
          <svg className='w-5 h-5' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${isDropdownOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white'>
            <li>
              <Link to="/" className='block text-lg py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0' aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/display" className='block text-lg py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'>Blogs</Link>
            </li>
            <li>
              <Link to="/create" className='block text-lg py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'>Create</Link>
            </li>
            <li>
              <Link to="/signin" className='block  text-lg py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'>Sign in</Link>
            </li>
            <li>
              <Link to="contact" className='block text-lg py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'>Contact us</Link>
            </li>
            <li>
              <Link to="/logout" className='block text-lg py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'>Log out</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
