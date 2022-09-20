import React, { useRef, useState } from 'react';
import Note from './Note';

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
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState('');

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

  const deleteNote = (id) => {
    setNotesArr(notesArr.filter((item) => item.id !== id));
  };

  const closeModal = () => {
    modalRef.current.close();
  };

  const openModal = (id) => {
    notesArr.map((item) => {
      if (item.id === id) {
        setIsOpen(!isOpen);
        setSelectedNote(item);
        modalRef.current.showModal();
      }
    });
  };

  return (
    <>
      <div ref={ref} className="flex flex-col justify-center">
        {showInput ? (
          <form className="w-2/4 my-5 p-5 rounded-lg border border-white self-center">
            <input
              onChange={titleValue}
              value={title}
              className="border-0 bg-transparent w-full outline-0 text-white font-semibold  my-4 placeholder:placeholder-opacity-10"
              placeholder="Title"
            />
            <textarea
              onChange={textValue}
              ref={textAreaRef}
              onInput={() => autoGrow(textAreaRef)}
              value={text}
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
              onChange={titleValue}
              value={selectedNote.title}
              className="border-0 bg-transparent w-full outline-0 text-white font-semibold  my-4 placeholder:placeholder-opacity-10"
              placeholder="Title"
            />
            <textarea
              onChange={textValue}
              ref={textAreaRef}
              onInput={() => autoGrow(textAreaRef)}
              value={selectedNote.text}
              className="border-0 w-full bg-transparent outline-0 text-white overflow-hidden min-h-3 resize-none"
              cols="30"
              rows="1"
              placeholder="Take a note..."
            />
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-transparent outline-0 text-white font-semibold"
                onClick={() => closeModal()}
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
