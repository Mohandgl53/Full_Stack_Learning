import React from 'react'

const ToggleColor = ({handleTextColor}) => {
  return (
    <button className='colorToggle'
      onClick={handleTextColor}
    >
      Change Color
    </button>
  )
}

export default ToggleColor