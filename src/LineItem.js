import React from 'react'
import {FaTrashAlt} from "react-icons/fa"
const LineItem = ({ item, handelCheck, handelDelete }) => {
  return (
        <li
            className="item"
            style={
              item.checked ? { backgroundColor: "rgb(170, 200, 167)" } : null
            }
            >
            <input
              type="checkbox"
              
              
              onChange={() => handelCheck(item.id)}
              checked={item.checked}
            />
            <label onChange={() => handelCheck(item.id)}>{item.item}</label>
            <FaTrashAlt onClick={() => handelDelete(item.id)}/>
        </li>
  )
}

export default LineItem