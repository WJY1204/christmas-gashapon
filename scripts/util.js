// Control animation playing
let isplaying = false;

// Canvas ratio
const ratioW = 985;
const ratioH = 1880;
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const _height = screenHeight;
const _width = (_height * ratioW) / ratioH;
// const _width = screenWidth;
// const _height = (_width * ratioH) / ratioW;

const displayBackgroundRatioW = 2000;
const displayBackgroundRatioH = 1988;

// Position
let x = (screenWidth - _width) / 2;
let y = (screenHeight - _height) / 2;

// Timers.
let lastTime = new Date().getTime();
let currentTime = new Date().getTime();
// Frame refresh rate.
const FRAME_PERIOD_IDLE = 240;
const FRAME_PERIOD = 27;
const FRAME_PERIOD2 = 60;

const gachapons = [
  { src: "./assets/images/gashpon0.png", name: "by 不叫名字" },
  { src: "./assets/images/gashpon1.png", name: "by 老詹" },
  { src: "./assets/images/gashpon2.png", name: "by 吳彥良" },
  { src: "./assets/images/gashpon2.png", name: "by 吳彥良" },
  { src: "./assets/images/gashpon2.png", name: "by 吳彥良" },
  { src: "./assets/images/gashpon2.png", name: "by 吳彥良" },
  { src: "./assets/images/gashpon3.png", name: "by 想出去聖 誕樹作業還沒做" },
  { src: "./assets/images/gashpon3.png", name: "by 想出去聖 誕樹作業還沒做" },
  { src: "./assets/images/gashpon3.png", name: "by 想出去聖 誕樹作業還沒做" },
  { src: "./assets/images/gashpon3.png", name: "by 想出去聖 誕樹作業還沒做" },
  { src: "./assets/images/gashpon4.png", name: "by 非典型薑餅性戀族群" },
  { src: "./assets/images/gashpon4.png", name: "by 非典型薑餅性戀族群" },
  { src: "./assets/images/gashpon4.png", name: "by 非典型薑餅性戀族群" },
  { src: "./assets/images/gashpon4.png", name: "by 非典型薑餅性戀族群" },
  { src: "./assets/images/gashpon5.png", name: "by 哈哈是我啦" },
  { src: "./assets/images/gashpon6.png", name: "by 洪安" },
  { src: "./assets/images/gashpon7.png", name: "by 淑芬" },
  { src: "./assets/images/gashpon8.png", name: "by 游曉貞" },
  { src: "./assets/images/gashpon9.png", name: "by 嗨海" },
];
let hintIndex = 0;
const hintIndexMax = 3;
let frameIndex = 0;
const frameIndexMax = 44;
let frameIndex2 = 0;
const frameIndexMax2 = 15;

const idelPath = "./assets/hint/background";
const idelType = ".png";
function getIdelIndex(index) {
  return idelPath + index + idelType;
}

const imagePath = "./assets/draw/background";
const imageType = ".png";
function getFrameIndex(index) {
  return imagePath + index + imageType;
}

function getRndGachapon() {
  return gachapons[Math.floor(Math.random() * gachapons.length)];
}
