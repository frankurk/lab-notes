import React from 'react';

const Header = () => {
  return (
    <div className='flex flex-row justify-between p-4 bg-white dark:bg-gray-800 text-white '>
      <div className='flex flex-row'>
        <div>Logo</div>
        <h3>LabNotes</h3>
      </div>
      <div className='flex flex-row'>
        <div>Avatar</div>
        <div> Hamburger Menu</div>
      </div>
    </div>
  );
};

export default Header;
