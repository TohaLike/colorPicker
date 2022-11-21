const colorBoxHue = document.querySelector('.color__box__hue');
const pickerCursorHue = document.querySelector('.picker__cursor__hue');
const canvasHueBox = document.getElementById('color__canvas__hue');
const contextHueBox = canvasHueBox.getContext('2d', {willReadFrequently: true});
const spectrumCanvas = document.getElementById('hue__canvas');
const colorHueBox = document.querySelector('.color__spectrum');
const spectrumContext = spectrumCanvas.getContext('2d', {willReadFrequently: true});
const hueCursor = document.querySelector('.picker__hue');
const rgbIndexHue = document.querySelector('.rgb__indexHue');
const hslIndexHue = document.querySelector('.hsl__indexHue');
const hexIndexHue = document.querySelector('.hex__indexHue');
const pickerHue = document.querySelector('.color__picker__hue__main');
const pickerHex = document.querySelector('.color__picker__main');
const hslBtn = document.querySelector('.hsl__picker');
const hexBtn = document.querySelector('.hex__picker');
const btnColors = document.querySelectorAll('.btn__colors');


// Closed Context
// document.oncontextmenu = (e) => {
//     e.preventDefault();
// };

// Colors Buttons
let colorsForBtn = [
    'rgb(255, 0, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 0, 255)',
    'rgb(127, 0, 255)',
    'rgb(231, 84, 128)',
    'rgb(255,255,0)',
    'rgb(255, 165, 0)',
    'rgb(200, 162, 200)',
    'rgb(41, 49, 51)',
    'rgb(70, 68, 81)',
    'rgb(255, 255, 255)',
    'rgb(0, 0, 0)'
];

for (let i = 0; i < colorsForBtn.length; i++) {
    btnColors[i].style.background = colorsForBtn[i];
    btnColors[i].onmousedown = () => {
        colorResult.style.backgroundColor = colorsForBtn[i];
        // console.log(colorsForBtn[i]);
    };
}; 


// LinearGradiet Hue
let widthContext = colorHueBox.width;
let heightContext = colorHueBox.height;
let colorHueBackGround = spectrumContext.createLinearGradient(0, 0, 0, heightContext);
colorHueBackGround.addColorStop(0.03, "hsl(0, 100%, 50%)");
colorHueBackGround.addColorStop(0.17, "hsl(298.8, 100%, 50%)");
colorHueBackGround.addColorStop(0.33, "hsl(241.2, 100%, 50%)");
colorHueBackGround.addColorStop(0.50, "hsl(180, 100%, 50%)");
colorHueBackGround.addColorStop(0.67, "hsl(118.8, 100%, 50%)");
colorHueBackGround.addColorStop(0.83, "hsl(61.2, 100%, 50%)");
colorHueBackGround.addColorStop(1.00, "hsl(360, 100%, 50%)");
spectrumContext.fillStyle = colorHueBackGround;
spectrumContext.fillRect(0, 0, widthContext, heightContext);
rgbIndexHue.innerHTML = 'rgb(255, 255, 255)';
hslIndexHue.innerHTML = 'hsl(0, 0%, 100%)';
hexIndexHue.innerHTML = `#ffffff`;


// Spectrum Hue
let positionHue = 0;
let hueShiftY = 20;
spectrumCanvas.addEventListener('mousedown', (event) => {
    event.preventDefault();
    hueMouseY(event);
    document.addEventListener('mousemove', hueMouseY);
    document.addEventListener('mousedown', getHueColor);
    document.addEventListener('mousemove', getHueColor);
    document.addEventListener('mousedown', getColorCursor);
    document.addEventListener('mouseup', mouseHueUp);
});

hueCursor.onmousedown = (event) => {
    event.preventDefault();
    hueShiftY = event.clientY - hueCursor.getBoundingClientRect().top;
    document.addEventListener('mousemove', hueMouseY);
    document.addEventListener('mousemove', getHueColor);
    document.addEventListener('mouseup', mouseHueUp);
};

function hueMouseY(event) {
    let newHueTop = event.clientY - hueShiftY - colorHueBox.getBoundingClientRect().top;
    if (newHueTop < 0) newHueTop = 0;
    let topHueEdge = colorHueBox.offsetHeight - hueCursor.offsetHeight;
    if (newHueTop > topHueEdge) newHueTop = topHueEdge;
    hueCursor.style.top = newHueTop + 'px';
    positionHue = newHueTop;
};

function mouseHueUp() {
    document.removeEventListener('mousedown', getColorCursor);
    document.removeEventListener('mousedown', getHueColor);
    document.removeEventListener('mousemove', getHueColor)
    document.removeEventListener('mousemove', hueMouseY)
    document.removeEventListener('mouseup', hueMouseY)
};

function RGBToHSL(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const l = Math.max(r, g, b);
    const s = l - Math.min(r, g, b);
    const h = s ? l === r ? (g - b) / s : l === g ? 2 + (b - r) / s : 4 + (r - g) / s : 0;
    return [
        60 * h < 0 ? 60 * h + 360 : 60 * h,
        100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
        (100 * (2 * l - s)) / 2,
    ];
};


// LinearGradiet ColorPicker
let colorBoxWidth = colorBoxHue.width;
let colorBoxHeight = colorBoxHue.height;

let rgbMain = `rgba(255, 0, 0, 1)`;
contextHueBox.rect(0, 0, colorBoxWidth, colorBoxHeight);
setColorPicker();

function setColorPicker() {
    contextHueBox.fillStyle = rgbMain;
    contextHueBox.fillRect(0, 0, colorBoxWidth, colorBoxHeight);
    let colorWhite = spectrumContext.createLinearGradient(colorBoxWidth, 0, 0, 0);
    colorWhite.addColorStop(1, 'rgba(255, 255, 255, 1)');
    colorWhite.addColorStop(0.9, 'rgba(255, 255, 255, 1)');
    colorWhite.addColorStop(0.1, 'rgba(255, 255, 255, 0)');
    contextHueBox.fillStyle = colorWhite;
    contextHueBox.fillRect(0, 0, colorBoxWidth, colorBoxHeight);
    let colorBlack = spectrumContext.createLinearGradient(0, 0, 0, colorBoxHeight);
    colorBlack.addColorStop(0.1, 'rgba(0, 0, 0, 0)');
    colorBlack.addColorStop(0.9, 'rgba(0, 0, 0, 1)');
    colorBlack.addColorStop(1, 'rgba(0, 0, 0, 1)');
    contextHueBox.fillStyle = colorBlack;
    contextHueBox.fillRect(0, 0, colorBoxWidth, colorBoxHeight);
};

// PickerCursor
let positionHueX = 0;
let positionHueY = 0;
let shiftHueX = 20;
let shiftHueY = 20;

function colorPickerGetColor() {
    document.addEventListener('mousedown', getColorCursor);
    document.addEventListener('mousemove', getColorCursor);
    document.addEventListener('mousemove', onMouseMoveCursor);
    document.addEventListener('mouseup', onMouseUpHueCursor);
};

canvasHueBox.addEventListener('mousedown', (event) => {
    event.preventDefault();
    onMouseMoveCursor(event);
    colorPickerGetColor();
});

pickerCursorHue.onmousedown = (event) => {
    event.preventDefault();
    shiftHueX = event.clientX - pickerCursorHue.getBoundingClientRect().left;
    shiftHueY = event.clientY - pickerCursorHue.getBoundingClientRect().top;
    colorPickerGetColor();
};

function onMouseMoveCursor(event) {
    let newLeft = event.clientX - shiftHueX - colorBoxHue.getBoundingClientRect().left;
    let newTop = event.clientY - shiftHueY - colorBoxHue.getBoundingClientRect().top;
    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;
    let rightEdge = colorBoxHue.offsetWidth - pickerCursorHue.offsetWidth;
    let topEdge = colorBoxHue.offsetHeight - pickerCursorHue.offsetHeight;
    if (newLeft > rightEdge) newLeft = rightEdge;
    if (newTop > topEdge) newTop = topEdge;
    pickerCursorHue.style.left = newLeft + 'px';
    pickerCursorHue.style.top = newTop + 'px';
    positionHueX = newLeft;
    positionHueY = newTop;
};

function onMouseUpHueCursor() {
    document.removeEventListener('mousedown', getColorCursor);
    document.removeEventListener('mousemove', getColorCursor);
    document.removeEventListener('mousemove', onMouseMoveCursor);
    document.removeEventListener('mouseup', onMouseUpHueCursor);
};

function getHueColor() {
    let imageDataHue = spectrumContext.getImageData(0, positionHue, 1, 1).data;
    let [r, g, b] = imageDataHue;
    let [h, s, l] = RGBToHSL(r, g, b);
    rgbMain = `rgb(${imageDataHue[0]}, ${imageDataHue[1]}, ${imageDataHue[2]})`;
    let hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);
    document.addEventListener('mousemove', getColorCursor);
    document.addEventListener('mouseup', onMouseUpHueCursor);
    setColorPicker();
    rgbR.value = `${imageDataHue[0]}`;
    rgbG.value = `${imageDataHue[1]}`;
    rgbB.value = `${imageDataHue[2]}`;
    hexInputIndex.value = `#${hex(r)}${hex(g)}${hex(b)}`;
    hslH.value = `${Math.round(h)}`;
    hslS.value = `${Math.round(s)}`;
    hslL.value = `${Math.round(l)}`;
};

function getColorCursor() {
    let dataImage = contextHueBox.getImageData(positionHueX, positionHueY, 1, 1).data;
    let [r, g, b] = dataImage;
    let [h, s, l] = RGBToHSL(r, g, b);
    let hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);
    // colorResult.style.backgroundColor = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    rgbIndexHue.innerHTML = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    hexIndexHue.innerHTML = `#${hex(r)}${hex(g)}${hex(b)}`;
    hslIndexHue.innerHTML = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    rgbR.value = `${dataImage[0]}`;
    rgbG.value = `${dataImage[1]}`;
    rgbB.value = `${dataImage[2]}`;
    hexInputIndex.value = `#${hex(r)}${hex(g)}${hex(b)}`;
    hslH.value = `${Math.round(h)}`;
    hslS.value = `${Math.round(s)}`;
    hslL.value = `${Math.round(l)}`;
};