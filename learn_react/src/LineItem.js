import React from 'react';
import { IoTrashOutline } from "react-icons/io5";


export const LineItem = ({item, handleCheck, handleDelete, handleDoubleClick} ) => {

    return (
        <li className='item'>
            <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} />
            <label style={(item.checked === true) ? { textDecoration: "line-through" } : null} onDoubleClick={() => handleDoubleClick(item.id)}>{item.text}</label>
            <IoTrashOutline role="button" onClick={() => handleDelete(item.id)} tabIndex="0" />
        </li>
    )
}

export default LineItem;