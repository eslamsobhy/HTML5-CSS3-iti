var canva = document.querySelector("canvas");
canva.style.fill = "skyblue";
var ctx = canva.getContext("2d");

var colorInput = document.querySelector("input");
var btn = document.querySelector("button");
colorInput.value = "#ffffff";

// when the button clicked
btn.addEventListener("click", function () {
  ctx.clearRect(0, 0, 1264, 620);
  var color = colorInput.value;
  ctx.strokeStyle = color;
  for (var i = 0; i < 100; i++) {
    var randomX = Math.floor(Math.random() * 1200);
    var randomY = Math.floor(Math.random() * 600);
    ctx.beginPath();
    ctx.arc(randomX, randomY, 30, 0, Math.PI * 2, true); // (x-coor, y-coor, radius, start-angle, end-angle, clockwise?)
    ctx.stroke();
  }
});
