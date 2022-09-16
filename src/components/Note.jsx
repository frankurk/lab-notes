import React, { useState } from 'react';
import kebab from '../assets/images/kebabmenu.png';

const Note = ({ title, text, onDelete }) => {
  const [kebabmenu, setKebabMenu] = useState(false);

  return (
    
        <div className=" relative flex flex-col rounded-lg border border-white text-white w-60 m-5 h-fit p-3 break-words">
          <h2>{title}</h2>
          <p>{text}</p>
          <button
            className="flex justify-end dropdown-toggle "
            onClick={() => setKebabMenu(!kebabmenu)}
          >
            <img src={kebab} className="w-5" />
          </button>

          {kebabmenu ? (
            <div className="absolute flex w-24 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700  z-50 py-2 mt-[70px] ml-28 m-0">
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <button className="w-24 text-left block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Edit
                  </button>
                </li>
                <li>
                  <button onClick={onDelete} className="w-24 text-left block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
     
  );
};

export default Note;


