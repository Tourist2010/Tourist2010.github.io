let dino=document.getElementById("dino");
let block=document.getElementById("block");
let game=document.getElementById("game");
let moon=document.getElementById("moon");
let sun=document.getElementById("sun");

document.body.onkeyup=function (e) {
    if (e.keyCode==32) {
        jump();
    }
}

function jump() {
    if (dino.classList!="animate")
        dino.classList.add("animate");
    setTimeout(function () {
        dino.classList.remove("animate");
    }, 500)
}

let count=5;
let checkIfGameOver=setInterval(() => {
    let dinoTop=parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft<15&&blockLeft>0&&dinoTop>=130) {
        block.style.animation="none";
        block.style.display="none";
        alert("You Lose Cheenu!");
        block.style.animation="block 1s infinite linear";
        block.style.display="block";
    }
}, 15);
let easy=true;
let hard=false;

function easyMode() {
    easy=true;
    hard=false;
}
function hardMode() {
    easy=false;
    hard=true;
}

let changeSpeed=setInterval(() => {
    if (hard) {
        block.style.animation="block "+count+"s infinite linear";
        if (count==1) count=5;
        else count--;
    }
}, 5000);

let enableNight=setInterval(() => {
    if (game.style.backgroundColor!="black") {
        game.style.backgroundColor="black";
        dino.style.backgroundColor="grey";
        block.style.backgroundColor="white";
        moon.style.display="block";
        sun.style.display="none";
    } else {
        game.style.backgroundColor="white";
        dino.style.backgroundColor="red";
        block.style.backgroundColor="blue";
        moon.style.display="none";
        sun.style.display="block";
    }
}, 25000);