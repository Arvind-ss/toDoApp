import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import React, { useState } from "react";
import "./App.css";
import "./index.css";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
function App() {
  const [items, setItems] = useState(JSON.parse
    (localStorage.getItem('todo_list'))
    
  );
    //SearchItem
    const [search,setSearch]=useState('')
  //newItem
  const [newItem, setNewItem] = useState("");
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  };
  //checkbox fucntion
  const handelCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  };
  // delete to-do list fucntion upon clicking the bin icon
  const handelDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handelSubmit={handelSubmit}
      />
      <SearchItem
      search={search}
      setSearch={setSearch}
      />
      <Content
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handelCheck={handelCheck}
        handelDelete={handelDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
