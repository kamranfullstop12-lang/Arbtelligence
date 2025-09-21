const audio = document.getElementById("myAudio");
const btn = document.getElementById("playBtn");
const btnIcon = document.getElementById("btnIcon");

let isPlaying = false;

btn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    btnIcon.src = "./images/lyrics.png";// replace with ON icon
    btnIcon.alt = "Sound On";
    isPlaying = true;
  } else {
    audio.pause();
    btnIcon.src = "./images/lyrics.png"; // replace with OFF icon
    btnIcon.alt = "Sound Off";
    isPlaying = false;
  }
});
