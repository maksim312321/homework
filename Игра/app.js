let list = document.querySelectorAll("div");

//инициализация
let game = list[0];
let gameField = list[1];
let player1 = list[2];
let player2 = list[3];
let gameRegistration = list[4];

//стартовая позиция
let locationXP1 = 0;
let locationYP1 = 0;

let locationXP2 = 800;
let locationYP2 = 800;
//скорость
let speedP1 = 15;
let speedP2 = 6;
let idMove;

//размеры игроков
let p1Size;
let p2Size;

game.hidden = true;
// начать игру
function showGameField(){

p1Size = document.getElementById("p1");
p2Size = document.getElementById("p2");
let p = document.getElementById("p");

//проверка корректности значений
if(p1Size.value > p2Size.value && p1Size.value < 300 && p1Size.value > 0 && p2Size.value > 0){   
     p1Size = document.getElementById("p1");
     p2Size = document.getElementById("p2");
     p = document.getElementById("p");

     //изменяем размеры 
     player1.style.width = p1Size.value + "px";
     player1.style.height = p1Size.value + "px";

     //изменяем размеры 
     player2.style.width = p2Size.value + "px";
     player2.style.height = p2Size.value + "px";

     console.log(p2Size.value);

     //корректировка стартовой позиции второго игрока в соотвествии с его размером
     locationXP2 = 800 - p2Size.value;
     locationYP2 = 800 - p2Size.value;

     //показываем игровое поле
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

function СrossTheBorder (location, size){
    if((Number(location)+Number(size)) > 800 || (location < 0)){
        showGameRegistration();
    }
}

let flagX = false;//пересекли ли игроки друг друга по X
let flagY = false;//пересекли ли игроки друг друга по Y

function СrossThePlayerX (locationP1, sizeP1, locationP2, sizeP2){

    if( (Number(locationP1)+Number(sizeP1) >= Number(locationP2)) && (Number(locationP2) + Number(sizeP2) > Number(locationP1))){
        flagX = true; //пересекли
        if(flagY == true){ // если есть пересечение по Y, то выходим в меню
        showGameRegistration();
        }
    }
    else{
        flagX =false;
    }
}
function СrossThePlayerY (locationP1, sizeP1, locationP2, sizeP2){

    if( (Number(locationP1)+Number(sizeP1) >= Number(locationP2)) && (Number(locationP2) + Number(sizeP2) > Number(locationP1)) ){
        flagY = true;
        if(flagX == true){
        showGameRegistration();
        }
    }
    else{
        flagY = false;
    }
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
    // console.log(locationYP1);
    СrossThePlayerY (locationYP1, p1Size.value, locationYP2, p2Size.value )
    СrossTheBorder (locationYP1, p1Size.value);
}
//вниз
if(event.keyCode == 83){
    idMove = setInterval(function(){
    player1.style.top = locationYP1 + "px";
    }, 10);
    locationYP1+=speedP1;
    // console.log(locationYP1);
    setTimeout(()=>clearInterval(idMove),10);
    СrossThePlayerY (locationYP1, p1Size.value, locationYP2, p2Size.value )
    СrossTheBorder (locationYP1, p1Size.value);
}
//влево
if(event.keyCode == 65){
    idMove = setInterval(function(){
    player1.style.left = locationXP1 + "px";
    }, 10);
    locationXP1-=speedP1;
    setTimeout(()=>clearInterval(idMove),10);
    СrossThePlayerX (locationXP1, p1Size.value, locationXP2, p2Size.value )
    СrossTheBorder(locationXP1, p1Size.value);
}
//вправо
if(event.keyCode == 68){
    idMove = setInterval(function(){
    player1.style.left = locationXP1 + "px";
    }, 10);
    locationXP1+=speedP1;
    setTimeout(()=>clearInterval(idMove),10);
    СrossThePlayerX (locationXP1, p1Size.value, locationXP2, p2Size.value )
    СrossTheBorder(locationXP1, p1Size.value);
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
    СrossTheBorder(locationYP2, p2Size.value);
}
//вниз
if(event.keyCode == 40){
    idMove = setInterval(function(){
    player2.style.top = locationYP2 + "px";
    }, 10);
    locationYP2+=speedP2;
    setTimeout(()=>clearInterval(idMove),10);
    СrossTheBorder(locationYP2, p2Size.value);
}
//влево
if(event.keyCode == 37){
    idMove = setInterval(function(){
    player2.style.left = locationXP2 + "px";
    }, 10);
    locationXP2-=speedP2;
    setTimeout(()=>clearInterval(idMove),10);
    СrossTheBorder(locationXP2, p2Size.value);
}
//вправо
if(event.keyCode == 39){
    idMove = setInterval(function(){
    player2.style.left = locationXP2 + "px";
    }, 10);
    locationXP2+=speedP2;
    setTimeout(()=>clearInterval(idMove),10);
    СrossTheBorder(locationXP2, p2Size.value);
}
}


