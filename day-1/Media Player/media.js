// audio element
var aud = document.querySelector("audio");

// seek input
var seekInput = document.getElementsByTagName("input")[0];

// max of the seek input set to the audio duration
window.addEventListener("load", function () {
  seekInput.setAttribute("max", aud.duration);
});

// the item with the active-class
var activeItem = document.getElementsByClassName("item")[0];

// songs
var songsObj = {
  amelie: "./audios/[HQ]-La-Valse-d'Amélie-Yann-Tiersen.mp3",
  faded: "./audios/Alan-Walker-Faded.mp3",
  skyfall: "./audios/Adele - Skyfall (Lyric Video).mp3",
  andru: "./audios/Andru - WAILIN'.mp3",
};

// player image
var playerImg = document.querySelector("img");

// play song
function playSong(item) {
  // changing the asstes according to the item chosen
  playerImg.setAttribute("src", item.children[0].src);
  aud.setAttribute("src", songsObj[item.getAttribute("name")]);

  // put the active class on the current item
  activeItem.classList.remove("active");
  item.classList.add("active");
  activeItem = item;
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
