let currentSound = null;
let nowPlaying = document.getElementById("nowPlaying");
let volumeSlider = document.getElementById("volume");

function playSound(soundId) {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }

    const sound = document.getElementById(soundId);
    sound.volume = volumeSlider.value;
    sound.play();

    currentSound = sound;

    // Update animated text
    nowPlaying.textContent = "🎵 Now Playing: " + soundId.toUpperCase();
    nowPlaying.classList.remove("animate");
    void nowPlaying.offsetWidth; // restart animation
    nowPlaying.classList.add("animate");
}

function stopSound() {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
        nowPlaying.textContent = "⏸ Sound stopped";
    }
}

// Volume control
volumeSlider.addEventListener("input", () => {
    if (currentSound) {
        currentSound.volume = volumeSlider.value;
    }
});
