import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import  { useState } from 'react';
import AddList from "./AddList";
import SearchItem from "./SearchItem";

function App() {
  const [items,setItems] = useState(JSON.parse(localStorage.getItem("To-Do-List")));

  const [newItem,setNewItem] = useState('');

  const [search,setSearch] = useState('');
  
  const addItem = (item) => {
    const id = (items.length) ? items[items.length-1].id + 1 : 1;
    const addNewItem = {id, checked:false, text:item}
    const listItems = [...items,addNewItem];
    setItems(listItems);
    localStorage.setItem("To-Do-List",JSON.stringify(listItems));
  }
  
  const handleCheck = (id) => {
    const listItems = items.map((item) => id===item.id ? {...item,checked:!item.checked} : item);
    
    setItems(listItems);
    localStorage.setItem("To-Do-List",JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => id!==item.id );
    setItems(listItems);
    localStorage.setItem("To-Do-List",JSON.stringify(listItems));
  }

  const handleDoubleClick = (id) => {
    const listItems = items.map((item) => item.id===id ? {...item,checked:!item.checked} : item);
    setItems(listItems);
    localStorage.setItem("To-Do-List",JSON.stringify(listItems));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem){ return;}
    console.log(newItem);
    addItem(newItem);
    setNewItem('');
  }


  return (
    <div className="App">
      <Header title = "To Do List"/>
      <AddList 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem 
        search = {search}
        setSearch = {setSearch}
      />
      <Content 
        items = {items.filter(item => (((item.text).toLowerCase()).includes(search.toLowerCase())))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        handleDoubleClick = {handleDoubleClick}
      />
      <Footer
        length = {items.length}
      />
    </div>
  );
}

export default App;
