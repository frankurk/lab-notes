import React from 'react';
import Note from './Note';

const MainNotes = ({showInput, onClick, titleValue, textValue, handleNoteClick, notesArr}) => {

  console.log(notesArr, "notes Arr in MainNotes");

  return (
    <div className="flex flex-row justify-center" onClick={onClick}>
        <form className="w-2/4 mt-5 p-3 rounded-lg border border-white">
          {showInput ?
          <input
            onChange={titleValue}
            className="border-0 bg-transparent w-full outline-0 text-white font-semibold  my-4 placeholder:placeholder-opacity-10"
            placeholder="Title"
          /> : null}
          <textarea
            onChange={textValue}
            className="border-0 w-full bg-transparent outline-0 text-white overflow-hidden min-h-3 resize-none"
            cols="30"
            rows="1"
            placeholder="Take a note..."
          />
          <button type='button' className="bg-transparent outline-0 text-white font-semibold" onClick={handleNoteClick}>
           Close
          </button>
        </form>
        <div>
        {notesArr ? notesArr.map((item, index) => 
          <Note title={item.title} text={item.text} key={index}/>
        ) : null}
        
      </div>
    </div>
  );
};

export default MainNotes;
