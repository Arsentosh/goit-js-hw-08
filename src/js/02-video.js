import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const savedTime = localStorage.getItem('videoplayer-current-time') || 0;

player.on('timeupdate', throttle(onVideoTimeSave, 1000));
player.setCurrentTime(savedTime);

function onVideoTimeSave(evt) {
  let currentTime = evt.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}
