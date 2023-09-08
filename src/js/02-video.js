import Player from '@vimeo/player';

// Создаем Vimeo.Player после загрузки API
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let currentTimeInLocalStorage = null;

// Восстанавливаем время воспроизведения при загрузке страницы
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {
  const currentTime = parseFloat(savedTime);
  currentTimeInLocalStorage = currentTime;
  player.setCurrentTime(currentTime);
} else {
  console.log('Сохраненное время не найдено или не задано.');
}

player.on('timeupdate', function () {
  // Сохраняем текущее время воспроизведения в локальное хранилище
  player.getCurrentTime().then(function (timeupdate) {
    if (currentTimeInLocalStorage === null) {
      localStorage.setItem('videoplayer-current-time', timeupdate);
    }
  });
});
