import React from 'react';
import { ItemsList } from './ItemsList';

const Content = ({ items, handleCheck, handleDelete, handleDoubleClick }) => {

  return (
    <main>
      {(items.length) ? (
        <ItemsList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleDoubleClick={handleDoubleClick}
        />
      ) : (<p>Your List is Empty</p>)}
    </main>

  )
}

export default Content;
