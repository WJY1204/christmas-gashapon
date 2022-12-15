// Control animation playing
let isplaying = false;

// Canvas ratio
const ratioW = 985;
const ratioH = 1880;
const screenWidth = window.visualViewport.width;
const screenHeight = window.visualViewport.height;
const _height = screenHeight;
const _width = (_height * ratioW) / ratioH;

const _gashponWidth = screenWidth * 0.95;
const _gashponHeight = screenWidth * 0.95;

const nameRatioW = 984;
const nameRatioH = 450;
const _nameWidth = screenWidth * 1.2;
const _nameHeight = (_nameWidth * nameRatioH) / nameRatioW;

let gashaponMachine = {
  img: null,
  x: (screenWidth - _width) / 2,
  y: (screenHeight - _height) / 2,
  width: 495,
  height: 947,
  currentframe: 0,
  totalIdleFrame: 3,
  totalDrawFrame: 24,
};

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

function getRndGachapon() {
  return gachapons[Math.floor(Math.random() * gachapons.length)];
}
