import React, { useRef, useState } from 'react';
import Note from './Note';
import { deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from "../firebase/init";

const MainNotes = ({
  showInput,
  onClick,
  titleValue,
  textValue,
  handleNoteClick,
  notesArr,
  setNotesArr,
  title,
  text,
  setTitle
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const textAreaRef = useRef(null);
  const modalRef = useRef(null);
  const ref = useRef(null);

  const closeNoteComponent = (
    <div
      className="w-2/4 mt-5 p-3 rounded-lg border border-white self-center"
      onClick={onClick}
    >
      <input
        className="border-0 bg-transparent w-full outline-0 ext-white font-semibold"
        placeholder="Take a note..."
      />
    </div>
  );

  const autoGrow = (elem) => {
    elem.current.style.height = '5px';
    elem.current.style.height = 10 + elem.current.scrollHeight + 'px';
  };

  //DELETE NOTE 
  const deleteNote = async (id) => {
    await deleteDoc(doc(db, "notes", id));
  };

  //EDIT NOTE 
const editNote = async (id, title, text) => {
  const noteRef = doc(db, "notes", id);
  await updateDoc(noteRef, {
    id,
    title,
    text,
  });
  setSelectedNote(null)
  closeModal();
}

  const closeModal = () => {
    modalRef.current.close();
  };

  const openModal = (id) => {
    notesArr.map((item) => {
      if (item.id === id) {
        setSelectedNote(item);
        setIsOpen(!isOpen);
        modalRef.current.showModal();
      }
    });
  };

  const handleEdit = ({target}) => {
    const { name, value } = target;
    setSelectedNote((prev) => ({
      ...prev,
      [name]: value,
    }))
  }


  console.log(selectedNote);

  return (
    <>
      <div ref={ref} className="flex flex-col justify-center">
        {showInput ? (
          <form className="w-2/4 my-5 p-5 rounded-lg border border-white self-center">
            <input
              onChange={titleValue}
              className="border-0 bg-transparent w-full outline-0 text-white font-semibold  my-4 placeholder:placeholder-opacity-10"
              placeholder="Title"
            />
            <textarea
              onChange={textValue}
              ref={textAreaRef}
              onInput={() => autoGrow(textAreaRef)}
              className="border-0 w-full bg-transparent outline-0 text-white overflow-hidden min-h-3 resize-none"
              cols="30"
              rows="1"
              placeholder="Take a note..."
            />
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-transparent outline-0 text-white font-semibold mr-2"
                onClick={handleNoteClick}
              >
                Close
              </button>
            </div>
          </form>
        ) : (
          closeNoteComponent
        )}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
          {notesArr
            ? notesArr.map((item) => (
                <Note
                  title={item.title}
                  text={item.text}
                  onDelete={() => deleteNote(item.id)}
                  onEdit={() => openModal(item.id)}
                  key={item.id}
                />
              ))
            : null}
        </div>
      </div>

      <dialog className="w-2/5 p-0 rounded-lg bg-white mt-36" ref={modalRef}>
        <div className="backdrop-sepia bg-white/30">
          <form className="w-full p-5 rounded-lg border border-white self-center dark:bg-gray-800">
            <input
              name='editedTitle'
              onChange={handleEdit}
              defaultValue={selectedNote?.title || ''}
              className="border-0 bg-transparent w-full outline-0 text-white font-semibold  my-4 placeholder:placeholder-opacity-10"
              placeholder="Title"
            />
            <textarea
              name='editedText'
              onChange={handleEdit}
              ref={textAreaRef}
              onInput={() => autoGrow(textAreaRef)}
              defaultValue={selectedNote?.text || ''}
              className="border-0 w-full bg-transparent outline-0 text-white overflow-hidden min-h-3 resize-none"
              cols="30"
              rows="1"
              placeholder="Take a note..."
            />
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-transparent outline-0 text-white font-semibold"
                onClick={() => editNote(selectedNote?.id, selectedNote?.editedTitle, selectedNote?.editedText)}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default MainNotes;





import React, { useState } from "react";
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

export default function AppFunction() {
const [tasks, setTasks] useState([])

const handleChange = (e) => {
  setTasks((prev) => ({
    ...prev,
    e.target.value,
    id: Date.now()
  }))
}

const handleSubmit = (e) => {
   e.preventDefault();
}

const handleDelete = (id) => {
  tasks.filter((task) => task.id !== id);
}

return (
      <main>
        <h1>Tasks</h1>
        <NewTask
          newTask={this.state.newTask}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TasksList
          allTasks={this.state.allTasks}
          handleDelete={this.handleDelete}
        />
      </main>
    );
}