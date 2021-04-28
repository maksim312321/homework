
ymaps.ready(init);

function init(){
  ymaps.geolocation.get({
      // Зададим способ определения геолокации
      // на основе ip пользователя.
      provider: 'yandex',
      // Включим автоматическое геокодирование результата.
      autoReverseGeocode: true
  }).then(function (result) {
      // Выведем результат геокодирования.
      console.log(result.geoObjects.get(0).properties.get('metaDataProperty'));
  });
}