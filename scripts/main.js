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
  drawTimer = setInterval(animateDraw, 50);
});

let idleTimer = null;
let drawTimer = null;
let fadeTimer = null;

gashaponMachine.img = new Image();
gashaponMachine.img.src = "./assets/hint.png";
gashaponMachine.img.onload = function () {};
idleTimer = setInterval(animateIdle, 120);

const nameImage = new Image();
nameImage.onload = function () {};
nameImage.src = _g.name;

const backgoundImage = new Image();
backgoundImage.onload = function () {};
backgoundImage.src = "./assets/background2.webp";

const itemImage = new Image();
itemImage.onload = function () {};
itemImage.src = _g.src;

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

  if (gashaponMachine.currentframe >= gashaponMachine.totalDrawFrame) {
    gashaponMachine.currentframe = gashaponMachine.totalDrawFrame;
    clearInterval(drawTimer);
    requestAnimationFrame(fading);
  }
}

function fading() {
  let _g = getRndGachapon();

  ctx.save();
  ctx.globalAlpha = 1;
  ctx.drawImage(backgoundImage, (screenWidth - _width) / 2, 0, _width, _height);
  ctx.restore();

  ctx.drawImage(
    itemImage,
    (screenWidth - _gashponWidth) / 2,
    (screenHeight - _gashponHeight) / 5,
    _gashponWidth,
    _gashponHeight
  );

  ctx.drawImage(
    nameImage,
    (screenWidth - _nameWidth) / 2,
    (screenHeight - _gashponHeight) / 5 + _gashponHeight - 30,
    _nameWidth,
    _nameHeight
  );

  let btn = document.getElementById("reloadBtn");
  btn.style.display = "block";
}
