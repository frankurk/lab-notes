import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import MainNotes from '../components/MainNotes';
import Sidebar from '../components/Sidebar';
import Note from '../components/Note';

const Home = () => {
  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [notesArr, setNotesArr] = useState([]);
 
  //console.log(title, text);

  const newNote = () => {
    const notes = [];
    const obj = {
      title: title,
      text: text,
    };
    notes.push(obj)
    setNotesArr(notes)
    clearNote();
  };

  const clearNote = () => {
    setTitle('');
    setText('')
  }

  return (
    <div className="flex flex-row flex-wrap border-4 border-rose-500 w-full h-screen bg-white dark:bg-gray-800">
      <div className="border-4 border-orange-500 h-[8%] w-full">
        <Header />
      </div>
      <div className="border-4 border-blue-500 w-[15%] h-[92%]">
        <Sidebar />
      </div>
      <div className="border-4 border-green-500 w-[85%] h-[92%]">
        <MainNotes
          showInput={showInput}
          onClick={() => setShowInput(true)}
          titleValue={(e) => setTitle(e.target.value)}
          textValue={(e) => setText(e.target.value)}

          handleNoteClick={()=> newNote()}
          notesArr={notesArr}
        />
      </div>
    


    </div>
  );
};

export default Home;
