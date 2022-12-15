// Control animation playing
let isplaying = false;

// Canvas ratio
const ratioW = 985;
const ratioH = 1880;
const screenWidth = window.visualViewport.width;
const screenHeight = window.visualViewport.height;
const _height = screenHeight;
const _width = (_height * ratioW) / ratioH;

let gashaponMachine = {
  img: null,
  x: (screenWidth - _width) / 2,
  y: (screenHeight - _height) / 2,
  width: 495,
  height: 948,
  currentframe: 0,
  totalIdleFrame: 3,
  totalDrawFrame: 24,
};
