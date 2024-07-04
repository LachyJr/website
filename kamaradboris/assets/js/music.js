let currentSongIndex = 0;
let isPlaying = false;

const audioPlayer = document.getElementById('audio-player');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const playButton = document.getElementById('play-button');
const volumeSlider = document.getElementById('volume-slider');

function loadSong() {
    const song = { title: "KAMARÁD BORIS", artist: "FIZISTYLE", audio: "https://cdn.lachysek.xyz/files/kamaradboris.mp3" };
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    audioPlayer.src = song.audio;
    audioPlayer.volume = 0.4;
    audioPlayer.loop = true;
}

function playSong() {
    audioPlayer.play();
    isPlaying = true;
    playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function pauseSong() {
    audioPlayer.pause();
    isPlaying = false;
    playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
}

volumeSlider.addEventListener('input', function() {
    const volumeValue = parseFloat(this.value);
    audioPlayer.volume = volumeValue;
});

function initVolumeSlider() {
    volumeSlider.value = audioPlayer.volume;
}

playButton.addEventListener('click', () => {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

loadSong(currentSongIndex);
initVolumeSlider();
