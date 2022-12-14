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

const displayBackgroundRatioW = 985;
const displayBackgroundRatioH = 1880;

const nameRatioW = 984;
const nameRatioH = 450;
const _nameWidth = screenWidth * 1.2;
const _nameHeight = (_nameWidth * nameRatioH) / nameRatioW;

const _gashponWidth = screenWidth * 0.95;
const _gashponHeight = screenWidth * 0.95;

// Position
let x = (screenWidth - _width) / 2;
let y = (screenHeight - _height) / 2;

// Timers.
let lastTime = new Date().getTime();
let currentTime = new Date().getTime();
// Frame refresh rate.
const FRAME_PERIOD_IDLE = 240;
const FRAME_PERIOD = 30;
const FRAME_PERIOD2 = 60;

const gachapons = [
  { src: "./assets/images/gashpon0.webp", name: "./assets/name/name4.webp" },
  { src: "./assets/images/gashpon1.webp", name: "./assets/name/name2.webp" },
  { src: "./assets/images/gashpon2.webp", name: "./assets/name/name6.webp" },
  { src: "./assets/images/gashpon2.webp", name: "./assets/name/name6.webp" },
  { src: "./assets/images/gashpon2.webp", name: "./assets/name/name6.webp" },
  { src: "./assets/images/gashpon2.webp", name: "./assets/name/name6.webp" },
  { src: "./assets/images/gashpon3.webp", name: "./assets/name/name9.webp" },
  { src: "./assets/images/gashpon3.webp", name: "./assets/name/name9.webp" },
  { src: "./assets/images/gashpon3.webp", name: "./assets/name/name9.webp" },
  { src: "./assets/images/gashpon3.webp", name: "./assets/name/name9.webp" },
  { src: "./assets/images/gashpon4.webp", name: "./assets/name/name8.webp" },
  { src: "./assets/images/gashpon4.webp", name: "./assets/name/name8.webp" },
  { src: "./assets/images/gashpon4.webp", name: "./assets/name/name8.webp" },
  { src: "./assets/images/gashpon4.webp", name: "./assets/name/name8.webp" },
  { src: "./assets/images/gashpon5.webp", name: "./assets/name/name5.webp" },
  { src: "./assets/images/gashpon6.webp", name: "./assets/name/name3.webp" },
  { src: "./assets/images/gashpon7.webp", name: "./assets/name/name0.webp" },
  { src: "./assets/images/gashpon8.webp", name: "./assets/name/name7.webp" },
  { src: "./assets/images/gashpon9.webp", name: "./assets/name/name1.webp" },
];
let hintIndex = 0;
const hintIndexMax = 3;
let frameIndex = 0;
const frameIndexMax = 44;
let frameIndex2 = 0;
const frameIndexMax2 = 15;

const idelPath = "./assets/hint/background";
const idelType = ".webp";
function getIdelIndex(index) {
  return idelPath + index + idelType;
}

const imagePath = "./assets/draw/background";
const imageType = ".webp";
function getFrameIndex(index) {
  return imagePath + index + imageType;
}

function getRndGachapon() {
  return gachapons[Math.floor(Math.random() * gachapons.length)];
}
