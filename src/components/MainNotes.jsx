import React, { useRef } from 'react';
import Note from './Note';

const MainNotes = ({showInput, onClick, titleValue, textValue, handleNoteClick, notesArr, setNotesArr, title, text}) => {

  const textAreaRef = useRef(null);
  
 const closeNoteComponent = (
  <div className="w-2/4 mt-5 p-3 rounded-lg border border-white self-center" onClick={onClick}>
    <input className='border-0 bg-transparent w-full outline-0 ext-white font-semibold' placeholder="Take a note..."/>
  </div>
 )

 const autoGrow = (elem) =>{
  elem.current.style.height = "5px";
  elem.current.style.height = (10 + 
  elem.current.scrollHeight)+"px";
}

const deleteNote = id => {
  setNotesArr(notesArr.filter(item => item.id !== id));
};

  return (
    <div className="flex flex-col justify-center " >
       {showInput ? 
        <form className="w-2/4 my-5 p-3 rounded-lg border border-white self-center">
  
          <input
            onChange={titleValue}
            value={title}
            className="border-0 bg-transparent w-full outline-0 text-white font-semibold  my-4 placeholder:placeholder-opacity-10"
            placeholder="Title"
          /> 
          <textarea
            onChange={textValue}
            ref={textAreaRef}
            onInput={()=>autoGrow(textAreaRef)}
            value={text}
            className="border-0 w-full bg-transparent outline-0 text-white overflow-hidden min-h-3 resize-none"
            cols="30"
            rows="1"
            placeholder="Take a note..."
          />
          <button type='button' className="bg-transparent outline-0 text-white font-semibold" onClick={handleNoteClick}>
           Close
          </button> 
        </form> 
        : closeNoteComponent }
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2'>
        {notesArr ? notesArr.map((item) => 
          <Note title={item.title} text={item.text} onDelete={() => deleteNote(item.id)} key={item.id}/>
        ) : null}
        
      </div>
    </div>
  );
};

export default MainNotes;
