document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', playSoundIfNoImage);
});

// JavaScript function to play the sound if there is no <img> tag
function playSoundIfNoImage(event) {
    if (!event.target.querySelector('img')) {
        playRandomSound();
    }
}

function playRandomSound() {
    var audio = document.getElementById("link-sound");
    var randomNumber = Math.floor(Math.random() * 3); // Generates a random number between 0 and 2
    var randomSound = "linkhover" + randomNumber + ".mp3"; // Construct the filename based on the random number
    audio.src = "https://cdn.jsdelivr.net/gh/disukomusic/cdn/sounds/" + randomSound; // Set the source of the audio element
    audio.load(); // Load the new audio source
    audio.playbackRate = 2; // Set the playback rate
    audio.play(); // Play the audio
}