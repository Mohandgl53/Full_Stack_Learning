import React from 'react';
import { LineItem } from './LineItem';

export const ItemsList = ({ items, handleCheck, handleDelete, handleDoubleClick }) => {
    return (
        <ul>
            {items.map((item) => (
                <LineItem
                    item={item}
                    key={item.id}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                    handleDoubleClick={handleDoubleClick}
                />
            ))}
        </ul>
    )
}

export default ItemsList;