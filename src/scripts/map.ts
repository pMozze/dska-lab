declare const ymaps: any;

document.addEventListener('DOMContentLoaded', () => {
  ymaps.ready(init);
});

function init(): void {
  const myMap = new ymaps.Map('map', {
    center: [55.76, 60.64],
    zoom: 4,
    controls: ['zoomControl', 'typeSelector']
  });

  myMap.setType('yandex#map');

  myMap.events.add('load', () => {
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
      mapContainer.style.filter = 'grayscale(100%)';
      mapContainer.style.setProperty('-webkit-filter', 'grayscale(100%)', 'important');
    }
  });

  const myPlacemark1 = new ymaps.Placemark(
    [55.725195, 37.760117],
    {
      hintContent: 'Москва',
      balloonContent: 'Москва, Рязанский просп., 10, стр. 18'
    },
    {
      preset: 'islands#blueIcon'
    }
  );

  const myPlacemark2 = new ymaps.Placemark(
    [55.036654, 82.916684],
    {
      hintContent: 'Новосибирск',
      balloonContent: 'Новосибирск, улица Фрунзе 5'
    },
    {
      preset: 'islands#blueIcon'
    }
  );

  myMap.geoObjects.add(myPlacemark1);
  myMap.geoObjects.add(myPlacemark2);
}
