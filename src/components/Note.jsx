import React from 'react'

const Note = ({title, text}) => {
  return (
    <div className='flex flex-col flex-wrap w-20 h-20 rounded-lg border border-white text-white'>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default Note