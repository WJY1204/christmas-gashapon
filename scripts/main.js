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

let _g = getRndGachapon();

canvas.addEventListener("click", function () {
  if (isplaying || ableToPlay == false) return;
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

const nameImage = new Image();
nameImage.onload = function () {};
nameImage.src = _g.name;

const backgoundImage = new Image();
backgoundImage.onload = function () {};
backgoundImage.src = "./assets/background2.webp";

const itemImage = new Image();
itemImage.src = _g.src;

let loader = (img) =>
  new Promise((resolve) => {
    // resolve the arguments as an Array
    img.onload = (e) => resolve();
    // force resetting the src, otherwise onload may already have fired
    img.src = img.src;
  });

async function loadImages() {
  const a = await loader(nameImage);
  const b = await loader(backgoundImage);
  const c = await loader(itemImage);
  const d = await loader(gashaponMachine.img);
  // you must return something if you it to be passed in the then()
  return [a, b, c];
}

loadImages()
  .then(() => {
    ableToPlay = true;
    idleTimer = setInterval(animateIdle, 120);
  })
  .catch(console.error);

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
