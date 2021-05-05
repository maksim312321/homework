var geo;
ymaps.ready(function (){
    geo = ymaps.geolocation.city;
    city = document.getElementById('city');
    city.innerHTML = geo;
    var tel = document.getElementById('tel');
    if(city.text != "Москва"){
    tel.innerHTML= "+7 900 0000 777"
    }
})

var imgSliderList = document.querySelectorAll("img.sliderImg");
for(let val of imgSliderList){
    val.style.display = "none";
}

// for(let val of imgSliderList){
// let imgSwitch = setInterval(function(){
//     if(val.style.display == "none"){
//         val.style.display == "inline-block"
//     }
// },3000);
// }
// setTimeout(()=>clearInterval(imgSwitch),15000);
