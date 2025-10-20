import React from 'react'

const Data = ({content,setContent}) => {
  return (
    <div className='dataList'>
        <ul>
          {content.map((item,key)=>(
            <li>
              {JSON.stringify(item)}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Data