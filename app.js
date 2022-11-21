const colorBox = document.querySelector('.color__box');
const pickerCursor = document.querySelector('.picker__cursor');
const colorResult = document.querySelector('.color__result');
const colorIndex = document.querySelector('.color__index');
const canvas = document.getElementById('color__canvas');
const context = canvas.getContext('2d', {willReadFrequently: true});
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
const btnDeleteAll = document.querySelector('.btn__delete__all');
const btnClear = document.querySelector('.btn__clear');
const btnSaveMain = document.querySelector('.btn__save__main');
const colorSaveMain = document.querySelector('.color__save__main');
const colorBlock = document.querySelector('.color__block');
const notificationColorSaved = document.querySelector('.chips__color__notification');
const textSave = document.querySelector('.text__save');
const typeColorBtn = document.querySelector('.type__color__btn');

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


// LinearGradiet ColorPicker
let width = colorBox.width;
let height = colorBox.height;
let colorBackGround = context.createLinearGradient(0, 0, width, 0);
colorBackGround.addColorStop(0, 'rgba(255, 0, 0, 1)');
colorBackGround.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
colorBackGround.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
colorBackGround.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
colorBackGround.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
colorBackGround.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
colorBackGround.addColorStop(1, 'rgba(255, 0, 0, 1)');
context.fillStyle = colorBackGround;
context.fillRect(0, 0, width, height);
colorBackGround = context.createLinearGradient(0, 0, 0, height);
colorBackGround.addColorStop(0, 'rgba(255, 255, 255, 1');
colorBackGround.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
colorBackGround.addColorStop(0.5, 'rgba(0, 0, 0, 0)');
colorBackGround.addColorStop(1, 'rgba(0, 0, 0, 1)');
context.fillStyle = colorBackGround;
context.fillRect(0, 0, width, height);
rgbIndex.innerHTML = 'rgb(255, 255, 255)';
hslIndex.innerHTML = 'hsl(0, 0%, 100%)';
hexIndex.innerHTML = `#ffffff`;


// Picker
let positionX = 0;
let positionY = 0;
let shiftX = 20;
let shiftY = 20;

canvas.addEventListener('mousedown', (event) => {
    event.preventDefault();
    onMouseMove(event);
    canvas.addEventListener('mousedown', getColorPicker);
    document.addEventListener('mousemove', getColorPicker);
    document.addEventListener('mousedown', getColorPicker);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});


// ColorPicker
pickerCursor.onmousedown = (event) => {
    event.preventDefault();
    shiftX = event.clientX - pickerCursor.getBoundingClientRect().left;
    shiftY = event.clientY - pickerCursor.getBoundingClientRect().top;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousemove', getColorPicker);
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
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mousemove', getColorPicker);
    document.removeEventListener('mousedown', getColorPicker);
    canvas.removeEventListener('mousedown', getColorPicker)
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

function colorWhite() {
    colorResult.style.backgroundColor = 'rgb(255, 255, 255)';
    rgbIndex.innerHTML = 'rgb(255, 255, 255)';
    hexIndex.innerHTML = `#ffffff`;
    rgbR.value = 255;
    rgbG.value = 255;
    rgbB.value = 255;
    hexInputIndex.value = `#ffffff`;
    hslH.value = 0;
    hslS.value = 100;
    hslL.value = 0;
};

function colorBlack() {
    colorResult.style.backgroundColor = 'rgb(0, 0, 0)';
    rgbIndex.innerHTML = 'rgb(0, 0, 0)';
    hslIndex.innerHTML = 'hsl(0, 100%, 0%)';
    hexIndex.innerHTML = '#000000';
    rgbR.value = 0;
    rgbG.value = 0;
    rgbB.value = 0;
    hexInputIndex.value = `#000000`;
    hslH.value = 0;
    hslS.value = 0;
    hslL.value = 0;
};

function getColorPicker() {
    let imageData = context.getImageData(positionX, positionY, 1, 1).data;
    let [r, g, b] = imageData;
    let [h, s, l] = RGBToHSL(r, g, b);
    let hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);
    colorResult.style.backgroundColor = `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`;
    rgbIndex.innerHTML = `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`;
    hexIndex.innerHTML = `#${hex(r)}${hex(g)}${hex(b)}`;
    hslIndex.innerHTML = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    rgbR.value = `${imageData[0]}`;
    rgbG.value = `${imageData[1]}`;
    rgbB.value = `${imageData[2]}`;
    hexInputIndex.value = `#${hex(r)}${hex(g)}${hex(b)}`;
    hslH.value = `${Math.round(h)}`;
    hslS.value = `${Math.round(s)}`;
    hslL.value = `${Math.round(l)}`;
    if (positionX === 0 && positionY === 0) return colorWhite();
    if (positionX === 325 && positionY === 0) return colorWhite();
    if (positionX === 0 && positionY === 325) return colorBlack();
    if (positionX === 325 && positionY === 325) return colorBlack();
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
    colorResult.style.backgroundColor = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
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


// TypePicker
hexBtn.addEventListener('click', () => {
    if (pickerHue.style.display = 'block') {
        pickerHue.style.display = 'none';
        pickerHex.style.display = 'block';
    };
});

hslBtn.addEventListener('click', () => {
    if (pickerHex.style.display = 'block') {
        pickerHex.style.display = 'none';
        pickerHue.style.display = 'block';
    };
});


// Search Section
function eventColorSearch() {
    colorResult.style.backgroundColor = `rgb(${rgbR.value}, ${rgbG.value}, ${rgbB.value})`
};

rgbR.onchange = () => eventColorSearch();
rgbG.onchange = () => eventColorSearch();
rgbB.onchange = () => eventColorSearch();


searchBtnRgb.onmousedown = () => eventColorSearch();

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


// SafeColor
let colorSaveStorage = [];
let colorSaveBtn = '';

btnSaveMain.addEventListener('click', (event) => {
    event.preventDefault();
    createDeleteElement();
    textSave.style.display = 'none';
});

btnClear.addEventListener('click', () => {
    colorResult.style.backgroundColor = `rgb(${rgbR.value = 0}, ${rgbG.value = 0}, ${rgbB.value = 0})`;
});

btnDeleteAll.addEventListener('click', () => {
    colorSaveStorage.splice(colorSaveStorage);
    colorBlock.innerHTML = '';
    textSave.style.display = 'block';
});


function createDeleteElement() { 
    const btn = document.createElement('button');   
    btn.style.backgroundColor = `rgb(${rgbR.value}, ${rgbG.value}, ${rgbB.value})`;
    btn.className = 'type__color__btn';
    colorBlock.appendChild(btn);

    let colorBtnForm = {
        color: btn.style.backgroundColor,
        value: colorSaveStorage.length
    };
    colorSaveStorage.push(colorBtnForm);
    
    btn.onclick = () => chips(); 


    btn.addEventListener('mousedown', (event) => {
        colorSaveBtn = btn.style.backgroundColor;
        colorResult.style.backgroundColor = btn.style.backgroundColor;
        navigator.clipboard.writeText(colorSaveBtn);

        if (event.button === 2) {
            colorBlock.removeChild(btn); 
            colorSaveStorage.pop(colorBtnForm);
            colorResult.style.backgroundColor = 'rgb(255, 255, 255)';
        };  
        if (colorSaveStorage.length === 0) textSave.style.display = 'block';
    });
};

function chips() {
    const btnChips = document.createElement('div');
    btnChips.className = 'btn__chips';
    btnChips.classList.remove('remove__message');
    btnChips.textContent = 'Saved!'
    btnChips.style.backgroundColor = colorSaveBtn;
    notificationColorSaved.appendChild(btnChips);
    setTimeout(() => btnChips.remove(), 5000);
};




