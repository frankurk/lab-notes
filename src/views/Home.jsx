import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import MainNotes from '../components/MainNotes';
import Sidebar from '../components/Sidebar';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/init';

const Home = () => {
  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [notesArr, setNotesArr] = useState([]);

  //CREATING A NOTE
  const newNote = async () => {
    if (text !== '' || title !== '') {
      await addDoc(collection(db, 'notes'), {
        title: title,
        text: text,
     
      });
    }
    setTitle('');
    setText('');
    setShowInput(false);
  };

  //FETCHING NOTES FROM FIREBASE
useEffect(() => {
  onSnapshot(collection(db, "notes"), snapshot => {
    const notesFromFirestore = snapshot.docs.map(note => {
      return {
        id: note.id,
        ...note.data(),
      }
    })
    setNotesArr(notesFromFirestore)
  })
}, [])

  return (
    <div className="flex flex-row flex-wrap border-4 border-rose-500 w-full h-screen bg-white dark:bg-gray-800">
      <div className="border-4 border-orange-500 h-[8%] w-full">
        <Header />
      </div>
      <div className="border-4 border-blue-500 w-[15%] h-[92%]">
        <Sidebar />
      </div>
      <div className="border-4 border-green-500 px-12  w-[85%] h-[92%] overflow-scroll">
        <MainNotes
          showInput={showInput}
          onClick={() => setShowInput(true)}
          titleValue={e => setTitle(e.target.value)}
          textValue={e => setText(e.target.value)}
          title={title}
          text={text}
          handleNoteClick={() => newNote()}
          notesArr={notesArr}
          setNotesArr={setNotesArr}
        />
      </div>
    </div>
  );
};

export default Home;
