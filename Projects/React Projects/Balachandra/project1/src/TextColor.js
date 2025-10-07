import React from 'react'

const TextColor = ({color,setColor}) => {
  return (
    <form className='textColorForm' onSubmit={e => e.preventDefault()}>
    <div className="textArea">
        <input type="text" 
          autoFocus
          className='textColor' 
          placeholder='Enter the color'
          value = {color}
          onChange = {e => setColor(e.target.value)}
        />
    </div>
    </form>
  )
}

export default TextColor