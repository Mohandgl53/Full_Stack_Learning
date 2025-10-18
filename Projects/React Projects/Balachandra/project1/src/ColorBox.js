import React from 'react'

const ColorBox = ({color,textColor}) => {

    
  return (
    <div className='colorBox' style={{backgroundColor:color}}>
        <h2 className='text' style={{color:textColor}}>{color?color:"Empty Value"}</h2>
    </div>
  )
}

export default ColorBox