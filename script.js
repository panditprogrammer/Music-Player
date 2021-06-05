let music = document.querySelector('audio');
let play_pause = document.getElementById('play_pause');
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let bg_album_image = document.getElementById('bg_album');
let volume_slider = document.getElementById("volume");
// play and pause music 
play_pause.addEventListener('click', () => {

    // console.log(play_pause.src);
    if (play_pause.src === origin + '/img/play-button.png') {
        music.play();
        play_pause.src = 'img/pause.png';
        bg_album_image.style.animationName = 'image_animate';
    }
    else if (play_pause.src === origin + '/img/pause.png') {
        music.pause();
        play_pause.src = 'img/play-button.png';
        bg_album_image.style.animationName = '';
    }
});

// goto previous duration 
previous.addEventListener('click', () => {
    music.currentTime -= 10;
});

// goto next duration 
next.addEventListener('click', () => {
    music.currentTime += 10;
});

setInterval(() => {
    // checking music play finished
    if (music.currentTime === music.duration) {
        music.pause();
        play_pause.src = 'img/play-button.png';
        bg_album_image.style.animationName = '';

    }

    // changing volume 
    music.volume = (volume_slider.value /100)

}, 1000);

