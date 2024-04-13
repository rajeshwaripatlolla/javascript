const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let isPlaying = false;

function togglePlay() {
  isPlaying = !isPlaying;
  if (isPlaying) {
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    // Add logic to start playing music
  } else {
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    // Add logic to pause music
  }
}

playBtn.addEventListener("click", togglePlay);
