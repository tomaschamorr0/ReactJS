import React from 'react';
const ItemListContainer = ({greeting}) => {
    return(
        <div>
            <h1 className='text-center bg-base-200'>{greeting}</h1>
        </div>
    )
}
export default ItemListContainer;