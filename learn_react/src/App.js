import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import  { useState } from 'react';
import AddList from "./AddList";

function App() {
  const [items,setItems] = useState(JSON.parse(localStorage.getItem("To-Do-List")));

  const [searchItem,setSearchItem] = useState('');
  
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
    if (!searchItem){ return;}
    console.log(searchItem);
    addItem(searchItem);
    setSearchItem('');
  }


  return (
    <div className="App">
      <Header title = "To Do List"/>
      <AddList 
        searchItem = {searchItem}
        setSearchItem = {setSearchItem}
        handleSubmit = {handleSubmit}

      />
      <Content 
        items = {items}
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
