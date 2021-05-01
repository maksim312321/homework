let list = document.querySelectorAll("div");
for(let val of list){
    console.log(val);
}

let game = list[0];
let gameField = list[1];
let player1 = list[2];
let player2 = list[3];
let gameRegistration = list[4];

//стартовая позиция
let locationXP1 = 0;
let locationYP1 = 0;

let locationXP2 = 700;
let locationYP2 = 600;

let speedP1 = 3;
let speedP2 = 6;
let idMove;

game.hidden = true;
// начать игру
function showGameField(){

let p1Size = document.getElementById("p1");
let p2Size = document.getElementById("p2");
let p = document.getElementById("p");

if(p1Size.value > p2Size.value && p1Size.value < 300 && p1Size.value > 0 && p2Size.value > 0){   
     p1Size = document.getElementById("p1");
     p2Size = document.getElementById("p2");
     p = document.getElementById("p");

     player1.style.width = p1Size.value + "px";
     player1.style.height = p1Size.value + "px";

     player2.style.width = p2Size.value + "px";
     player2.style.height = p2Size.value + "px";

     gameRegistration.hidden = true;
     game.hidden = false;
    
}
else{
    console.log(p1Size.value, p2Size.value)
    p.innerHTML = "Некорректный ввод"
}
}
//закончить игру
function showGameRegistration(){
    gameRegistration.hidden = false;
    game.hidden = true;
    location.reload();
}


document.addEventListener("keydown", moveP1, true)
document.addEventListener("keydown", moveP2, true)
function moveP1(event){
    //вверх
    if(event.keyCode == 87){
    idMove = setInterval(function(){
    player1.style.top = locationYP1 + "px";
    }, 10);
    locationYP1-=speedP1;
    setTimeout(()=>clearInterval(idMove),10);
}
//вниз
if(event.keyCode == 83){
    idMove = setInterval(function(){
    player1.style.top = locationYP1 + "px";
    }, 10);
    locationYP1+=speedP1;
    setTimeout(()=>clearInterval(idMove),10);
}
//влево
if(event.keyCode == 65){
    idMove = setInterval(function(){
    player1.style.left = locationXP1 + "px";
    }, 10);
    locationXP1-=speedP1;
    setTimeout(()=>clearInterval(idMove),10);
}
//вправо
if(event.keyCode == 68){
    idMove = setInterval(function(){
    player1.style.left = locationXP1 + "px";
    }, 10);
    locationXP1+=speedP1;
    setTimeout(()=>clearInterval(idMove),10);
}
}


function moveP2(event){
    //вверх
    if(event.keyCode == 38){
    idMove = setInterval(function(){
    player2.style.top = locationYP2 + "px";
    }, 10);
    locationYP2-=speedP2;
    setTimeout(()=>clearInterval(idMove),10);
}
//вниз
if(event.keyCode == 40){
    idMove = setInterval(function(){
    player2.style.top = locationYP2 + "px";
    }, 10);
    locationYP2+=speedP2;
    setTimeout(()=>clearInterval(idMove),10);
}
//влево
if(event.keyCode == 37){
    idMove = setInterval(function(){
    player2.style.left = locationXP2 + "px";
    }, 10);
    locationXP2-=speedP2;
    setTimeout(()=>clearInterval(idMove),10);
}
//вправо
if(event.keyCode == 39){
    idMove = setInterval(function(){
    player2.style.left = locationXP2 + "px";
    }, 10);
    locationXP2+=speedP2;
    setTimeout(()=>clearInterval(idMove),10);
}
}


