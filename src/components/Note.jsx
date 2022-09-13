import React from 'react'

const Note = ({title, text}) => {
  return (
    <div className='flex flex-col rounded-lg border border-white text-white w-60 m-5 h-fit p-3 break-words'>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default Note