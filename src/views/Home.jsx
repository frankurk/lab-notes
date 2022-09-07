import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import NotesContainer from '../components/NotesContainer';

const Home = () => {
  return (
    <div className="flex flex-row flex-wrap border-4 border-rose-500 w-full h-screen bg-white dark:bg-gray-800">
      <div className="border-4 border-orange-500 h-[8%] w-full">
        <Header />
      </div>
      <div className="border-4 border-blue-500 w-[15%] h-[92%]">
        <Sidebar />
      </div>
      <div className="border-4 border-green-500 w-[85%] h-[92%]">
        <NotesContainer />
      </div>
    </div>
  );
};

export default Home;
