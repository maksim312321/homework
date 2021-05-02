let list = document.querySelectorAll("div");

//инициализация
let game = list[0];
let gameField = list[1];
let player1 = list[2];
let player2 = list[3];
let gameRegistration = list[4];

//стартовая позиция (X-координата, P1 или P2 обозначение игрока)
let locationXP1 = 0;
let locationYP1 = 0;

let locationXP2 = 800;
let locationYP2 = 800;

//интервалы движения игроков
let idMove;

//размеры игроков
let p1Size;
let p2Size;

//скорости игроков
let speedP1;
let speedP2;

game.hidden = true;
// начать игру
function showGameField(){
//инциализация размеров игроков
p1Size = document.getElementById("p1");
p2Size = document.getElementById("p2");
//инциализация тега p для вывод ошибок ввода
let p = document.getElementById("p");
//ф-я расчета скорости
function speed_calculation(size){
    return ((1/size)*200);
}
//проверка корректности значений
if(Number(p1Size.value) > Number(p2Size.value) && Number(p1Size.value) <= 300 && Number(p1Size.value) >= 50 && Number(p2Size.value >= 50)){   
     
     p1Size = document.getElementById("p1");
     p2Size = document.getElementById("p2");
     p = document.getElementById("p");

     //изменяем размеры игрока 1
     player1.style.width = p1Size.value + "px";
     player1.style.height = p1Size.value + "px";

     //изменяем размеры игрока 2
     player2.style.width = p2Size.value + "px";
     player2.style.height = p2Size.value + "px";


     //корректировка стартовой позиции второго игрока в соотвествии с его размером
     locationXP2 = 800 - p2Size.value;
     locationYP2 = 800 - p2Size.value;
     
     //расчет скорости
     speedP1 = speed_calculation(p1Size.value);
     speedP2 = speed_calculation(p2Size.value);
     
     //расчет скорости
     console.log("скорость первого:"+(1/p1Size.value)*200);
     console.log("скорость второго:"+(1/p2Size.value)*200);

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

//ф-я определяющая пересек ли игрок границу игрового поля
function СrossTheBorder (location, size){
    if((Number(location)+Number(size)) > 800 || (location < 0)){
        showGameRegistration();
    }
}

let flagX = false;//пересекли ли игроки друг друга по X
let flagY = false;//пересекли ли игроки друг друга по Y

//ф-я определяющая догнал ли первый игрок второго по X
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
//ф-я определяющая догнал ли первый игрок второго по Y
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
//Управление игроками. нет одновременного управления :( 
document.addEventListener("keydown", moveP1)
document.addEventListener("keydown", moveP2)
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

// ОДНОВРЕМЕННОЕ ПЕРЕМЕЩЕНИЕ ДВУХ ИГРОКОВ(НЕ РАБОТАЕТ)

// var map = {}; // You could also use an array
// onkeydown = function(e){
//     // e = e || event; // to deal with IE
//     map[87] = e.type == 'keydown';
//     map[83] = e.type == 'keydown';
//     map[65] = e.type == 'keydown';
//     map[68] = e.type == 'keydown';

//     map[38] = e.type == 'keydown';
//     map[40] = e.type == 'keydown';
//     map[37] = e.type == 'keydown';
//     map[39] = e.type == 'keydown';

// }

// //первый вверх
// if(map[87]){
//     idMove = setInterval(function(){
//     player1.style.top = locationYP1 + "px";
//     }, 10);
//     locationYP1-=speedP1;
//     setTimeout(()=>clearInterval(idMove),10);
// }
// //первый вниз
// if(map[87]){
//     idMove = setInterval(function(){
//     player1.style.top = locationYP1 + "px";
//     }, 10);
//     locationYP1+=speedP1;
//     setTimeout(()=>clearInterval(idMove),10);
// }
// //первый влево
// if(map[87]){
//     idMove = setInterval(function(){
//     player1.style.left = locationXP1 + "px";
//     }, 10);
//     locationXP1=speedP1;
//     setTimeout(()=>clearInterval(idMove),10);
// }
// //первый вправо
// if(map[87]){
//     idMove = setInterval(function(){
//     player1.style.left = locationXP1 + "px";
//     }, 10);
//     locationXP1-=speedP1;
//     setTimeout(()=>clearInterval(idMove),10);
// }

// //второй вверх
// if(map[38]){
//     idMove = setInterval(function(){
//     player2.style.top = locationYP2 + "px";
//     }, 10);
//     locationYP2-=speedP2;
//     setTimeout(()=>clearInterval(idMove),10);
// }
// //второй вниз
// if(map[40]){
//     idMove = setInterval(function(){
//     player2.style.top = locationYP2 + "px";
//     }, 10);
//     locationYP2+=speedP2;
//     setTimeout(()=>clearInterval(idMove),10);
// }
// //второй влево
// if(map[37]){
//     idMove = setInterval(function(){
//     player2.style.left = locationXP2 + "px";
//     }, 10);
//     locationXP2=speedP2;
//     setTimeout(()=>clearInterval(idMove),10);
// }
// //второй вправо
// if(map[39]){
//     idMove = setInterval(function(){
//     player2.style.left = locationXP2 + "px";
//     }, 10);
//     locationXP2-=speedP2;
//     setTimeout(()=>clearInterval(idMove),10);
// }

// //первый вверх, второй вверх
// if(map[87] && map[38]){
//     idMove = setInterval(function(){
//     player1.style.top = locationYP1 + "px";
//     player2.style.top = locationYP2 + "px";
//     }, 10);
//     locationYP1-=speedP1;
//     locationYP2-=speedP2;
//     setTimeout(()=>clearInterval(idMove),10);
// }


