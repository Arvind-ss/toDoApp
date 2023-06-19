import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({newItem,setNewItem,handelSubmit}) => {
  return (
    <form className="addForm" onSubmit={handelSubmit}>
      <label htmlFor="addItem">Add Note</label>
      <container id="container">
        <input
            type="text"
            id="addItem"
            placeholder="Type Here.... "
            required 
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}
        />
        <button id="addItemSubmit"><FaPlus/></button>
      </container>
      
    </form>
  );
};

export default AddItem;
