// Document object model (DOM) Manupilation

const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

view1.style.display="flex";
view2.style.display ="flex";

const view = document.getElementsByClassName("view");
console.log(view);

const sameview = d