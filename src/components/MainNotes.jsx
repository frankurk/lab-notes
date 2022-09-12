import React, { useState, useEffect } from 'react';

const MainNotes = ({showInput, onClick, titleValue, textValue}) => {

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
          <button type='button' className="bg-transparent outline-0 text-white font-semibold">
           Close
          </button>
        </form>
      <div>
        {/* notes map */}
      </div>
    </div>
  );
};

export default MainNotes;
