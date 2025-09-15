//navbar
//while hovering in anchor links

const navBar = document.querySelector("nav");
const navElements = navBar.querySelectorAll("li");

navElements.forEach( li => {
    li.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "rgb(41, 41, 41)";
        e.target.style.color = "white";
        e.target.style.transition = "0.5s";
    });
    li.addEventListener("mouseout", e => {
        e.target.style.backgroundColor = "";
        e.target.style.color = "";
    });
});

//Hovering effect in the Project-container

const projectContainer = document.querySelectorAll(".Project-container");

projectContainer.forEach(e => {
    e.addEventListener("mouseover", () => {
        e.style.scale = "1.03";
        e.style.boxShadow = "rgba(0, 0, 0, 0.2) 0px 20px 30px";
    })
    e.addEventListener("mouseout", () => {
        e.style.scale="1";
        e.style.boxShadow = "";
    })
})

