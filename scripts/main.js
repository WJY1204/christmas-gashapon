let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const backgoundImage = new Image();
backgoundImage.onload = function () {
  ctx.save();
  ctx.globalAlpha = 1;
  ctx.drawImage(backgoundImage, x, y, _width, _height);
  ctx.restore();
};
backgoundImage.src = "./assets/hint/background0.webp";

canvas.addEventListener("click", function () {
  if (isplaying) return;

  isplaying = true;
  window.requestAnimationFrame(updateAnimat1);
});

function updateAnimteHint() {
  if (isplaying) return;

  currentTime = new Date().getTime();
  if (currentTime - lastTime < FRAME_PERIOD_IDLE) {
    requestAnimationFrame(updateAnimteHint);
    return;
  }

  hintIndex++;
  if (hintIndex >= hintIndexMax) {
    hintIndex = 0;
  }

  backgoundImage.src = getIdelIndex(hintIndex);

  lastTime = currentTime;
  window.requestAnimationFrame(updateAnimteHint);
}

function updateAnimat1() {
  currentTime = new Date().getTime();
  if (currentTime - lastTime < FRAME_PERIOD) {
    requestAnimationFrame(updateAnimat1);
    return;
  }

  frameIndex++;
  if (frameIndex >= frameIndexMax) {
    frameIndex = frameIndexMax;
    updateAnimat2();
    return;
  }

  backgoundImage.src = getFrameIndex(frameIndex);

  lastTime = currentTime;
  window.requestAnimationFrame(updateAnimat1);
}

function updateAnimat2() {
  currentTime = new Date().getTime();
  if (currentTime - lastTime < FRAME_PERIOD2) {
    window.requestAnimationFrame(updateAnimat2);
    return;
  }

  if (frameIndex2 >= frameIndexMax2) {
    let btn = document.getElementById("reloadBtn");
    btn.style.display = "block";
    drawRandomImage();
    return;
  }
  frameIndex2++;

  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0,0,0,0.3)";
  ctx.fill();

  lastTime = currentTime;
  window.requestAnimationFrame(updateAnimat2);
}

function drawRandomImage() {
  let _g = getRndGachapon();
  // span = document.getElementById("myspan");
  // txt = document.createTextNode(_g.name);
  // span.appendChild(txt);
  let backgroundImage2 = new Image();
  backgroundImage2.onload = function () {
    ctx.drawImage(backgroundImage2, x, y, _width, _height);
  };
  backgroundImage2.src = "./assets/background2.webp";

  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0,0,0,1)";
  ctx.fill();

  let nameImage = new Image();
  nameImage.onload = function () {
    ctx.drawImage(
      nameImage,
      (screenWidth - _nameWidth) / 2,
      (screenHeight - _gashponHeight) / 5 + _gashponHeight - 30,
      _nameWidth,
      _nameHeight
    );
  };
  nameImage.src = _g.name;

  let itemImage = new Image();
  itemImage.onload = function () {
    ctx.drawImage(
      itemImage,
      (screenWidth - _gashponWidth) / 2,
      (screenHeight - _gashponHeight) / 5,
      _gashponWidth,
      _gashponHeight
    );
  };
  itemImage.src = _g.src;
}

requestAnimationFrame(updateAnimteHint);
