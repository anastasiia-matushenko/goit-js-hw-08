import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

loadData();

player.on('timeupdate', throttle(data => {
    localStorage.setItem(STORAGE_KEY, data.seconds);
}, 1000));

function loadData () {
    if (localStorage.getItem(STORAGE_KEY)) {
        const currentTime = localStorage.getItem(STORAGE_KEY);

        player.setCurrentTime(currentTime);
    }
};

