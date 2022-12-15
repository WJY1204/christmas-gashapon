let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

(function () {
  // triggers when the address bar hides
  window.addEventListener("resize", resizeCanvas, false);

  function resizeCanvas() {
    ctx.canvas.width = screenWidth;
    ctx.canvas.height = screenHeight;

    drawOnCanvas();
  }

  // call it for the starting windows size
  resizeCanvas();

  function drawOnCanvas() {
    // here you can re-draw something on your canvas whenever the size changes
  }
});

canvas.addEventListener("click", function () {
  if (isplaying) return;
  isplaying = true;

  gashaponMachine.img.src = "./assets/draw.png";
  clearInterval(idleTimer);
  drawTimer = setInterval(animateDraw, 40);
});

let idleTimer = null;
let drawTimer = null;

gashaponMachine.img = new Image();
gashaponMachine.img.src = "./assets/hint.webp";
gashaponMachine.img.onload = function () {};
idleTimer = setInterval(animateIdle, 120);

function animateIdle() {
  gashaponMachine.currentframe++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    gashaponMachine.img,
    (gashaponMachine.currentframe % 3) * gashaponMachine.width,
    0,
    gashaponMachine.width,
    gashaponMachine.height,
    (screenWidth - _width) / 2,
    0,
    _width,
    _height
  );

  if (gashaponMachine.currentframe >= gashaponMachine.totalIdleFrame) {
    gashaponMachine.currentframe = 0;
  }
}

function animateDraw() {
  gashaponMachine.currentframe++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    gashaponMachine.img,
    (gashaponMachine.currentframe % 6) * gashaponMachine.width,
    Math.floor(gashaponMachine.currentframe / 6) * gashaponMachine.height,
    gashaponMachine.width,
    gashaponMachine.height,
    (screenWidth - _width) / 2,
    0,
    _width,
    _height
  );
  console.log(
    gashaponMachine.currentframe % 6,
    Math.floor(gashaponMachine.currentframe / 6)
  );

  if (gashaponMachine.currentframe >= gashaponMachine.totalDrawFrame) {
    gashaponMachine.currentframe = 0;
  }
}
