const songs = [
    {
        title: "Bite Me",
        artist: "NEFFEX",
        src: "audio/bite me.mp3",
        img: "images/bite me.jpeg"
    },
    {
        title: "Statement",
        artist: "NEFFEX",
        src: "audio/statement.mp3",
        img: "images/statement.jpg"
    },
    {
        title: "Go!",
        artist: "NEFFEX",
        src: "audio/go.mp3",
        img: "images/go.jpg"
    }
]

let currentSong = 0;

const songAudio = document.getElementById('songAudio');
const progress = document.getElementById('progress');
const controlIcon = document.getElementById('controlIcon');
const songTitle = document.querySelector('h2');
const songArtist = document.querySelector('p');
const songImg = document.querySelector('img');

function loadSong(currentIndex) {
    const currentSong = songs[currentIndex];
    songAudio.src = currentSong.src;
    songTitle.textContent = currentSong.title;
    songArtist.textContent = currentSong.artist;
    songImg.src = currentSong.img;

    songAudio.onloadedmetadata = () => {
        progress.max = songAudio.duration;
        progress.value = songAudio.currentTime;
    }
}

function playPause() {
    if (controlIcon.classList.contains("fa-pause")) {
        songAudio.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    } else {
        songAudio.play();
        controlIcon.classList.add("fa-pause");
        controlIcon.classList.remove("fa-play");
    }
}

function nextSong() {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
    songAudio.play();
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
}

function prevSong() {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong(currentSong);
    songAudio.play();
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
}


setInterval(() => {
    progress.value = songAudio.currentTime;
}, 500);


progress.onchange = function() {
    songAudio.currentTime = progress.value;
    songAudio.play();
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
}

loadSong(currentSong);