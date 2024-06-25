let btn = document.getElementById("myBtn");
let label = document.getElementById("myLabel");

let min = 50;
let max = 100;

let randomNum;

btn.onclick = function(){
    randomNum = Math.floor(Math.random() * (max - min)) + min;
    // randomNum = (Math.floor(Math.random() * (max - min)) + min) * 10;
    label.textContent = randomNum;
}



