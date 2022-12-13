// Control animation playing
let isplaying = false;

// Canvas ratio
const ratioW = 985;
const ratioH = 1880;
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const _height = screenHeight;
const _width = (_height * ratioW) / ratioH;

// Position
let x = (screenWidth - _width) / 2;
let y = (screenHeight - _height) / 2;

// Timers.
let lastTime = new Date().getTime();
let currentTime = new Date().getTime();
// Frame refresh rate.
const FRAME_PERIOD = 120;

const gachapons = [
  { src: "./assets/images/Image0.png", name: "by 不叫名字" },
  { src: "./assets/images/Image1.png", name: "by 老詹" },
  { src: "./assets/images/Image2.png", name: "by 吳彥良" },
  { src: "./assets/images/Image2.png", name: "by 吳彥良" },
  { src: "./assets/images/Image2.png", name: "by 吳彥良" },
  { src: "./assets/images/Image2.png", name: "by 吳彥良" },
  { src: "./assets/images/Image3.png", name: "by 花心寶貝" },
  { src: "./assets/images/Image3.png", name: "by 花心寶貝" },
  { src: "./assets/images/Image3.png", name: "by 花心寶貝" },
  { src: "./assets/images/Image3.png", name: "by 花心寶貝" },
  { src: "./assets/images/Image4.png", name: "by 非典型薑餅性戀族群" },
  { src: "./assets/images/Image4.png", name: "by 非典型薑餅性戀族群" },
  { src: "./assets/images/Image4.png", name: "by 非典型薑餅性戀族群" },
  { src: "./assets/images/Image4.png", name: "by 非典型薑餅性戀族群" },
  { src: "./assets/images/Image5.png", name: "by 哈哈是我啦" },
  { src: "./assets/images/Image6.png", name: "by 洪安" },
  { src: "./assets/images/Image7.png", name: "by 淑芬" },
  { src: "./assets/images/Image8.png", name: "by 游曉貞" },
  { src: "./assets/images/Image9.png", name: "by 嗨海" },
];
let frameIndex = 0;
const frameIndexMax = 10;
let frameIndex2 = 0;
const frameIndexMax2 = 15;

const imagePath = "./assets/test/background";
const imageType = ".png";

function getFrameIndex(index) {
  return imagePath + index + imageType;
}

function getRndGachapon() {
  return gachapons[Math.floor(Math.random() * gachapons.length)];
}
