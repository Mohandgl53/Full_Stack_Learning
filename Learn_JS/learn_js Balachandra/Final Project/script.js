
const backGround =document.querySelector(".backGround");
const bgColor = document.querySelector(".bgColor");
const clickMe = document.querySelector(".clickMe");
const colorText = document.querySelector(".colorname");
backGround.style.backgroundColor="red"
clickMe.addEventListener("mouseover",(e)=>{
    clickMe.style.backgroundColor ="black";
    clickMe.style.color ="white";
    clickMe.style.transition=".8s";
});

clickMe.addEventListener("mouseout",(e)=>{
    clickMe.style.backgroundColor ="rgba(240, 248, 255, 0)";
    clickMe.style.color ="black";
});

//First way From BALACHANDRA(random)

// const colors=["red","green","yellow","brown"];

// clickMe.addEventListener("click",(e)=>{
//     const randomNumber=getRandomNumber();
//     backGround.style.backgroundColor=colors[randomNumber];
//     backGround.style.color=colors[randomNumber];
//     colorText.textContent=backGround.style.backgroundColor;
// });

// function getRandomNumber(){
//     return Math.floor(Math.random()*colors.length)
// }

//Second way By Me (Cycle)
clickMe.addEventListener("click",(e)=>{
    const backColor=backGround.style.backgroundColor=="red"?"green":backGround.style.backgroundColor=="green"?"yellow":backGround.style.backgroundColor=="yellow"?"brown":"red";
    backGround.style.backgroundColor=backColor;
    backGround.style.color=backColor;
    const colorsName= backGround.style.backgroundColor=="red"?"Red":backGround.style.backgroundColor=="green"?"Green":backGround.style.backgroundColor=="yellow"?"Yellow":"Brown";
    colorText.textContent=colorsName;
});


