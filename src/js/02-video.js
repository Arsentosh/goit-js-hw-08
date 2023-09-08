document.addEventListener('DOMContentLoaded', function () {
  // Создаем Vimeo.Player после загрузки API
  const iframe = document.querySelector('iframe');
  const player = new Vimeo.Player(iframe);

  // Восстанавливаем время воспроизведения при загрузке страницы
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime));
  }

  player.on('play', function () {
    // Сохраняем текущее время воспроизведения в локальное хранилище
    player.getCurrentTime().then(function (timeupdate) {
      localStorage.setItem('videoplayer-current-time', timeupdate);
    });
  });
});
