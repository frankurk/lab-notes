import React, { useRef, useState } from "react";
import Note from "./Note";
import { deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/init";
import Modal from "react-modal";
import Masonry from "react-masonry-css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MainNotes = ({
  showInput,
  onClick,
  titleValue,
  textValue,
  handleNoteClick,
  notesArr,
  title,
  text,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState("");
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedText, setUpdatedText] = useState("");

  const textAreaRef = useRef(null);
  const modalRef = useRef(null);
  const ref = useRef(null);
  Modal.setAppElement("#root");
  const MySwal = withReactContent(Swal);

  //CLOSING NOTE COMPONENT
  const closeNoteComponent = (
    <div
      className="w-2/4 mt-5 p-3 rounded-lg border border-gray-500 self-center"
      onClick={onClick}
    >
      <input
        className="border-0 bg-transparent w-full outline-0 ext-white font-semibold"
        placeholder="Take a note..."
      />
    </div>
  );

  //AUTOGROW NOTE COMPONENT
  const autoGrow = (elem) => {
    elem.current.style.height = "5px";
    elem.current.style.height = 10 + elem.current.scrollHeight + "px";
  };

  //DELETE NOTE
  const deleteNote = async (id) => {
    await deleteDoc(doc(db, "notes", id));
  };

  const deleteConfirmation = (id) => {
    MySwal.fire({
      title: "Are you sure you want to delete this note?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#6fbf73",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire("Deleted!", "Your file has been deleted.", "success");
        deleteNote(id);
      }
    });
  };

  //EDIT NOTE
  const editNote = async (id) => {
  
  let titleToSend = updatedTitle != "" ? updatedTitle : selectedNote.title;
  let textToSend =  updatedText != "" ? updatedText : selectedNote.text;

    //console.log(titleToSend , textToSend, "selecteddata before send")
    if ( titleToSend != '' || textToSend != '') {
      console.log("inside update")
      const noteRef = doc(db, 'notes', id);
      await updateDoc(noteRef, {
        title: titleToSend,
        text: textToSend,
      });
      setSelectedNote("");
      setIsOpen(false);
    } else {
      console.log("not sent ? ",id)
      setIsOpen(false);
    }
  }; 
 

  // OPENING MODAL SELECTING NOTE
  const openModal = (id) => {
    notesArr.map((item) => {
      if (item.id === id) {
        setIsOpen(true);
        setSelectedNote(item);
      }
    });
  };

  return (
    <>
      <div ref={ref} className="flex flex-col justify-center">
        {showInput ? (
          <form className="w-2/4 my-5 p-5 rounded-lg border border-gray-500 self-center">
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
        <div>
          <Masonry breakpointCols={{ default: 5, 1500: 4, 1200: 3, 800:2, 500:1 }} className="flex">
            {notesArr
              ? notesArr.map((item) => (
                  <Note
                    title={item.title}
                    text={item.text}
                    onDelete={() => deleteConfirmation(item.id)}
                    onEdit={() => openModal(item.id)}
                    key={item.id}
                  />
                ))
              : null}
          </Masonry>
        </div>
      </div>

      {/*MODAL*/}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => openModal()}
        contentLabel="My dialog"
        className="absolute w-2/5 p-0 rounded-lg after:bg-gray-700 ml-[30%] mt-36 z-50"
        ref={modalRef}
        style={{ overlay: { backgroundColor: "rgba(9, 9, 14, 0.6)" } }}
      >
        <div>
          <form className="w-full p-5 rounded-lg border border-white self-center dark:bg-gray-800">
            <input
              name="editedTitle"
              onChange={e => setUpdatedTitle(e.target.value)}
              defaultValue={selectedNote.title }
              className="border-0 bg-transparent w-full outline-0 text-white font-semibold  my-4 placeholder:placeholder-opacity-10"
              placeholder="Title"
            />
            <textarea
              name="editedText"
              onChange={e => setUpdatedText(e.target.value)}
              ref={textAreaRef}
              onInput={() => autoGrow(textAreaRef)}
              defaultValue={selectedNote.text}
              className="border-0 w-full bg-transparent outline-0 text-white overflow-hidden min-h-3 resize-none"
              cols="30"
              rows="1"
              placeholder="Take a note..."
            />
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-transparent outline-0 text-white font-semibold"
                onClick={() =>{
                  editNote(
                    selectedNote.id
                  )
                setUpdatedTitle("");
                setUpdatedText("");
                }
                }
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default MainNotes;
