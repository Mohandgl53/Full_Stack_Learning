const app= document.addEventListener("readystatechange",(event)=>{
    if (event.target.readyState =="complete"){
        console.log("complete");
        initApp();
    }
});

const initApp = ()=>{
    const myContent =["DSA","Web Development", "Zoho"];
    const myObject = {
        name:"mohan",
        myContent:["DSA","Web Development", "Zoho"],
        logName: function(){
            console.log(this.name);
            return this.myContent;
        }
    };
    console.log(myObject.logName());
    localStorage.setItem("mySessionStore",JSON.stringify(myObject));
    const key = localStorage.key(0);
    console.log(key);
    const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
    console.log(mySessionData);
}