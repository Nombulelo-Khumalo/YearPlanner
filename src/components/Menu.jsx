import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Menu = () => {
  const [toggle, setToggle] = useState(false); 

  const navItems = [
    { name: 'Mentor', path: '/mentor' },
    { name: 'Analysis', path: '/analysis' },
    { name: 'AI Mentor', path: '/ai' },
    { name: 'Journal', path: '/journal' },
    { name: 'Wishlist', path: '/wishlist' },
    
  ];

  return (
    <nav className="w-full flex justify-between items-center bg-gray-800 p-3 shadow-md">
      <a href="#home">
        <div className="w-[80px] h-[80px] text-white flex items-center justify-center">
          <span className="font-poppins text-2xl font-bold ml-10">VisionBoard</span> 
        </div>
      </a>
     
      <ul className="list-none md:flex hidden  justify-end items-center flex-1 mr-6">
        {navItems.map((nav, index) => (
          <li
            key={nav.path}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navItems.length - 1 ? 'mr-0' : 'mr-10'
            } text-white hover:text-blue-900 duration-200 ease-out`}
          >
            <Link to={nav.path}>{nav.name}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex flex-1 justify-end items-center">
        <div onClick={() => setToggle(prev => !prev)}>
          {toggle ? (
            <FaTimes className="text-white w-[28px] h-[28px]" />
          ) : (
            <FaBars className="text-white w-[28px] h-[28px]" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-gray-700 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navItems.map((nav, index) => (
              <li
                key={nav.path}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navItems.length - 1 ? 'mb-0' : 'mb-4'
                } text-white hover:text-purple-900 duration-200 ease-in`}
              >
                <Link to={nav.path}>{nav.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
