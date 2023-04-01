import React from 'react'
import "./ItemListContainer.css"

export const ItemListContainer = (props) => {
    return (
        <div className='divItemListContainer'>
            <h1>{props.greeting}</h1>
        </div>
    )
}