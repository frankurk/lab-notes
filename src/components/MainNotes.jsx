import React from 'react';
import Note from './Note';

const MainNotes = ({showInput, onClick, titleValue, textValue, handleNoteClick, notesArr, title, text}) => {

 const closeNoteComponent = (
  <div className="w-2/4 mt-5 p-3 rounded-lg border border-white self-center" onClick={onClick}>
    <input className='border-0 bg-transparent w-full outline-0 ext-white font-semibold' placeholder="Take a note..."/>
  </div>
 )

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
        <div className='flex flex-row flex-wrap '>
        {notesArr ? notesArr.map((item, index) => 
          <Note title={item.title} text={item.text} key={index}/>
        ) : null}
        
      </div>
    </div>
  );
};

export default MainNotes;
