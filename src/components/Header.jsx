import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Dark.png';
import Avatar from '../assets/images/Avatar.png';

const Header = () => {

  const [menu, setMenu] = useState(false);


  return (
    <div className="flex flex-row justify-between items-center text-white py-1 px-4">
      <div className="flex flex-row items-center">
        <img src={Logo} className="w-12 h-12 mx-2" />
        <h3 className="text-xl font-semibold">LabNotes</h3>
      </div>
      <div>
        <button
        onClick={() => setMenu(!menu)}
          type="button"
        >
           <img src={Avatar} className="w-12 h-12 mx-2" />
        </button>
       {menu ? <div
          className="fixed right-4 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
          >
            <li>
              <Link
                to="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </Link>
            </li>
          </ul>
        </div> : null}
        
      </div>
    </div>
  );
};

export default Header;
