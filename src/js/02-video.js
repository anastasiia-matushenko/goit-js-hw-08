import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(data => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}, 1000));

window.addEventListener('load', function () {
    if (localStorage.getItem(STORAGE_KEY)) {
        const currentTime = JSON.parse(localStorage.getItem(STORAGE_KEY));

        player.setCurrentTime(currentTime.seconds).then(function (seconds) {
        }).catch(function (error) {
            console.log(error);
        });
    }
}, {once: true});

