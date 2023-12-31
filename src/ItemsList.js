import React from 'react'

import LineItem from './LineItem'
 const ItemsList = ({ items, handelCheck, handelDelete } ) => {
  return (
    <ul>
        {items.map((item) => (
         <LineItem
         key={item.id}
          item={item}
          handelCheck={handelCheck}
          handelDelete={handelDelete}
         />
        ))}
        
      </ul>
  )
}
export default ItemsList;