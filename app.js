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
colorHueBackGround.addColorStop(0, 'rgba(255, 0, 0, 1)');
colorHueBackGround.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
colorHueBackGround.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
colorHueBackGround.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
colorHueBackGround.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
colorHueBackGround.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
colorHueBackGround.addColorStop(1, 'rgba(255, 0, 0, 1)');
spectrumContext.fillStyle = colorHueBackGround;
spectrumContext.fillRect(0, 0, width, height);


// Spectrum Hue
let hueShiftY = 20;
spectrumCanvas.addEventListener('mousedown', (event) => {
    event.preventDefault();
    hueMouseY(event);
    document.addEventListener('mouseup', mouseHueUp);
    document.addEventListener('mousemove', hueMouseY);
});

hueCursor.onmousedown = (event) => {
    event.preventDefault()
    hueShiftY = event.clientY - hueCursor.getBoundingClientRect().top;
    document.addEventListener('mousemove', hueMouseY);
    document.addEventListener('mouseup', mouseHueUp);
};

function hueMouseY(event) {
    let newHueTop = event.clientY - hueShiftY - colorHueBox.getBoundingClientRect().top;
    if (newHueTop < 0) newHueTop = 0;
    let topHueEdge = colorHueBox.offsetHeight - hueCursor.offsetHeight;
    if (newHueTop > topHueEdge) newHueTop = topHueEdge;
    hueCursor.style.top = newHueTop + 'px';
};

function mouseHueUp() {
    document.removeEventListener('mousemove', hueMouseY)
    document.removeEventListener('mouseup', hueMouseY)
};







// LinearGradiet ColorPicker
const colorBox = document.querySelector('.color__box');
const pickerCursor = document.querySelector('.picker__cursor');
const canvas = document.getElementById('color__canvas');
const context = canvas.getContext('2d', {willReadFrequently: true});


let colorBoxWidth = colorBox.width;
let colorBoxHeight = colorBox.height;
let colorBackGround = context.fillRect(0, 0, colorBoxWidth, colorBoxHeight);
colorBackGround = context.createLinearGradient(0, 0, 0, colorBoxHeight);
colorBackGround.addColorStop(0, 'rgba(255, 255, 255, 1');
colorBackGround.addColorStop(0.9, 'rgba(0, 0, 0, 0)');
colorBackGround.addColorStop(1, 'rgba(0, 0, 0, 1)');
context.fillStyle = colorBackGround;
context.fillRect(0, 0, colorBoxWidth, colorBoxHeight);

let positionX = 0;
let positionY = 0;
let shiftX = 20;
let shiftY = 20;

canvas.addEventListener('mousedown', (event) => {
    event.preventDefault();
    onMouseMove(event);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

pickerCursor.onmousedown = (event) => {
    event.preventDefault();
    shiftX = event.clientX - pickerCursor.getBoundingClientRect().left;
    shiftY = event.clientY - pickerCursor.getBoundingClientRect().top;
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
    document.removeEventListener('mousemove', onMouseMove);
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