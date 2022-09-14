import React, { useState } from 'react';
import kebab from '../assets/images/kebabmenu.png';

const Note = ({ title, text }) => {
  const [kebabmenu, setKebabMenu] = useState(false);

  return (
    <div clasName="flex flex-col">
      <div className="flex flex-col rounded-lg border border-white text-white w-60 m-5 h-fit p-3 break-words">
        <h2>{title}</h2>
        <p>{text}</p>
        <button
          className="flex justify-end"
          onClick={() => setKebabMenu(!kebabmenu)}
        >
          <img src={kebab} className="w-5" />
        </button>
      </div>

      {kebabmenu ? (
        <div className=" flex w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <button className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Edit
              </button>
            </li>
            <li>
              <button className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
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
