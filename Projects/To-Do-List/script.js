"use strict";

const taskManager=document.querySelector(".taskManager");
const myForm =document.querySelector("form");
const inputText =document.querySelector(".inputText");
inputText.focus();//to focus the input

myForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  addTask();
});

const addTask = ()=>{
  const inputContent=inputText.value.trim()
  
  if (inputContent===""){
    alert("Please Enter the input Value For the Task")
    return;
  }

  const taskBar=document.createElement("div");
  taskBar.classList.add("taskArea");

  const checkBox=document.createElement("input");
  checkBox.type="checkbox";
  checkBox.classList.add("inputTick")

  const taskPara=document.createElement("p");
  taskPara.classList.add("taskpara");
  taskPara.textContent=inputContent;

  checkBox.addEventListener("change",()=>{
    taskPara.style.textDecoration=checkBox.checked?"line-through":"none";
    taskPara.style.color=checkBox.checked?"grey":"black";
    inputText.focus();
  });

  const updateBtn=document.createElement("button");
  updateBtn.classList.add("update");
  updateBtn.textContent="Edit";
  
  updateBtn.addEventListener("click",()=>{
    // const updatedTask=prompt("Update Your Task Here..",taskPara.textContent);
    // taskPara.textContent=updatedTask;
    const input=document.createElement("input");
    input.type="text";
    input.classList.add("editInput");
    input.value=taskPara.textContent;

    taskBar.replaceChild(input,taskPara);

    input.addEventListener("blur",()=>{
      taskPara.textContent=input.value.trim()||taskPara.textContent;
      taskBar.replaceChild(taskPara,input);
      inputText.focus();
    });

    input.addEventListener("keydown",(e)=>{
      if(e.key==="Enter"){
        input.blur();
      }
    })
    input.focus();
  });

  const removeBtn=document.createElement("button");
  removeBtn.classList.add("remove");
  removeBtn.textContent="Remove";

  removeBtn.addEventListener("click",()=>{
      taskBar.remove();
      inputText.focus();
  })

  taskBar.append(checkBox,taskPara,updateBtn,removeBtn);
  taskManager.append(taskBar);

  inputText.value="";

  inputText.focus();
};