const view1=document.getElementById("view1");
const view=view1.querySelector(".view");
const h2=view.querySelector("h2");

document.addEventListener("readystatechange",(event)=>{
    if (event.target.readyState ==="complete"){
        console.log("completed");
        initApp();
    };
});

const initApp = function(){
    const view1=document.querySelector("#view1");
    const view=view1.querySelector(".view");
    const h2=view.querySelector("h2");
    view1.addEventListener("click",(event)=>{
        view1.classList.toggle("yellow");
        view1.classList.toggle("green");
        
    });
    view.addEventListener("click",(event)=>{

        event.target.style.backgroundColor ="blue";
        
    });
    h2.addEventListener("click",(event)=>{
        
        event.target.textContent ==="Hello" ? event.target.textContent="Byee": event.target.textContent="Hello";
        
    });
};

//nav bar is increased

const nav = document.querySelector("nav");
nav.addEventListener("mouseover",(event)=>{
    nav.classList.add("height100");
})
nav.addEventListener("mouseout",(event)=>{
    nav.classList.remove("height100");
})

//sidebar

const button = nav.querySelector("button");
const sidebar =nav.querySelector("#sidebar")
button.addEventListener("click",(event)=>{
    sidebar.classList.toggle("sidebar");
})

//Submit

const view2=document.querySelector("#view2");
const  myForm=document.querySelector("form");

myForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const myContent=myForm.querySelector("input").value;
    console.log(myContent);
    console.log("submit happened");
})

