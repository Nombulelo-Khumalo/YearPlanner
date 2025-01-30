import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartBar, FaTasks, FaCog } from 'react-icons/fa'; 

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Analysis', path: '/analysis', icon: <FaChartBar /> },
    { name: 'Board', path: '/visionboard', icon: <FaTasks /> },
    { name: 'Settings', path: '/settings', icon: <FaCog /> },
  ];

  return (
    <div>
      <nav className="fixed bottom-0 left-0 w-full bg-gray-800 text-white sm:block lg:hidden">
        <ul className="flex justify-around items-center py-2">
          {navItems.map((nav, index) => (
            <li key={index} className="flex flex-col items-center justify-center text-xs">
              <Link to={nav.path} className="flex flex-col items-center">
                <div className="text-2xl">{nav.icon}</div>
                <span className="mt-1">{nav.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Navbar for Large Screens */}
      <nav className="fixed bottom-0 right-0 transform -translate-y-1/2 hidden lg:flex lg:flex-col items-center list-none space-y-10 bg-gray-800 p-4 rounded-l-xl">
        {navItems.map((nav, index) => (
          <li key={index} className="text-white text-2xl ">
            <Link to={nav.path} className="flex items-center justify-center ">
              {nav.icon}
            </Link>
          </li>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
