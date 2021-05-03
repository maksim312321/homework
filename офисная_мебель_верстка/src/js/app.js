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
