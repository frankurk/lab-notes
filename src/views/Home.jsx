import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import MainNotes from '../components/MainNotes';
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
  orderBy, 
  Timestamp
} from 'firebase/firestore';
import { db } from '../firebase/init';

const Home = () => {
  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [notesArr, setNotesArr] = useState([]);

  const userUid = localStorage.getItem('userUid');

  //CREATING A NOTE
  const newNote = async () => {
    if (text !== '' || title !== '') {
      await addDoc(collection(db, 'notes'), {
        title: title,
        text: text,
        userUid: userUid,
        date: Timestamp.fromDate(new Date())
      });
    }
    setTitle('');
    setText('');
    setShowInput(false);
  };

  //FETCHING NOTES FROM FIREBASE BY USER
  useEffect(() => {
    const q = query(collection(db, "notes"), where("userUid", "==", userUid), orderBy("date", "desc"));
    onSnapshot(q , snapshot => {
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
    <div className="flex flex-row flex-wrap w-full h-screen bg-white dark:bg-gray-800">
      <div className="border-2 h-[8%] w-full border-gray-500">
        <Header />
      </div>
      <div className="border border-gray-500 px-12  w-full h-[92%] overflow-scroll">
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
          setTitle={setTitle}
          setText={setText}
        />
      </div>
    </div>
  );
};

export default Home;
