ymaps.ready(function (){
    var city = ymaps.geolocation.city;
    city = document.getElementById('city');
    var tel = document.getElementById('tel');
    if(city.text != "Москва"){
    tel.innerHTML= "+7 900 0000 777"
    }
})
