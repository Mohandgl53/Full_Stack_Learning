import React from 'react'

const Buttons = ({activeButton,ButtonSelector,changeContent}) => {
    return (
        <div className='buttonDiv'>
            {ButtonSelector.map((button,key) =>(
                <button
                onClick={()=>changeContent(key)}
                style={{
                    backgroundColor: activeButton === key ? "black" : "white",
                    color: activeButton === key ? "white" : "black",
                    transition:'0.5s all'
                }}
                >
                    {button}
                </button>
            ))}
        </div>
    )
}

export default Buttons