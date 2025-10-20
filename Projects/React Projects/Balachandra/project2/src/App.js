import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Data from "./Data";
import apiRequest from "./apiRequest";

function App() {
  const User_API = "https://jsonplaceholder.typicode.com/users";
  const Post_API = "https://jsonplaceholder.typicode.com/posts";
  const Comment_API = "https://jsonplaceholder.typicode.com/comments";

  const [content,setContent] = useState([]);
  const [activeButton,setActiveButton] = useState(0);

  useEffect(()=>{

    const fetchContent = async () =>{
      try{
        const response = await fetch(User_API);
        if(!response.ok) throw Error("There is a error in Fetching the Data");
        const listContent = await response.json();
        setContent(listContent);
      }catch(err){
        console.log(err.Message);
      }
    }
    fetchContent();
  },[])

  const ButtonSelector = ["Users","Posts","Comments"];
  const API_Selector = [User_API,Post_API,Comment_API]

  const changeContent = async (key) =>{
    const listContent = await apiRequest(API_Selector[key]);
    setContent(listContent);
    setActiveButton(key);
  }

  return (
    <main>
      <Buttons
        activeButton = {activeButton}
        ButtonSelector = {ButtonSelector}
        changeUsers = {changeContent}
      />
      <Data 
        content = {content}
        setContent = {setContent}
      />
    </main>
  );
}

export default App;
