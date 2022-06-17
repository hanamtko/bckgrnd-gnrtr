var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rndButton = document.querySelector(".rndButton");

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function randomColor(){
   var rndC1="rgb("+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')';
   var rndC2="rgb("+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')';
   body.style.background = "linear-gradient(to right, " + rndC1 + ", " + rndC2 + ")";
   css.textContent = body.style.background + ";";
}

window.onload = setGradient;
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient); 
rndButton.addEventListener("click",randomColor)
