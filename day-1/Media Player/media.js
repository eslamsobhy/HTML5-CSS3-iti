// audio element
var aud = document.querySelector("audio");

// seek input
var seekInput = document.getElementsByTagName("input")[0];

// max of the seek input set to the audio duration
window.addEventListener("load", function () {
  seekInput.setAttribute("max", aud.duration);
});

// songs
var item = document.getElementsByClassName("item")[0];
var item1 = document.getElementsByClassName("item")[1];
var item2 = document.getElementsByClassName("item")[2];
var item3 = document.getElementsByClassName("item")[3];

// player image
var playerImg = document.querySelector("img");

function playAmelie() {
  item1.classList.remove("active");
  item2.classList.remove("active");
  item3.classList.remove("active");
  item.classList.add("active");
  aud.setAttribute("src", "./audios/[HQ]-La-Valse-d'Amélie-Yann-Tiersen.mp3");
  playerImg.setAttribute("src", "./images/amelie.jpeg");
}

function playFaded() {
  item2.classList.remove("active");
  item3.classList.remove("active");
  item.classList.remove("active");
  item1.classList.add("active");
  aud.setAttribute("src", "./audios/Alan-Walker-Faded.mp3");
  playerImg.setAttribute("src", "./images/faded.jpeg");
}

function playSkyfall() {
  item1.classList.remove("active");
  item3.classList.remove("active");
  item.classList.remove("active");
  item2.classList.add("active");
  aud.setAttribute("src", "./audios/Adele - Skyfall (Lyric Video).mp3");
  playerImg.setAttribute("src", "./images/skyfall.jpg");
}

function playAndru() {
  item1.classList.remove("active");
  item2.classList.remove("active");
  item.classList.remove("active");
  item3.classList.add("active");
  aud.setAttribute("src", "./audios/Andru - WAILIN'.mp3");
  playerImg.setAttribute("src", "./images/andru.jpg");
}

// change duration
function changeDuration(aud) {
  seekInput.setAttribute("max", aud.duration);
}

// update slider
function updateSlider(aud) {
  seekInput.value = aud.currentTime;
}

// play
function playAudio() {
  aud.play();
}

// pause
function pauseAudio() {
  aud.pause();
}

// stop
function stopAudio() {
  aud.load();
  aud.pause();
}

// mute
function muteAudio() {
  aud.muted = !aud.muted;
}

// change volume
function changeVol(v) {
  aud.volume = v.value;
}

// seek
function seek(t) {
  aud.currentTime = t.value;
}
