let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
const backgoundImage = new Image();
backgoundImage.onload = function () {
  canvas.width = screenWidth;
  canvas.height = screenHeight;
  ctx.save();
  ctx.globalAlpha = 1;
  ctx.drawImage(backgoundImage, x, y, _width, _height);
  ctx.restore();
};
backgoundImage.src = "./assets/hint/background0.png";

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
    requestAnimationFrame(updateAnimat2);
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
    ctx.drawImage(
      backgroundImage2,
      (screenWidth -
        (screenHeight * displayBackgroundRatioW) / displayBackgroundRatioH) /
        2,
      0,
      (screenHeight * displayBackgroundRatioW) / displayBackgroundRatioH,
      screenHeight
    );
  };
  backgroundImage2.src = "./assets/background2.jpg";

  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,1)";
  ctx.fill();

  let itemImage = new Image();
  itemImage.onload = function () {
    ctx.drawImage(
      itemImage,
      (screenWidth - screenWidth / 1.1) / 2,
      (screenHeight - screenWidth / 1.1) / 2,
      screenWidth / 1.1,
      screenWidth / 1.1
    );
  };
  itemImage.src = _g.src;
}

requestAnimationFrame(updateAnimteHint);
