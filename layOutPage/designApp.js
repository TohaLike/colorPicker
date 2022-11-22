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


const btnColors = document.querySelectorAll('.btn__colors');
const btnDeleteAll = document.querySelector('.btn__delete__all');
const btnSaveMain = document.querySelector('.btn__save__main');
const colorSaveMain = document.querySelector('.color__save__main');
const colorBlock = document.querySelector('.color__block');
const notificationColorSaved = document.querySelector('.chips__color__notification');
const textSave = document.querySelector('.text__save');



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

let colorForSave = '';

function getHueColor() {
    let imageDataHue = spectrumContext.getImageData(0, positionHue, 1, 1).data;
    let [r, g, b] = imageDataHue;
    let [h, s, l] = RGBToHSL(r, g, b);
    rgbMain = `rgb(${imageDataHue[0]}, ${imageDataHue[1]}, ${imageDataHue[2]})`;
    colorForSave = `rgb(${imageDataHue[0]}, ${imageDataHue[1]}, ${imageDataHue[2]})`;
    let hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);
    document.addEventListener('mousemove', getColorCursor);
    document.addEventListener('mouseup', onMouseUpHueCursor);
    setColorPicker();
};

function getColorCursor() {
    let dataImage = contextHueBox.getImageData(positionHueX, positionHueY, 1, 1).data;
    let [r, g, b] = dataImage;
    let [h, s, l] = RGBToHSL(r, g, b);
    let hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);
    colorForSave = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    rgbIndexHue.innerHTML = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    hexIndexHue.innerHTML = `#${hex(r)}${hex(g)}${hex(b)}`;
    hslIndexHue.innerHTML = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    // console.log(colorForSave);
};


// SafeColor
let colorSaveStorage = [];
let colorSaveBtn = '';

btnSaveMain.addEventListener('click', (event) => {
    event.preventDefault();
    createDeleteElement();
    textSave.style.display = 'none';
});

btnDeleteAll.addEventListener('click', () => {
    colorSaveStorage.splice(colorSaveStorage);
    colorBlock.innerHTML = '';
    textSave.style.display = 'block';
});

// Create color
function createDeleteElement() { 
    const btn = document.createElement('button');   
    btn.style.backgroundColor = colorForSave;
    btn.className = 'type__color__btn';
    colorBlock.appendChild(btn);
    
    let colorBtnForm = {
        color: btn.style.backgroundColor,
        value: colorSaveStorage.length
    };
    colorSaveStorage.push(colorBtnForm);
    
    //  Add color
    btn.onclick = () => chips(); 
    btn.addEventListener('mousedown', (event) => {
        colorForSave = btn.style.backgroundColor;
        navigator.clipboard.writeText(colorForSave);

        if (event.button === 2) {
            colorBlock.removeChild(btn); 
            colorSaveStorage.pop(colorBtnForm);
        };  
        if (colorSaveStorage.length === 0) textSave.style.display = 'block';
    });
};

function chips() {
    const btnChips = document.createElement('div');
    btnChips.className = 'btn__chips';
    btnChips.classList.remove('remove__message');
    btnChips.textContent = 'Saved!'
    btnChips.style.backgroundColor = colorForSave;
    notificationColorSaved.appendChild(btnChips);
    setTimeout(() => btnChips.remove(), 5000);
};



// Color Picker for LayOut
const layOutHeader = document.querySelector('.header__main');
const layOutFooter = document.querySelector('.footer__layout__main');
const layOutArticle = document.querySelector('.article__layout__main');
const simpleButton = document.querySelector('.simple__button');
const imgLayout = document.querySelector('.img__layout');
const layoutLogoImage = document.querySelector('.layout__logo__image');


const editingBtnText = document.querySelector('.editing__btn__text');
const editingBtnArticle = document.querySelector('.editing__btn__article');
const editingBtnLogoImage = document.querySelector('.editing__btn__logoImage');
const editingBtnButtons = document.querySelector('.editing__btn__buttons');
const editingBtnHeaderFooter = document.querySelector('.editing__btn__header__footer');
const editingBtnBorders = document.querySelector('.editing__btn__borders');
const editingBtnImage = document.querySelector('.editing__btn__image');



// Canvas Article
const colorPickerMainArticle = document.querySelector('.color__picker__main__Article');




const hueCanvasArticle = document.getElementById('hue__canvas__Article');
const hueContextArticle = hueCanvasArticle.getContext('2d', {willReadFrequently: true});
const colorSpectrumArticle = document.querySelector('.color__spectrum__Article');
const pickerArticle = document.querySelector('.picker__Article');

const rgbIndexArticle = document.querySelector('.rgb__index__Article');
const hslIndexArticle = document.querySelector('.hsl__index__Article');
const hexIndexArticle = document.querySelector('.hex__index__Article');


// LinearGradiet Article
let widthSpectrumContextArticle = colorSpectrumArticle.width;
let heightSpectrumContextArticle = colorSpectrumArticle.height;
let colorSpectrumArticleBackGround = hueContextArticle.createLinearGradient(0, 0, 0, heightSpectrumContextArticle);
colorSpectrumArticleBackGround.addColorStop(0.03, "hsl(0, 100%, 50%)");
colorSpectrumArticleBackGround.addColorStop(0.17, "hsl(298.8, 100%, 50%)");
colorSpectrumArticleBackGround.addColorStop(0.33, "hsl(241.2, 100%, 50%)");
colorSpectrumArticleBackGround.addColorStop(0.50, "hsl(180, 100%, 50%)");
colorSpectrumArticleBackGround.addColorStop(0.67, "hsl(118.8, 100%, 50%)");
colorSpectrumArticleBackGround.addColorStop(0.83, "hsl(61.2, 100%, 50%)");
colorSpectrumArticleBackGround.addColorStop(1.00, "hsl(360, 100%, 50%)");
hueContextArticle.fillStyle = colorSpectrumArticleBackGround;
hueContextArticle.fillRect(0, 0, widthSpectrumContextArticle, heightSpectrumContextArticle);

rgbIndexArticle.innerHTML = 'rgb(255, 255, 255)';
hslIndexArticle.innerHTML = 'hsl(0, 0%, 100%)';
hexIndexArticle.innerHTML = `#ffffff`;


// Spectrum Article
let articlePositionHue = 0;
let articleShiftY = 20;

hueCanvasArticle.addEventListener('mousedown', (event) => {
    event.preventDefault();
    hueArticleMouseY(event);
    document.addEventListener('mousemove', hueArticleMouseY);
    document.addEventListener('mousedown', getArticleHueColor);
    document.addEventListener('mousemove', getArticleHueColor);
    // document.addEventListener('mousedown', getColorCursor);
    document.addEventListener('mouseup', mouseArticleHueUp);
});

pickerArticle.onmousedown = (event) => {
    event.preventDefault();
    articleShiftY = event.clientY - pickerArticle.getBoundingClientRect().top;
    document.addEventListener('mousemove', hueArticleMouseY);
    document.addEventListener('mousemove', getArticleHueColor);
    document.addEventListener('mouseup', mouseArticleHueUp);
};

function hueArticleMouseY(event) {
    let newHueTop = event.clientY - articleShiftY - colorSpectrumArticle.getBoundingClientRect().top;
    if (newHueTop < 0) newHueTop = 0;
    let topHueEdge = colorSpectrumArticle.offsetHeight - pickerArticle.offsetHeight;
    if (newHueTop > topHueEdge) newHueTop = topHueEdge;
    pickerArticle.style.top = newHueTop + 'px';
    positionHue = newHueTop;
};

function mouseArticleHueUp() {
    // document.removeEventListener('mousedown', getColorCursor);
    document.removeEventListener('mousedown', getArticleHueColor);
    document.removeEventListener('mousemove', getArticleHueColor)
    document.removeEventListener('mousemove', hueArticleMouseY)
    document.removeEventListener('mouseup', hueArticleMouseY)
};

function getArticleHueColor() {
    let imageDataHue = spectrumContext.getImageData(0, positionHue, 1, 1).data;
    let [r, g, b] = imageDataHue;
    let [h, s, l] = RGBToHSL(r, g, b);
    rgbMain = `rgb(${imageDataHue[0]}, ${imageDataHue[1]}, ${imageDataHue[2]})`;
    colorForSave = `rgb(${imageDataHue[0]}, ${imageDataHue[1]}, ${imageDataHue[2]})`;
    let hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);
    document.addEventListener('mousemove', getColorCursor);
    document.addEventListener('mouseup', onMouseUpHueCursor);
    setColorPicker();
};


const canvasArticle = document.getElementById('color__canvas__Article');
const contextArticle = canvasArticle.getContext('2d', {willReadFrequently: true});
const colorBoxArticle = document.querySelector('.color__box__Article');
const pickerCursorArticle = document.querySelector('.picker__cursor__Article');


// LinearGradiet ColorPicker
let colorArticleBoxWidth = colorBoxArticle.width;
let colorArticleBoxHeight = colorBoxArticle.height;

let rgbMainArticle = `rgba(255, 0, 0, 1)`;
contextArticle.rect(0, 0, colorArticleBoxWidth, colorArticleBoxHeight);
setArticleColorPicker();

function setArticleColorPicker() {
    contextArticle.fillStyle = rgbMainArticle;
    contextArticle.fillRect(0, 0, colorArticleBoxWidth, colorArticleBoxHeight);
    let colorWhite = hueContextArticle.createLinearGradient(colorArticleBoxWidth, 0, 0, 0);
    colorWhite.addColorStop(1, 'rgba(255, 255, 255, 1)');
    colorWhite.addColorStop(0.9, 'rgba(255, 255, 255, 1)');
    colorWhite.addColorStop(0.1, 'rgba(255, 255, 255, 0)');
    contextArticle.fillStyle = colorWhite;
    contextArticle.fillRect(0, 0, colorArticleBoxWidth, colorArticleBoxHeight);

    let colorBlack = hueContextArticle.createLinearGradient(0, 0, 0, colorArticleBoxHeight);
    colorBlack.addColorStop(0.1, 'rgba(0, 0, 0, 0)');
    colorBlack.addColorStop(0.9, 'rgba(0, 0, 0, 1)');
    colorBlack.addColorStop(1, 'rgba(0, 0, 0, 1)');
    contextArticle.fillStyle = colorBlack;
    contextArticle.fillRect(0, 0, colorArticleBoxWidth, colorArticleBoxHeight);
};


// PickerCursor
// let positionHueX = 0;
// let positionHueY = 0;
// let shiftHueX = 20;
// let shiftHueY = 20;

// function colorPickerGetColor() {
//     document.addEventListener('mousedown', getColorCursor);
//     document.addEventListener('mousemove', getColorCursor);
//     document.addEventListener('mousemove', onMouseMoveCursor);
//     document.addEventListener('mouseup', onMouseUpHueCursor);
// };

// canvasHueBox.addEventListener('mousedown', (event) => {
//     event.preventDefault();
//     onMouseMoveCursor(event);
//     colorPickerGetColor();
// });

// pickerCursorHue.onmousedown = (event) => {
//     event.preventDefault();
//     shiftHueX = event.clientX - pickerCursorHue.getBoundingClientRect().left;
//     shiftHueY = event.clientY - pickerCursorHue.getBoundingClientRect().top;
//     colorPickerGetColor();
// };

// function onMouseMoveCursor(event) {
//     let newLeft = event.clientX - shiftHueX - colorBoxHue.getBoundingClientRect().left;
//     let newTop = event.clientY - shiftHueY - colorBoxHue.getBoundingClientRect().top;
//     if (newLeft < 0) newLeft = 0;
//     if (newTop < 0) newTop = 0;
//     let rightEdge = colorBoxHue.offsetWidth - pickerCursorHue.offsetWidth;
//     let topEdge = colorBoxHue.offsetHeight - pickerCursorHue.offsetHeight;
//     if (newLeft > rightEdge) newLeft = rightEdge;
//     if (newTop > topEdge) newTop = topEdge;
//     pickerCursorHue.style.left = newLeft + 'px';
//     pickerCursorHue.style.top = newTop + 'px';
//     positionHueX = newLeft;
//     positionHueY = newTop;
// };

// function onMouseUpHueCursor() {
//     document.removeEventListener('mousedown', getColorCursor);
//     document.removeEventListener('mousemove', getColorCursor);
//     document.removeEventListener('mousemove', onMouseMoveCursor);
//     document.removeEventListener('mouseup', onMouseUpHueCursor);
// };

// let colorForSave = '';


// function getColorCursor() {
//     let dataImage = contextHueBox.getImageData(positionHueX, positionHueY, 1, 1).data;
//     let [r, g, b] = dataImage;
//     let [h, s, l] = RGBToHSL(r, g, b);
//     let hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);
//     colorForSave = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
//     rgbIndexHue.innerHTML = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
//     hexIndexHue.innerHTML = `#${hex(r)}${hex(g)}${hex(b)}`;
//     hslIndexHue.innerHTML = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
//     // console.log(colorForSave);
// };




