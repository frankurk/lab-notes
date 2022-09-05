import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import NotesContainer from '../components/NotesContainer';

const Home = () => {
  return (
    <div
      className=" grid grid-cols-3 auto-rows-max
    border-4 border-rose-500 w-full h-full"
    >
      <div className="col-span-3 border-4 border-orange-500 ">
        <Header />
      </div>
      <div className="col-span-1 row-span-5 border-4 border-blue-500 ">
        <Sidebar />
      </div>

      <div className="col-span-2 row-span-5 border-4 border-yellow-500  ">
        <NotesContainer />
      </div>
    </div>
  );
};

export default Home;
