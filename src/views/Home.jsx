import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import NotesContainer from '../components/NotesContainer';

const Home = () => {
  return (
    <div
      className=" 
    border-4 border-rose-500 w-full h-screen"
    >
      <div className="border-4 border-orange-500 h-[8%]">
        <Header />
      </div>

      <div className=" flex flex-row border-4 border-yellow-500 h-[92%] ">
        <div className=" basis-20 border-4 border-blue-500 bg-white dark:bg-gray-800 ">
          <Sidebar />
        </div>
        <div className="basis-full border-4 border-green-500">
          <NotesContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
