import React from 'react';
import {FaPlus} from "react-icons/fa";

const AddList = ({searchItem,setSearchItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
            autoFocus
            type="text"
            id = "addItem"
            placeholder='Add Item'
            required 
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
        />
        <button 
            type='submit'
            aria-label='Add Item'
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddList