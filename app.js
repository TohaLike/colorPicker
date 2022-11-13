const colorResult = document.querySelector('.color__result');
const colorIndex = document.querySelector('.color__index');

const rgbIndex = document.querySelector('.rgb__index');
const hslIndex = document.querySelector('.hsl__index');
const hexIndex = document.querySelector('.hex__index');
const rgbR = document.getElementById('rgb__r');
const rgbG = document.getElementById('rgb__g');
const rgbB = document.getElementById('rgb__b');
const hexInputIndex = document.getElementById('hex__input__index');
const hslH = document.getElementById('hsl__h');
const hslS = document.getElementById('hsl__s');
const hslL = document.getElementById('hsl__l');
const inputRGB = document.querySelector('.color__search__rgb');
const inputHEX = document.querySelector('.color__search__hex');
const inputHSL = document.querySelector('.color__search__hsl');
const typeColorRgb = document.querySelector('.type__color__rgb');
const typeColorHex = document.querySelector('.type__color__hex');
const typeColorHsl = document.querySelector('.type__color__hsl');
const searchBtnRgb = document.querySelector('.search__btn__rgb');
const searchBtnHex = document.querySelector('.search__btn__hex');
const searchBtnHsl = document.querySelector('.search__btn__hsl');
const btnRed = document.querySelector('.btn__red'); 
const btnGreen = document.querySelector('.btn__green');
const btnDarkBlue = document.querySelector('.btn__dark__blue');
const btnViolet = document.querySelector('.btn__violet');
const btnDarkPink = document.querySelector('.btn__dark__pink');
const btnYellow = document.querySelector('.btn__yellow');
const btnOrange = document.querySelector('.btn__orange');
const btnLilac = document.querySelector('.btn__lilac');
const btnWhite = document.querySelector('.btn__white');
const btnBlack = document.querySelector('.btn__black');



// LinearGradiet Hue
const spectrumCanvas = document.getElementById('hue__canvas');
const colorHueBox = document.querySelector('.color__spectrum');
const spectrumContext = spectrumCanvas.getContext('2d', {willReadFrequently: true});
const hueCursor = document.querySelector('.picker__hue');

let width = colorHueBox.width;
let height = colorHueBox.height;
let colorHueBackGround = spectrumContext.createLinearGradient(0, 0, 0, height);
colorHueBackGround.addColorStop(0, 'hsl(0, 100%, 50%)');
colorHueBackGround.addColorStop(0.17, 'hsl(298.8, 100%, 50%)');
colorHueBackGround.addColorStop(0.34, 'hsl(241.2, 100%, 50%)');
colorHueBackGround.addColorStop(0.51, 'hsl(180, 100%, 50%)');
colorHueBackGround.addColorStop(0.68, 'hsl(118.8, 100%, 50%)');
colorHueBackGround.addColorStop(0.85, 'hsl(61.2, 100%, 50%)');
colorHueBackGround.addColorStop(1, 'hsl(360, 100%, 50%)');
spectrumContext.fillStyle = colorHueBackGround;
spectrumContext.fillRect(0, 0, width, height);


// Spectrum Hue
let positionHue = 0;
let hueShiftY = 20;

spectrumCanvas.addEventListener('mousedown', (event) => {
    event.preventDefault();
    hueMouseY(event);
    document.addEventListener('mousemove', hueMouseY);
    document.addEventListener('mousedown', getHueColor);
    document.addEventListener('mousemove', getHueColor);
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
const colorBox = document.querySelector('.color__box');
const pickerCursor = document.querySelector('.picker__cursor');
const canvas = document.getElementById('color__canvas');
const context = canvas.getContext('2d', {willReadFrequently: true});



let colorBoxWidth = colorBox.width;
let colorBoxHeight = colorBox.height;

let rgbMain = `rgba(255, 0, 0, 1)`;
    
    let colorWhite = context.createLinearGradient(0, colorBoxHeight, 0, 0);
    colorWhite.addColorStop(1, 'rgba(255, 255, 255, 1)');
    colorWhite.addColorStop(0, 'rgba(255, 255, 255, 0)');
    context.fillStyle = colorWhite;
    context.fillRect(0, 0, colorBoxWidth, colorBoxHeight);

    let colorRed = context.createLinearGradient(0, 0, colorBoxWidth, 0);
    colorRed.addColorStop(1, 'rgba(255, 0, 0, 1)');
    colorRed.addColorStop(0.2, 'rgba(255, 0, 0, 0)');
    context.fillStyle = colorRed;
    context.fillRect(0, 0, colorBoxWidth, colorBoxHeight);

    let colorBlack = context.createLinearGradient(0, 0, 0, colorBoxHeight);
    colorBlack.addColorStop(0.4, 'rgba(0, 0, 0, 0)');
    colorBlack.addColorStop(1, 'rgba(0, 0, 0, 1)');
    context.fillStyle = colorBlack;
    context.fillRect(0, 0, colorBoxWidth, colorBoxHeight);



let positionX = 0;
let positionY = 0;
let shiftX = 20;
let shiftY = 20;

canvas.addEventListener('mousedown', (event) => {
    event.preventDefault();
    onMouseMove(event);
    document.addEventListener('mousedown', getColorPicker);
    document.addEventListener('mousemove', getColorPicker);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

pickerCursor.onmousedown = (event) => {
    event.preventDefault();
    shiftX = event.clientX - pickerCursor.getBoundingClientRect().left;
    shiftY = event.clientY - pickerCursor.getBoundingClientRect().top;
    document.addEventListener('mousedown', getColorPicker);
    document.addEventListener('mousemove', getColorPicker);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
};

function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - colorBox.getBoundingClientRect().left;
    let newTop = event.clientY - shiftY - colorBox.getBoundingClientRect().top;
    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;
    let rightEdge = colorBox.offsetWidth - pickerCursor.offsetWidth;
    let topEdge = colorBox.offsetHeight - pickerCursor.offsetHeight;
    if (newLeft > rightEdge) newLeft = rightEdge;
    if (newTop > topEdge) newTop = topEdge;
    pickerCursor.style.left = newLeft + 'px';
    pickerCursor.style.top = newTop + 'px';
    positionX = newLeft;
    positionY = newTop;
};

function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousedown', getColorPicker);
    document.removeEventListener('mousemove', getColorPicker);
    document.removeEventListener('mousemove', onMouseMove);
};

function getHueColor() {
    let imageDataHue = spectrumContext.getImageData(0, positionHue, 1, 1).data;
    let [r, g, b] = imageDataHue;
    let [h, s, l] = RGBToHSL(r, g, b);
    canvas.style.color = `rgb(${imageDataHue[0]}, ${imageDataHue[1]}, ${imageDataHue[2]})`;
};

function getColorPicker() {
    let dataImage = context.getImageData(positionX, positionY, 1, 1).data;
    let [r, g, b] = dataImage
    colorResult.style.backgroundColor = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
};





















searchBtnRgb.addEventListener('click', () => {
    colorResult.style.backgroundColor = `rgb(${rgbR.value}, ${rgbG.value}, ${rgbB.value})`;
});
typeColorRgb.addEventListener('click', () => {
    if (inputHEX.style.display = 'none') {
        inputRGB.style.display = 'none';
        inputHEX.style.display = 'block';
    };
});

searchBtnHex.addEventListener('click', () => {
    colorResult.style.backgroundColor = `${hexInputIndex.value}`;
});
typeColorHex.addEventListener('click', () => {
    if (inputHSL.style.display = 'none') {
        inputHEX.style.display = 'none';
        inputHSL.style.display = 'block';
    };
});

searchBtnHsl.addEventListener('click', () => {
    colorResult.style.backgroundColor = `hsl(${hslH.value}, ${hslS.value}%, ${hslL.value}%)`;
});
typeColorHsl.addEventListener('click', () => {
    if (inputRGB.style.display = 'none') {
        inputRGB.style.display = 'block';
        inputHSL.style.display = 'none';
    };
});






btnRed.style.backgroundColor = 'rgb(255, 0, 0)';
btnGreen.style.backgroundColor = 'rgb(0, 255, 0)';
btnDarkBlue.style.backgroundColor = 'rgb(0, 0, 255)';
btnViolet.style.backgroundColor = 'rgb(127, 0, 255)';
btnDarkPink.style.backgroundColor = 'rgb(231, 84, 128)';
btnYellow.style.backgroundColor = 'rgb(255,255,0)';
btnOrange.style.backgroundColor = 'rgb(255, 165, 0)';
btnLilac.style.backgroundColor = 'rgb(200, 162, 200)';
btnWhite.style.backgroundColor = 'rgb(255, 255, 255)';
btnBlack.style.backgroundColor = 'rgb(0, 0, 0)';

btnRed.onclick = () => {
    return colorResult.style.backgroundColor = 'rgb(255, 0, 0)';
};
btnGreen.onclick = () => {
    return colorResult.style.backgroundColor = 'rgb(0, 255, 0)';
};
btnDarkBlue.onclick = () => {
    return colorResult.style.backgroundColor = 'rgb(0, 0, 255)';
};
btnViolet.onclick = () => {
    return colorResult.style.backgroundColor = 'rgb(127, 0, 255)';
};
btnDarkPink.onclick = () => {
    return colorResult.style.backgroundColor = 'rgb(231, 84, 128)';
};
btnYellow.onclick = () => {
    return colorResult.style.backgroundColor = 'rgb(255,255,0)';
};
btnOrange.onclick = () => {
    return colorResult.style.backgroundColor = 'rgb(255, 165, 0)';
};
btnLilac.onclick = () => {
    return colorResult.style.backgroundColor = 'rgb(200, 162, 200)';
};
btnWhite.onclick = () => {
    return colorResult.style.backgroundColor = 'rgb(255, 255, 255)';
};
btnBlack.onclick = () => {
    return colorResult.style.backgroundColor = 'rgb(0, 0, 0)';
};