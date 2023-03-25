var aud = document.querySelector("audio");

window.addEventListener("load", function () {
  var seekInput = document.getElementsByTagName("input")[0];
  seekInput.setAttribute("max", aud.duration);
});
var item = document.getElementsByClassName("item")[0];
var item1 = document.getElementsByClassName("item")[1];
var playerImg = document.querySelector("img");

function playAmelie() {
  item.classList.add("active");
  item1.classList.remove("active");
  aud.setAttribute("src", "./audios/[HQ]-La-Valse-d'Amélie-Yann-Tiersen.mp3");
  playerImg.setAttribute("src", "./images/amelie.jpeg");
}

function playFaded() {
  item1.classList.add("active");
  item.classList.remove("active");
  aud.setAttribute("src", "./audios/Alan-Walker-Faded.mp3");
  playerImg.setAttribute("src", "./images/faded.jpeg");
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
