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
backgoundImage.src = "./assets/Test.jpg";

canvas.addEventListener("click", function () {
  if (isplaying) return;

  isplaying = true;
  window.requestAnimationFrame(updateAnimat1);
});

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
  if (currentTime - lastTime < FRAME_PERIOD) {
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
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.fill();

  lastTime = currentTime;
  window.requestAnimationFrame(updateAnimat2);
}

function drawRandomImage() {
  let _g = getRndGachapon();
  span = document.getElementById("myspan");
  txt = document.createTextNode(_g.name);
  span.appendChild(txt);

  let itemImage = new Image();
  itemImage.onload = function () {
    ctx.drawImage(
      itemImage,
      (screenWidth - 1080) / 2,
      (screenHeight - 1080) / 5,
      1080,
      1080
    );
  };
  itemImage.src = _g.src;
}
