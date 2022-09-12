import React, { useState, useEffect } from 'react';

const CreateNote = () => {
  const [showInput, setShowInput] = useState(false);

  const beforeFocus = (
    <div className="w-2/4 mt-5 p-3 rounded-lg border border-white h-14 text-white" >
      <input className="border-0 bg-transparent w-full outline-0 text-white font-semibold  placeholder:placeholder-opacity-10" placeholder='Take a note...'></input>
    </div>
  );

  return (
    <div className="flex flex-row justify-center" onClick={() => setShowInput(!showInput)} >
      {showInput ? (
        beforeFocus
      ) : (
        <form className="w-2/4 mt-5 p-3 rounded-lg border border-white">
          <input
            className="border-0 bg-transparent w-full outline-0 text-white font-semibold  my-4 placeholder:placeholder-opacity-10"
            placeholder="Title"
          ></input>
          <textarea
            className="border-0 w-full bg-transparent outline-0 text-white overflow-hidden min-h-3 resize-none"
            cols="30"
            rows="1"
            placeholder="Take a note..."
          ></textarea>
        </form>
      )}
    </div>
  );
};

export default CreateNote;
