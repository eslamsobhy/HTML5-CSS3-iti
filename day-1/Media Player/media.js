var aud = document.querySelector("audio");

window.addEventListener("load", function () {
  var seekInput = document.getElementsByTagName("input")[0];
  seekInput.setAttribute("max", aud.duration);
});

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
