var aud = document.querySelector("audio");
function playAudio() {
  aud.play();
}
function pauseAudio() {
  aud.pause();
}
function stopAudio() {
  aud.load();
  aud.pause();
}
function muteAudio() {
  aud.muted = !aud.muted;
}
function changeVol(v) {
  aud.volume = v.value;
}
function seek(t) {
  aud.currentTime = t.value;
}
