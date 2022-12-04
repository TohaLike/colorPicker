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

// Color Picker for LayOut
const layoutContainer = document.querySelector('.layout__container');
const layOutHeader = document.querySelector('.header__main');
const layOutFooter = document.querySelector('.footer__layout__main');
const layOutArticle = document.querySelector('.article__layout__main');
const firstSimpleButton = document.querySelector('.first__simple__button');
const secondSimpleButton = document.querySelector('.second__simple__button');
const imageMainLayout = document.querySelector('.img__layout');
const layoutLogoImage = document.querySelector('.layout__logo__image');

// Main Containers LayOut
const colorPickerHueMain = document.querySelector('.color__picker__hue__main');
const colorPickerMainArticle = document.querySelector('.color__picker__main__Article');
const colorPickerMainLogoImage = document.querySelector('.color__picker__main__LogoImage');
const colorPickerMainButtons = document.querySelector('.color__picker__main__Buttons');
const colorPickerMainFooterHeader = document.querySelector('.color__picker__main__footerHeader');
const colorPickerMainBorder = document.querySelector('.color__picker__main__Border');
const colorPickerMainImage = document.querySelector('.color__picker__main__Image');

// Buttons LayOut
const editingBtnText = document.querySelector('.editing__btn__text');
const editingBtnArticle = document.querySelector('.editing__btn__article');
const editingBtnLogoImage = document.querySelector('.editing__btn__logoImage');
const editingBtnButtons = document.querySelector('.editing__btn__buttons');
const editingBtnHeaderFooter = document.querySelector('.editing__btn__header__footer');
const editingBtnBorders = document.querySelector('.editing__btn__borders');
const editingBtnImage = document.querySelector('.editing__btn__image');


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
    'rgb(255, 255, 0)',
    'rgb(255, 165, 0)',
    'rgb(200, 162, 200)',
    'rgb(41, 49, 51)',
    'rgb(70, 68, 81)',
    'rgb(255, 255, 255)',
    'rgb(0, 0, 0)'
];

let colorsForBtnHsl = [
    'hsl(0, 100%, 50%)',
    'hsl(120, 100%, 50%)',
    'hsl(240, 100%, 50%)',
    'hsl(270, 100%, 50%)',
    'hsl(342, 100%, 50%)',
    'hsl(60, 100%, 50%)',
    'hsl(39, 100%, 50%)',
    'hsl(300, 26%, 71%)',
    'hsl(200, 13%, 18%)',
    'hsl(249, 9%, 29%)',
    'hsl(0, 0%, 100%)',
    'hsl(0, 0%, 0%)'
];

let colorsForBtnHex = [
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#7F00FF',
    '#E75480',
    '#FFFF00',
    '#FFA500',
    '#C8A2C8',
    '#293135',
    '#464451',
    '#FFFFFF',
    '#000000'
];


colorBtnForEditingSection();

function colorBtnForEditingSection() {
    for (let i = 0; i < colorsForBtn.length; i++) {
        btnColors[i].style.background = colorsForBtn[i];
        btnColors[i].onmousedown = () => {
            layoutContainer.style.color = colorsForBtn[i];
            firstSimpleButton.style.color = colorsForBtn[i];
            secondSimpleButton.style.color = colorsForBtn[i];
            rgbIndexHue.innerHTML = colorsForBtn[i];
            hslIndexHue.innerHTML = colorsForBtnHsl[i];
            hexIndexHue.innerHTML = colorsForBtnHex[i];
            colorForSave = rgbIndexHue.innerHTML;
        };
    }; 
};

function colorBtnForArticle() {
    for (let i = 0; i < colorsForBtn.length; i++) {
        btnColors[i].style.background = colorsForBtn[i];
        btnColors[i].onmousedown = () => {
            layOutArticle.style.backgroundColor = colorsForBtn[i];
            rgbIndexArticle.innerHTML = colorsForBtn[i];
            hslIndexArticle.innerHTML = colorsForBtnHsl[i];
            hexIndexArticle.innerHTML = colorsForBtnHex[i];    
            colorForSave = rgbIndexArticle.innerHTML;
        };
    }; 
};

function colorBtnForLogoImage() {
    for (let i = 0; i < colorsForBtn.length; i++) {
        btnColors[i].style.background = colorsForBtn[i];
        btnColors[i].onmousedown = () => {
            layoutLogoImage.style.backgroundColor = colorsForBtn[i];
            rgbIndexLogoImage.innerHTML = colorsForBtn[i];
            hslIndexLogoImage.innerHTML = colorsForBtnHsl[i];
            hexIndexLogoImage.innerHTML = colorsForBtnHex[i];   
            colorForSave = rgbIndexLogoImage.innerHTML;
        };
    }; 
};

function colorBtnForButtons() {
    for (let i = 0; i < colorsForBtn.length; i++) {
        btnColors[i].style.background = colorsForBtn[i];
        btnColors[i].onmousedown = () => {
            firstSimpleButton.style.backgroundColor = colorsForBtn[i];
            secondSimpleButton.style.backgroundColor = colorsForBtn[i];    
            rgbIndexButtons.innerHTML = colorsForBtn[i];
            hslIndexButtons.innerHTML = colorsForBtnHsl[i];
            hexIndexButtons.innerHTML = colorsForBtnHex[i];    
            colorForSave = rgbIndexButtons.innerHTML;
        };
    }; 
};

function colorBtnForFooterHeader() {
    for (let i = 0; i < colorsForBtn.length; i++) {
        btnColors[i].style.background = colorsForBtn[i];
        btnColors[i].onmousedown = () => {
            layOutHeader.style.backgroundColor = colorsForBtn[i];
            layOutFooter.style.backgroundColor = colorsForBtn[i];
            rgbIndexFooterHeader.innerHTML = colorsForBtn[i];
            hslIndexFooterHeader.innerHTML = colorsForBtnHsl[i];
            hexIndexFooterHeader.innerHTML = colorsForBtnHex[i];  
            colorForSave = rgbIndexFooterHeader.innerHTML; 
        };
    }; 
};

function colorBtnForBorder() {
    for (let i = 0; i < colorsForBtn.length; i++) {
        btnColors[i].style.background = colorsForBtn[i];
        btnColors[i].onmousedown = () => {
            layOutHeader.style.borderBottom = `2px solid ${colorsForBtn[i]}`;
            layOutFooter.style.borderTop = `2px solid ${colorsForBtn[i]}`;
            rgbIndexBorder.innerHTML = colorsForBtn[i];
            hslIndexBorder.innerHTML = colorsForBtnHsl[i];
            hexIndexBorder.innerHTML = colorsForBtnHex[i];   
            colorForSave = rgbIndexBorder.innerHTML;
        };
    }; 
};

function colorBtnForImage() {
    for (let i = 0; i < colorsForBtn.length; i++) {
        btnColors[i].style.background = colorsForBtn[i];
        btnColors[i].onmousedown = () => {
            imageMainLayout.style.backgroundColor = colorsForBtn[i];
            rgbIndexImage.innerHTML = colorsForBtn[i];
            hslIndexImage.innerHTML = colorsForBtnHsl[i];
            hexIndexImage.innerHTML = colorsForBtnHex[i];  
            colorForSave = rgbIndexImage.innerHTML; 
        };
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

let colorForSave = 'rgb(255, 255, 255)';

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
    layoutContainer.style.color = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    firstSimpleButton.style.color = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    secondSimpleButton.style.color = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;

    colorForSave = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    rgbIndexHue.innerHTML = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    hexIndexHue.innerHTML = `#${hex(r)}${hex(g)}${hex(b)}`;
    hslIndexHue.innerHTML = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
};


// SafeColor
let colorSaveStorage = [];
let colorSaveBtn = '';
let colorWhiteForChips = 'rgb(255, 255, 255)';
let colorChip = '';


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
    btnChips.textContent = 'Saved!';
    
    btnChips.style.backgroundColor = colorForSave;
    notificationColorSaved.appendChild(btnChips); 
    setTimeout(() => btnChips.remove(), 5000);
    console.log(colorChip)
};

function typeEditing() {
    colorPickerHueMain.style.display = 'none';
    colorPickerMainArticle.style.display = 'none';
    colorPickerMainLogoImage.style.display = 'none';
    colorPickerMainButtons.style.display = 'none';
    colorPickerMainFooterHeader.style.display = 'none';
    colorPickerMainBorder.style.display = 'none';
    colorPickerMainImage.style.display = 'none'
};

function colorButtonsEditing() {
    editingBtnText.style.backgroundColor = '';
    editingBtnArticle.style.backgroundColor = '';
    editingBtnLogoImage.style.backgroundColor = '';
    editingBtnButtons.style.backgroundColor = '';
    editingBtnHeaderFooter.style.backgroundColor = '';
    editingBtnBorders.style.backgroundColor = '';
    editingBtnImage.style.backgroundColor = '';
    editingBtnText.style.color = '';
    editingBtnArticle.style.color = '';
    editingBtnLogoImage.style.color = '';
    editingBtnButtons.style.color = '';
    editingBtnHeaderFooter.style.color = '';
    editingBtnBorders.style.color = '';
    editingBtnImage.style.color = '';
};


// Color Picker for Design
editingBtnText.style.backgroundColor = 'rgb(255, 0, 0)';
editingBtnText.style.color = 'rgb(0, 0, 0)';

editingBtnText.addEventListener('mousedown', () => {
    colorBtnForEditingSection();
    colorButtonsEditing();
    editingBtnText.style.backgroundColor = 'rgb(255, 0, 0)';
    editingBtnText.style.color = 'rgb(0, 0, 0)';

    if (colorPickerHueMain.style.display = 'none') {
        typeEditing();
        colorPickerHueMain.style.display = 'block';
    };
});

editingBtnArticle.addEventListener('mousedown', () => {
    colorBtnForArticle();
    colorButtonsEditing();
    editingBtnArticle.style.backgroundColor = 'rgb(255, 0, 0)';
    editingBtnArticle.style.color = 'rgb(0, 0, 0)';

    if (colorPickerMainArticle.style.display = 'none') {
        typeEditing();
        colorPickerMainArticle.style.display = 'block';
    };
});

editingBtnLogoImage.addEventListener('mousedown', () => {
    colorBtnForLogoImage();
    colorButtonsEditing();
    editingBtnLogoImage.style.backgroundColor = 'rgb(255, 0, 0)';
    editingBtnLogoImage.style.color = 'rgb(0, 0, 0)';

    if (colorPickerMainLogoImage.style.display = 'none') {
        typeEditing();
        colorPickerMainLogoImage.style.display = 'block';
    };
});

editingBtnButtons.addEventListener('mousedown', () => {
    colorBtnForButtons();
    colorButtonsEditing();
    editingBtnButtons.style.backgroundColor = 'rgb(255, 0, 0)';
    editingBtnButtons.style.color = 'rgb(0, 0, 0)';

    if (colorPickerMainButtons.style.display = 'none') {
        typeEditing();
        colorPickerMainButtons.style.display = 'block';
    };
});

editingBtnHeaderFooter.addEventListener('mousedown', () => {
    colorBtnForFooterHeader();
    colorButtonsEditing();
    editingBtnHeaderFooter.style.backgroundColor = 'rgb(255, 0, 0)';
    editingBtnHeaderFooter.style.color = 'rgb(0, 0, 0)';

    if (colorPickerMainFooterHeader.style.display = 'none') {
        typeEditing();
        colorPickerMainFooterHeader.style.display = 'block';
    };
});

editingBtnBorders.addEventListener('mousedown', () => {
    colorBtnForBorder();
    colorButtonsEditing();
    editingBtnBorders.style.backgroundColor = 'rgb(255, 0, 0)';
    editingBtnBorders.style.color = 'rgb(0, 0, 0)';

    if (colorPickerMainBorder.style.display = 'none') {
        typeEditing();
        colorPickerMainBorder.style.display = 'block';
    };
});

editingBtnImage.addEventListener('mousedown', () => {
    colorBtnForImage();
    colorButtonsEditing();
    editingBtnImage.style.backgroundColor = 'rgb(255, 0, 0)';
    editingBtnImage.style.color = 'rgb(0, 0, 0)';

    if (colorPickerMainImage.style.display = 'none') {
        typeEditing();
        colorPickerMainImage.style.display = 'block';
    };
});



// ///////////////////////// ARTICLE

// Canvas Box
const canvasArticle = document.getElementById('color__canvas__Article');
const contextArticle = canvasArticle.getContext('2d', {willReadFrequently: true});
const colorBoxArticle = document.querySelector('.color__box__Article');
const pickerCursorArticle = document.querySelector('.picker__cursor__Article');

// Spectrum
const hueCanvasArticle = document.getElementById('hue__canvas__Article');
const hueContextArticle = hueCanvasArticle.getContext('2d', {willReadFrequently: true});
const colorSpectrumArticle = document.querySelector('.color__spectrum__Article'); 
const pickerArticle = document.querySelector('.picker__Article');

// Index
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
    document.addEventListener('mousedown', getArticleColorCursor);
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
    articlePositionHue = newHueTop;
};

function getArticleHueColor() {
    let imageDataHue = hueContextArticle.getImageData(0, articlePositionHue, 1, 1).data;
    let [r, g, b] = imageDataHue;
    let [h, s, l] = RGBToHSL(r, g, b);
    rgbMainArticle = `rgb(${imageDataHue[0]}, ${imageDataHue[1]}, ${imageDataHue[2]})`;
    colorForSave = `rgb(${imageDataHue[0]}, ${imageDataHue[1]}, ${imageDataHue[2]})`;
    let hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);
    document.addEventListener('mousemove', getArticleColorCursor);
    document.addEventListener('mouseup', mouseArticleHueUp);
    setArticleColorPicker();
};

function mouseArticleHueUp() {
    document.removeEventListener('mousedown', getArticleColorCursor);
    document.removeEventListener('mousedown', getArticleHueColor);
    document.removeEventListener('mousemove', getArticleHueColor)
    document.removeEventListener('mousemove', hueArticleMouseY)
    document.removeEventListener('mouseup', hueArticleMouseY)
};


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
let positionArticleHueX = 0;
let positionArticleHueY = 0;
let shiftArticleHueX = 20;
let shiftArticleHueY = 20;

function colorPickerArticleGetColor() {
    document.addEventListener('mousedown', getArticleColorCursor);
    document.addEventListener('mousemove', getArticleColorCursor);
    document.addEventListener('mousemove', onMouseMoveArticleCursor);
    document.addEventListener('mouseup', onMouseUpArticleHueCursor);
};

canvasArticle.addEventListener('mousedown', (event) => {
    event.preventDefault();
    onMouseMoveArticleCursor(event);
    colorPickerArticleGetColor();
});

pickerCursorArticle.onmousedown = (event) => {
    event.preventDefault();
    shiftArticleHueX = event.clientX - pickerCursorArticle.getBoundingClientRect().left;
    shiftArticleHueY = event.clientY - pickerCursorArticle.getBoundingClientRect().top;
    colorPickerArticleGetColor();
};

function onMouseMoveArticleCursor(event) {
    let newLeft = event.clientX - shiftArticleHueX - colorBoxArticle.getBoundingClientRect().left;
    let newTop = event.clientY - shiftArticleHueY - colorBoxArticle.getBoundingClientRect().top;
    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;

    let rightEdge = colorBoxArticle.offsetWidth - pickerCursorArticle.offsetWidth;
    let topEdge = colorBoxArticle.offsetHeight - pickerCursorArticle.offsetHeight;

    if (newLeft > rightEdge) newLeft = rightEdge;
    if (newTop > topEdge) newTop = topEdge;

    pickerCursorArticle.style.left = newLeft + 'px';
    pickerCursorArticle.style.top = newTop + 'px';

    positionArticleHueX = newLeft;
    positionArticleHueY = newTop;
};

function onMouseUpArticleHueCursor() {
    document.removeEventListener('mousedown', getArticleColorCursor);
    document.removeEventListener('mousemove', getArticleColorCursor);
    document.removeEventListener('mousemove', onMouseMoveArticleCursor);
    document.removeEventListener('mouseup', onMouseUpArticleHueCursor);
};

function getArticleColorCursor() {
    let dataImage = contextArticle.getImageData(positionArticleHueX, positionArticleHueY, 1, 1).data;
    let [r, g, b] = dataImage;
    let [h, s, l] = RGBToHSL(r, g, b);
    let hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);
    layOutArticle.style.backgroundColor = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;

    colorForSave = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    rgbIndexArticle.innerHTML = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    hslIndexArticle.innerHTML = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    hexIndexArticle.innerHTML = `#${hex(r)}${hex(g)}${hex(b)}`;
};



// ///////////////////////// LOGO IMAGE

// Canvas Box
const canvasLogoImage = document.getElementById('color__canvas__LogoImage');
const contextLogoImage = canvasLogoImage.getContext('2d', {willReadFrequently: true});
const colorBoxLogoImage = document.querySelector('.color__box__LogoImage');
const pickerCursorLogoImage = document.querySelector('.picker__cursor__LogoImage');

// Spectrum
const hueCanvasLogoImage = document.getElementById('hue__canvas__LogoImage');
const hueContextLogoImage = hueCanvasLogoImage.getContext('2d', {willReadFrequently: true});
const colorSpectrumLogoImage = document.querySelector('.color__spectrum__LogoImage'); 
const pickerLogoImage = document.querySelector('.picker__LogoImage');

// Index
const rgbIndexLogoImage = document.querySelector('.rgb__index__LogoImage');
const hslIndexLogoImage = document.querySelector('.hsl__index__LogoImage');
const hexIndexLogoImage = document.querySelector('.hex__index__LogoImage');


// LinearGradiet LOGO IMAGE
let widthSpectrumContextLogoImage = colorSpectrumLogoImage.width;
let heightSpectrumContextLogoImage = colorSpectrumLogoImage.height;
let colorSpectrumLogoImageBackGround = hueContextLogoImage.createLinearGradient(0, 0, 0, heightSpectrumContextLogoImage);
colorSpectrumLogoImageBackGround.addColorStop(0.03, "hsl(0, 100%, 50%)");
colorSpectrumLogoImageBackGround.addColorStop(0.17, "hsl(298.8, 100%, 50%)");
colorSpectrumLogoImageBackGround.addColorStop(0.33, "hsl(241.2, 100%, 50%)");
colorSpectrumLogoImageBackGround.addColorStop(0.50, "hsl(180, 100%, 50%)");
colorSpectrumLogoImageBackGround.addColorStop(0.67, "hsl(118.8, 100%, 50%)");
colorSpectrumLogoImageBackGround.addColorStop(0.83, "hsl(61.2, 100%, 50%)");
colorSpectrumLogoImageBackGround.addColorStop(1.00, "hsl(360, 100%, 50%)");
hueContextLogoImage.fillStyle = colorSpectrumLogoImageBackGround;
hueContextLogoImage.fillRect(0, 0, widthSpectrumContextLogoImage, heightSpectrumContextLogoImage);

rgbIndexLogoImage.innerHTML = 'rgb(255, 255, 255)';
hslIndexLogoImage.innerHTML = 'hsl(0, 0%, 100%)';
hexIndexLogoImage.innerHTML = `#ffffff`;


// Spectrum LOGO IMAGE
let LogoImagePositionHue = 0;
let LogoImageShiftY = 20;

hueCanvasLogoImage.addEventListener('mousedown', (event) => {
    event.preventDefault();
    hueLogoImageMouseY(event);
    document.addEventListener('mousemove', hueLogoImageMouseY);
    document.addEventListener('mousedown', getLogoImageColor);
    document.addEventListener('mousemove', getLogoImageColor);
    document.addEventListener('mousedown', getLogoImageColorCursor);
    document.addEventListener('mouseup', mouseLogoImageHueUp);
});

pickerLogoImage.onmousedown = (event) => {
    event.preventDefault();
    LogoImageShiftY = event.clientY - pickerLogoImage.getBoundingClientRect().top;
    document.addEventListener('mousemove', hueLogoImageMouseY);
    document.addEventListener('mousemove', getLogoImageColor);
    document.addEventListener('mouseup', mouseLogoImageHueUp);
};

function hueLogoImageMouseY(event) {
    let newHueTop = event.clientY - LogoImageShiftY - colorSpectrumLogoImage.getBoundingClientRect().top;
    if (newHueTop < 0) newHueTop = 0;
    let topHueEdge = colorSpectrumLogoImage.offsetHeight - pickerLogoImage.offsetHeight;
    if (newHueTop > topHueEdge) newHueTop = topHueEdge;
    pickerLogoImage.style.top = newHueTop + 'px';
    LogoImagePositionHue = newHueTop;
};

function getLogoImageColor() {
    let imageDataHue = hueContextLogoImage.getImageData(0, LogoImagePositionHue, 1, 1).data;
    let [r, g, b] = imageDataHue;
    let [h, s, l] = RGBToHSL(r, g, b);
    rgbMainLogoImage = `rgb(${imageDataHue[0]}, ${imageDataHue[1]}, ${imageDataHue[2]})`;
    colorForSave = `rgb(${imageDataHue[0]}, ${imageDataHue[1]}, ${imageDataHue[2]})`;
    let hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);
    document.addEventListener('mousemove', getLogoImageColorCursor);
    document.addEventListener('mouseup', mouseLogoImageHueUp);
    setLogoImageColorPicker();
};

function mouseLogoImageHueUp() {
    document.removeEventListener('mousedown', getLogoImageColorCursor);
    document.removeEventListener('mousedown', getLogoImageColor);
    document.removeEventListener('mousemove', getLogoImageColor)
    document.removeEventListener('mousemove', hueLogoImageMouseY)
    document.removeEventListener('mouseup', hueLogoImageMouseY)
};


// LinearGradiet ColorPicker
let colorLogoImageBoxWidth = colorBoxLogoImage.width;
let colorLogoImageBoxHeight = colorBoxLogoImage.height;

let rgbMainLogoImage = `rgba(255, 0, 0, 1)`;
contextLogoImage.rect(0, 0, colorLogoImageBoxWidth, colorLogoImageBoxHeight);
setLogoImageColorPicker();

function setLogoImageColorPicker() {
    contextLogoImage.fillStyle = rgbMainLogoImage;
    contextLogoImage.fillRect(0, 0, colorLogoImageBoxWidth, colorLogoImageBoxHeight);
    let colorWhite = hueContextLogoImage.createLinearGradient(colorLogoImageBoxWidth, 0, 0, 0);
    colorWhite.addColorStop(1, 'rgba(255, 255, 255, 1)');
    colorWhite.addColorStop(0.9, 'rgba(255, 255, 255, 1)');
    colorWhite.addColorStop(0.1, 'rgba(255, 255, 255, 0)');
    contextLogoImage.fillStyle = colorWhite;
    contextLogoImage.fillRect(0, 0, colorLogoImageBoxWidth, colorLogoImageBoxHeight);

    let colorBlack = hueContextLogoImage.createLinearGradient(0, 0, 0, colorLogoImageBoxHeight);
    colorBlack.addColorStop(0.1, 'rgba(0, 0, 0, 0)');
    colorBlack.addColorStop(0.9, 'rgba(0, 0, 0, 1)');
    colorBlack.addColorStop(1, 'rgba(0, 0, 0, 1)');
    contextLogoImage.fillStyle = colorBlack;
    contextLogoImage.fillRect(0, 0, colorLogoImageBoxWidth, colorLogoImageBoxHeight);
};


// PickerCursor
let positionLogoImageHueX = 0;
let positionLogoImageHueY = 0;
let shiftLogoImageHueX = 20;
let shiftLogoImageHueY = 20;

function colorPickerLogoImageGetColor() {
    document.addEventListener('mousedown', getLogoImageColorCursor);
    document.addEventListener('mousemove', getLogoImageColorCursor);
    document.addEventListener('mousemove', onMouseMoveLogoImageCursor);
    document.addEventListener('mouseup', onMouseUpLogoImageHueCursor);
};

canvasLogoImage.addEventListener('mousedown', (event) => {
    event.preventDefault();
    onMouseMoveLogoImageCursor(event);
    colorPickerLogoImageGetColor();
});

pickerCursorLogoImage.onmousedown = (event) => {
    event.preventDefault();
    shiftLogoImageHueX = event.clientX - pickerCursorLogoImage.getBoundingClientRect().left;
    shiftLogoImageHueY = event.clientY - pickerCursorLogoImage.getBoundingClientRect().top;
    colorPickerLogoImageGetColor();
};

function onMouseMoveLogoImageCursor(event) {
    let newLeft = event.clientX - shiftLogoImageHueX - colorBoxLogoImage.getBoundingClientRect().left;
    let newTop = event.clientY - shiftLogoImageHueY - colorBoxLogoImage.getBoundingClientRect().top;
    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;

    let rightEdge = colorBoxLogoImage.offsetWidth - pickerCursorLogoImage.offsetWidth;
    let topEdge = colorBoxLogoImage.offsetHeight - pickerCursorLogoImage.offsetHeight;

    if (newLeft > rightEdge) newLeft = rightEdge;
    if (newTop > topEdge) newTop = topEdge;

    pickerCursorLogoImage.style.left = newLeft + 'px';
    pickerCursorLogoImage.style.top = newTop + 'px';

    positionLogoImageHueX = newLeft;
    positionLogoImageHueY = newTop;
};

function onMouseUpLogoImageHueCursor() {
    document.removeEventListener('mousedown', getLogoImageColorCursor);
    document.removeEventListener('mousemove', getLogoImageColorCursor);
    document.removeEventListener('mousemove', onMouseMoveLogoImageCursor);
    document.removeEventListener('mouseup', onMouseUpLogoImageHueCursor);
};

function getLogoImageColorCursor() {
    let dataImage = contextLogoImage.getImageData(positionLogoImageHueX, positionLogoImageHueY, 1, 1).data;
    let [r, g, b] = dataImage;
    let [h, s, l] = RGBToHSL(r, g, b);
    let hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);
    layoutLogoImage.style.backgroundColor = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;

    colorForSave = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    rgbIndexLogoImage.innerHTML = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    hslIndexLogoImage.innerHTML = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    hexIndexLogoImage.innerHTML = `#${hex(r)}${hex(g)}${hex(b)}`;
};




// ///////////////////////// BUTTONS

// Canvas Box
const colorCanvasButtons = document.getElementById('color__canvas__Buttons');
const contextButtons = colorCanvasButtons.getContext('2d', {willReadFrequently: true});
const colorBoxButtons = document.querySelector('.color__box__Buttons');
const pickerCursorButtons = document.querySelector('.picker__cursor__Buttons');

// Spectrum
const hueCanvasButtons = document.getElementById('hue__canvas__Buttons');
const hueContextButtons = hueCanvasButtons.getContext('2d', {willReadFrequently: true});
const colorSpectrumButtons = document.querySelector('.color__spectrum__Buttons'); 
const pickerButtons = document.querySelector('.picker__Buttons');

// Index
const rgbIndexButtons = document.querySelector('.rgb__index__Buttons');
const hslIndexButtons = document.querySelector('.hsl__index__Buttons');
const hexIndexButtons = document.querySelector('.hex__index__Buttons');


// LinearGradiet BUTTONS
let widthSpectrumContextButtons = colorSpectrumButtons.width;
let heightSpectrumContextButtons = colorSpectrumButtons.height;
let colorSpectrumButtonsBackGround = hueContextButtons.createLinearGradient(0, 0, 0, heightSpectrumContextButtons);
colorSpectrumButtonsBackGround.addColorStop(0.03, "hsl(0, 100%, 50%)");
colorSpectrumButtonsBackGround.addColorStop(0.17, "hsl(298.8, 100%, 50%)");
colorSpectrumButtonsBackGround.addColorStop(0.33, "hsl(241.2, 100%, 50%)");
colorSpectrumButtonsBackGround.addColorStop(0.50, "hsl(180, 100%, 50%)");
colorSpectrumButtonsBackGround.addColorStop(0.67, "hsl(118.8, 100%, 50%)");
colorSpectrumButtonsBackGround.addColorStop(0.83, "hsl(61.2, 100%, 50%)");
colorSpectrumButtonsBackGround.addColorStop(1.00, "hsl(360, 100%, 50%)");
hueContextButtons.fillStyle = colorSpectrumButtonsBackGround;
hueContextButtons.fillRect(0, 0, widthSpectrumContextButtons, heightSpectrumContextButtons);

rgbIndexButtons.innerHTML = 'rgb(255, 255, 255)';
hslIndexButtons.innerHTML = 'hsl(0, 0%, 100%)';
hexIndexButtons.innerHTML = `#ffffff`;


// Spectrum BUTTONS
let ButtonsPositionHue = 0;
let ButtonsShiftY = 20;

hueCanvasButtons.addEventListener('mousedown', (event) => {
    event.preventDefault();
    hueButtonsMouseY(event);
    document.addEventListener('mousemove', hueButtonsMouseY);
    document.addEventListener('mousedown', getButtonsColor);
    document.addEventListener('mousemove', getButtonsColor);
    document.addEventListener('mousedown', getButtonsColorCursor);
    document.addEventListener('mouseup', mouseButtonsHueUp);
});

pickerButtons.onmousedown = (event) => {
    event.preventDefault();
    ButtonsShiftY = event.clientY - pickerButtons.getBoundingClientRect().top;
    document.addEventListener('mousemove', hueButtonsMouseY);
    document.addEventListener('mousemove', getButtonsColor);
    document.addEventListener('mouseup', mouseButtonsHueUp);
};

function hueButtonsMouseY(event) {
    let newHueTop = event.clientY - ButtonsShiftY - colorSpectrumButtons.getBoundingClientRect().top;
    if (newHueTop < 0) newHueTop = 0;
    let topHueEdge = colorSpectrumButtons.offsetHeight - pickerButtons.offsetHeight;
    if (newHueTop > topHueEdge) newHueTop = topHueEdge;
    pickerButtons.style.top = newHueTop + 'px';
    ButtonsPositionHue = newHueTop;
};

function getButtonsColor() {
    let imageDataHue = hueContextLogoImage.getImageData(0, ButtonsPositionHue, 1, 1).data;
    let [r, g, b] = imageDataHue;
    let [h, s, l] = RGBToHSL(r, g, b);
    rgbMainButtons = `rgb(${imageDataHue[0]}, ${imageDataHue[1]}, ${imageDataHue[2]})`;

    colorForSave = `rgb(${imageDataHue[0]}, ${imageDataHue[1]}, ${imageDataHue[2]})`;
    let hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);
    document.addEventListener('mousemove', getButtonsColorCursor);
    document.addEventListener('mouseup', mouseButtonsHueUp);
    setButtonsColorPicker();
};

function mouseButtonsHueUp() {
    document.removeEventListener('mousedown', getButtonsColorCursor);
    document.removeEventListener('mousedown', getButtonsColor);
    document.removeEventListener('mousemove', getButtonsColor)
    document.removeEventListener('mousemove', hueButtonsMouseY)
    document.removeEventListener('mouseup', hueButtonsMouseY)
};


// // LinearGradiet ColorPicker
let colorButtonsBoxWidth = colorBoxButtons.width;
let colorButtonsBoxHeight = colorBoxButtons.height;

let rgbMainButtons = `rgba(255, 0, 0, 1)`;
contextButtons.rect(0, 0, colorButtonsBoxWidth, colorButtonsBoxHeight);
setButtonsColorPicker();

function setButtonsColorPicker() {
    contextButtons.fillStyle = rgbMainButtons;
    contextButtons.fillRect(0, 0, colorButtonsBoxWidth, colorButtonsBoxHeight);
    let colorWhite = hueContextButtons.createLinearGradient(colorButtonsBoxWidth, 0, 0, 0);
    colorWhite.addColorStop(1, 'rgba(255, 255, 255, 1)');
    colorWhite.addColorStop(0.9, 'rgba(255, 255, 255, 1)');
    colorWhite.addColorStop(0.1, 'rgba(255, 255, 255, 0)');
    contextButtons.fillStyle = colorWhite;
    contextButtons.fillRect(0, 0, colorButtonsBoxWidth, colorButtonsBoxHeight);

    let colorBlack = hueContextButtons.createLinearGradient(0, 0, 0, colorButtonsBoxHeight);
    colorBlack.addColorStop(0.1, 'rgba(0, 0, 0, 0)');
    colorBlack.addColorStop(0.9, 'rgba(0, 0, 0, 1)');
    colorBlack.addColorStop(1, 'rgba(0, 0, 0, 1)');
    contextButtons.fillStyle = colorBlack;
    contextButtons.fillRect(0, 0, colorButtonsBoxWidth, colorButtonsBoxHeight);
};


// PickerCursor
let positionButtonsHueX = 0;
let positionButtonsHueY = 0;
let shiftButtonsHueX = 20;
let shiftButtonsHueY = 20;

function colorPickerButtonsGetColor() {
    document.addEventListener('mousedown', getButtonsColorCursor);
    document.addEventListener('mousemove', getButtonsColorCursor);
    document.addEventListener('mousemove', onMouseMoveButtonsCursor);
    document.addEventListener('mouseup', onMouseUpButtonsHueCursor);
};

colorCanvasButtons.addEventListener('mousedown', (event) => {
    event.preventDefault();
    onMouseMoveButtonsCursor(event);
    colorPickerButtonsGetColor();
});

pickerCursorButtons.onmousedown = (event) => {
    event.preventDefault();
    shiftButtonsHueX = event.clientX - pickerCursorButtons.getBoundingClientRect().left;
    shiftButtonsHueY = event.clientY - pickerCursorButtons.getBoundingClientRect().top;
    colorPickerButtonsGetColor();
};

function onMouseMoveButtonsCursor(event) {
    let newLeft = event.clientX - shiftButtonsHueX - colorBoxButtons.getBoundingClientRect().left;
    let newTop = event.clientY - shiftButtonsHueY - colorBoxButtons.getBoundingClientRect().top;
    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;

    let rightEdge = colorBoxButtons.offsetWidth - pickerCursorButtons.offsetWidth;
    let topEdge = colorBoxButtons.offsetHeight - pickerCursorButtons.offsetHeight;

    if (newLeft > rightEdge) newLeft = rightEdge;
    if (newTop > topEdge) newTop = topEdge;

    pickerCursorButtons.style.left = newLeft + 'px';
    pickerCursorButtons.style.top = newTop + 'px';

    positionButtonsHueX = newLeft;
    positionButtonsHueY = newTop;
};

function onMouseUpButtonsHueCursor() {
    document.removeEventListener('mousedown', getButtonsColorCursor);
    document.removeEventListener('mousemove', getButtonsColorCursor);
    document.removeEventListener('mousemove', onMouseMoveButtonsCursor);
    document.removeEventListener('mouseup', onMouseUpButtonsHueCursor);
};

function getButtonsColorCursor() {
    let dataImage = contextButtons.getImageData(positionButtonsHueX, positionButtonsHueY, 1, 1).data;
    let [r, g, b] = dataImage;
    let [h, s, l] = RGBToHSL(r, g, b);
    let hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);
    firstSimpleButton.style.backgroundColor = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    secondSimpleButton.style.backgroundColor = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;

    colorForSave = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    rgbIndexButtons.innerHTML = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    hslIndexButtons.innerHTML = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    hexIndexButtons.innerHTML = `#${hex(r)}${hex(g)}${hex(b)}`;
};




// ///////////////////////// HEADER & FOOTER

// Canvas Box
const colorCanvasFooterHeader = document.getElementById('color__canvas__footerHeader');
const contextFooterHeader = colorCanvasFooterHeader.getContext('2d', {willReadFrequently: true});
const colorBoxFooterHeader = document.querySelector('.color__box__footerHeader');
const pickerCursorFooterHeader = document.querySelector('.picker__cursor__footerHeader');

// Spectrum
const hueCanvasFooterHeader = document.getElementById('hue__canvas__footerHeader');
const hueContextFooterHeader = hueCanvasFooterHeader.getContext('2d', {willReadFrequently: true});
const colorSpectrumFooterHeader = document.querySelector('.color__spectrum__footerHeader'); 
const pickerFooterHeader = document.querySelector('.picker__footerHeader');

// Index
const rgbIndexFooterHeader = document.querySelector('.rgb__index__footerHeader');
const hslIndexFooterHeader = document.querySelector('.hsl__index__footerHeader');
const hexIndexFooterHeader = document.querySelector('.hex__index__footerHeader');


// LinearGradiet BUTTONS
let widthSpectrumFooterHeader = colorSpectrumFooterHeader.width;
let heightSpectrumFooterHeader = colorSpectrumFooterHeader.height;
let colorSpectrumFooterHeaderBackGround = hueContextFooterHeader.createLinearGradient(0, 0, 0, heightSpectrumFooterHeader);
colorSpectrumFooterHeaderBackGround.addColorStop(0.03, "hsl(0, 100%, 50%)");
colorSpectrumFooterHeaderBackGround.addColorStop(0.17, "hsl(298.8, 100%, 50%)");
colorSpectrumFooterHeaderBackGround.addColorStop(0.33, "hsl(241.2, 100%, 50%)");
colorSpectrumFooterHeaderBackGround.addColorStop(0.50, "hsl(180, 100%, 50%)");
colorSpectrumFooterHeaderBackGround.addColorStop(0.67, "hsl(118.8, 100%, 50%)");
colorSpectrumFooterHeaderBackGround.addColorStop(0.83, "hsl(61.2, 100%, 50%)");
colorSpectrumFooterHeaderBackGround.addColorStop(1.00, "hsl(360, 100%, 50%)");
hueContextFooterHeader.fillStyle = colorSpectrumFooterHeaderBackGround;
hueContextFooterHeader.fillRect(0, 0, widthSpectrumFooterHeader, heightSpectrumFooterHeader);

rgbIndexFooterHeader.innerHTML = 'rgb(255, 255, 255)';
hslIndexFooterHeader.innerHTML = 'hsl(0, 0%, 100%)';
hexIndexFooterHeader.innerHTML = `#ffffff`;


// Spectrum BUTTONS
let FooterHeaderPositionHue = 0;
let FooterHeaderShiftY = 20;

hueCanvasFooterHeader.addEventListener('mousedown', (event) => {
    event.preventDefault();
    hueFooterHeaderMouseY(event);
    document.addEventListener('mousemove', hueFooterHeaderMouseY);
    document.addEventListener('mousedown', getFooterHeaderColor);
    document.addEventListener('mousemove', getFooterHeaderColor);
    document.addEventListener('mousedown', getFooterHeaderColorCursor);
    document.addEventListener('mouseup', mouseFooterHeaderHueUp);
});

pickerFooterHeader.onmousedown = (event) => {
    event.preventDefault();
    FooterHeaderShiftY = event.clientY - pickerFooterHeader.getBoundingClientRect().top;
    document.addEventListener('mousemove', hueFooterHeaderMouseY);
    document.addEventListener('mousemove', getFooterHeaderColor);
    document.addEventListener('mouseup', mouseFooterHeaderHueUp);
};

function hueFooterHeaderMouseY(event) {
    let newHueTop = event.clientY - FooterHeaderShiftY - colorSpectrumFooterHeader.getBoundingClientRect().top;
    if (newHueTop < 0) newHueTop = 0;
    let topHueEdge = colorSpectrumFooterHeader.offsetHeight - pickerFooterHeader.offsetHeight;
    if (newHueTop > topHueEdge) newHueTop = topHueEdge;
    pickerFooterHeader.style.top = newHueTop + 'px';
    FooterHeaderPositionHue = newHueTop;
};

function getFooterHeaderColor() {
    let imageDataHue = hueContextLogoImage.getImageData(0, FooterHeaderPositionHue, 1, 1).data;
    let [r, g, b] = imageDataHue;
    let [h, s, l] = RGBToHSL(r, g, b);
    rgbMainFooterHeader = `rgb(${imageDataHue[0]}, ${imageDataHue[1]}, ${imageDataHue[2]})`;

    colorForSave = `rgb(${imageDataHue[0]}, ${imageDataHue[1]}, ${imageDataHue[2]})`;
    let hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);
    document.addEventListener('mousemove', getFooterHeaderColorCursor);
    document.addEventListener('mouseup', mouseLogoImageHueUp);
    setFooterHeaderColorPicker();
};

function mouseFooterHeaderHueUp() {
    document.removeEventListener('mousedown', getFooterHeaderColorCursor);
    document.removeEventListener('mousedown', getFooterHeaderColor);
    document.removeEventListener('mousemove', getFooterHeaderColor);
    document.removeEventListener('mousemove', hueFooterHeaderMouseY);
    document.removeEventListener('mouseup', hueFooterHeaderMouseY);
};


// LinearGradiet ColorPicker
let colorFooterHeaderBoxWidth = colorBoxFooterHeader.width;
let colorFooterHeaderBoxHeight = colorBoxFooterHeader.height;

let rgbMainFooterHeader = `rgba(255, 0, 0, 1)`;
contextFooterHeader.rect(0, 0, colorFooterHeaderBoxWidth, colorFooterHeaderBoxHeight);
setFooterHeaderColorPicker();

function setFooterHeaderColorPicker() {
    contextFooterHeader.fillStyle = rgbMainFooterHeader;
    contextFooterHeader.fillRect(0, 0, colorFooterHeaderBoxWidth, colorFooterHeaderBoxHeight);
    let colorWhite = hueContextFooterHeader.createLinearGradient(colorFooterHeaderBoxWidth, 0, 0, 0);
    colorWhite.addColorStop(1, 'rgba(255, 255, 255, 1)');
    colorWhite.addColorStop(0.9, 'rgba(255, 255, 255, 1)');
    colorWhite.addColorStop(0.1, 'rgba(255, 255, 255, 0)');
    contextFooterHeader.fillStyle = colorWhite;
    contextFooterHeader.fillRect(0, 0, colorFooterHeaderBoxWidth, colorFooterHeaderBoxHeight);

    let colorBlack = hueContextFooterHeader.createLinearGradient(0, 0, 0, colorFooterHeaderBoxHeight);
    colorBlack.addColorStop(0.1, 'rgba(0, 0, 0, 0)');
    colorBlack.addColorStop(0.9, 'rgba(0, 0, 0, 1)');
    colorBlack.addColorStop(1, 'rgba(0, 0, 0, 1)');
    contextFooterHeader.fillStyle = colorBlack;
    contextFooterHeader.fillRect(0, 0, colorFooterHeaderBoxWidth, colorFooterHeaderBoxHeight);
};


// PickerCursor
let positionFooterHeaderHueX = 0;
let positionFooterHeaderHueY = 0;
let shiftFooterHeaderHueX = 20;
let shiftFooterHeaderHueY = 20;

function colorPickerFooterHeaderGetColor() {
    document.addEventListener('mousedown', getFooterHeaderColorCursor);
    document.addEventListener('mousemove', getFooterHeaderColorCursor);
    document.addEventListener('mousemove', onMouseMoveFooterHeaderCursor);
    document.addEventListener('mouseup', onMouseUpFooterHeaderHueCursor);
};

colorCanvasFooterHeader.addEventListener('mousedown', (event) => {
    event.preventDefault();
    onMouseMoveFooterHeaderCursor(event);
    colorPickerFooterHeaderGetColor();
});

pickerCursorFooterHeader.onmousedown = (event) => {
    event.preventDefault();
    shiftFooterHeaderHueX = event.clientX - pickerCursorFooterHeader.getBoundingClientRect().left;
    shiftFooterHeaderHueY = event.clientY - pickerCursorFooterHeader.getBoundingClientRect().top;
    colorPickerFooterHeaderGetColor();
};

function onMouseMoveFooterHeaderCursor(event) {
    let newLeft = event.clientX - shiftFooterHeaderHueX - colorBoxFooterHeader.getBoundingClientRect().left;
    let newTop = event.clientY - shiftFooterHeaderHueY - colorBoxFooterHeader.getBoundingClientRect().top;
    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;

    let rightEdge = colorBoxFooterHeader.offsetWidth - pickerCursorFooterHeader.offsetWidth;
    let topEdge = colorBoxFooterHeader.offsetHeight - pickerCursorFooterHeader.offsetHeight;

    if (newLeft > rightEdge) newLeft = rightEdge;
    if (newTop > topEdge) newTop = topEdge;

    pickerCursorFooterHeader.style.left = newLeft + 'px';
    pickerCursorFooterHeader.style.top = newTop + 'px';

    positionFooterHeaderHueX = newLeft;
    positionFooterHeaderHueY = newTop;
};

function onMouseUpFooterHeaderHueCursor() {
    document.removeEventListener('mousedown', getFooterHeaderColorCursor);
    document.removeEventListener('mousemove', getFooterHeaderColorCursor);
    document.removeEventListener('mousemove', onMouseMoveFooterHeaderCursor);
    document.removeEventListener('mouseup', onMouseUpFooterHeaderHueCursor);
};

function getFooterHeaderColorCursor() {
    let dataImage = contextFooterHeader.getImageData(positionFooterHeaderHueX, positionFooterHeaderHueY, 1, 1).data;
    let [r, g, b] = dataImage;
    let [h, s, l] = RGBToHSL(r, g, b);
    let hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);

    layOutHeader.style.backgroundColor = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    layOutFooter.style.backgroundColor = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;

    colorForSave = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    rgbIndexFooterHeader.innerHTML = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    hslIndexFooterHeader.innerHTML = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    hexIndexFooterHeader.innerHTML = `#${hex(r)}${hex(g)}${hex(b)}`;
};


// ///////////////////////// BORDER

// Canvas Box
const colorCanvasBorder = document.getElementById('color__canvas__Border');
const contextBorder = colorCanvasBorder.getContext('2d', {willReadFrequently: true});
const colorBoxBorder = document.querySelector('.color__box__Border');
const pickerCursorBorder = document.querySelector('.picker__cursor__Border');

// Spectrum
const hueCanvasBorder = document.getElementById('hue__canvas__Border');
const hueContextBorder = hueCanvasBorder.getContext('2d', {willReadFrequently: true});
const colorSpectrumBorder = document.querySelector('.color__spectrum__Border'); 
const pickerBorder = document.querySelector('.picker__Border');

// Index
const rgbIndexBorder = document.querySelector('.rgb__index__Border');
const hslIndexBorder = document.querySelector('.hsl__index__Border');
const hexIndexBorder = document.querySelector('.hex__index__Border');


// LinearGradiet BORDER
let widthSpectrumContextBorder = colorSpectrumBorder.width;
let heightSpectrumContextBorder = colorSpectrumBorder.height;
let colorSpectrumBorderBackGround = hueContextBorder.createLinearGradient(0, 0, 0, heightSpectrumContextBorder);
colorSpectrumBorderBackGround.addColorStop(0.03, "hsl(0, 100%, 50%)");
colorSpectrumBorderBackGround.addColorStop(0.17, "hsl(298.8, 100%, 50%)");
colorSpectrumBorderBackGround.addColorStop(0.33, "hsl(241.2, 100%, 50%)");
colorSpectrumBorderBackGround.addColorStop(0.50, "hsl(180, 100%, 50%)");
colorSpectrumBorderBackGround.addColorStop(0.67, "hsl(118.8, 100%, 50%)");
colorSpectrumBorderBackGround.addColorStop(0.83, "hsl(61.2, 100%, 50%)");
colorSpectrumBorderBackGround.addColorStop(1.00, "hsl(360, 100%, 50%)");
hueContextBorder.fillStyle = colorSpectrumBorderBackGround;
hueContextBorder.fillRect(0, 0, widthSpectrumContextBorder, heightSpectrumContextBorder);

rgbIndexBorder.innerHTML = 'rgb(255, 255, 255)';
hslIndexBorder.innerHTML = 'hsl(0, 0%, 100%)';
hexIndexBorder.innerHTML = `#ffffff`;


// Spectrum BORDERa
let BorderPositionHue = 0;
let BorderShiftY = 20;

hueCanvasBorder.addEventListener('mousedown', (event) => {
    event.preventDefault();
    hueBorderMouseY(event);
    document.addEventListener('mousemove', hueBorderMouseY);
    document.addEventListener('mousedown', getBorderColor);
    document.addEventListener('mousemove', getBorderColor);
    document.addEventListener('mousedown', getBorderColorCursor);
    document.addEventListener('mouseup', mouseBorderHueUp);
});

pickerBorder.onmousedown = (event) => {
    event.preventDefault();
    BorderShiftY = event.clientY - pickerBorder.getBoundingClientRect().top;
    document.addEventListener('mousemove', hueBorderMouseY);
    document.addEventListener('mousemove', getBorderColor);
    document.addEventListener('mouseup', mouseBorderHueUp);
};

function hueBorderMouseY(event) {
    let newHueTop = event.clientY - BorderShiftY - colorSpectrumBorder.getBoundingClientRect().top;
    if (newHueTop < 0) newHueTop = 0;
    let topHueEdge = colorSpectrumBorder.offsetHeight - pickerBorder.offsetHeight;
    if (newHueTop > topHueEdge) newHueTop = topHueEdge;
    pickerBorder.style.top = newHueTop + 'px';
    BorderPositionHue = newHueTop;
};

function getBorderColor() {
    let imageDataHue = hueContextBorder.getImageData(0, BorderPositionHue, 1, 1).data;
    let [r, g, b] = imageDataHue;
    let [h, s, l] = RGBToHSL(r, g, b);
    rgbMainBorder = `rgb(${imageDataHue[0]}, ${imageDataHue[1]}, ${imageDataHue[2]})`;

    colorForSave = `rgb(${imageDataHue[0]}, ${imageDataHue[1]}, ${imageDataHue[2]})`;
    let hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);
    document.addEventListener('mousemove', getBorderColorCursor);
    document.addEventListener('mouseup', mouseBorderHueUp);
    setBorderColorPicker();
};

function mouseBorderHueUp() {
    document.removeEventListener('mousedown', getBorderColorCursor);
    document.removeEventListener('mousedown', getBorderColor);
    document.removeEventListener('mousemove', getBorderColor)
    document.removeEventListener('mousemove', hueBorderMouseY)
    document.removeEventListener('mouseup', hueBorderMouseY)
};


// LinearGradiet ColorPicker
let colorBorderBoxWidth = colorBoxBorder.width;
let colorBorderBoxHeight = colorBoxBorder.height;

let rgbMainBorder = `rgba(255, 0, 0, 1)`;
contextBorder.rect(0, 0, colorBorderBoxWidth, colorBorderBoxHeight);
setBorderColorPicker();

function setBorderColorPicker() {
    contextBorder.fillStyle = rgbMainBorder;
    contextBorder.fillRect(0, 0, colorBorderBoxWidth, colorBorderBoxHeight);
    let colorWhite = hueContextBorder.createLinearGradient(colorBorderBoxWidth, 0, 0, 0);
    colorWhite.addColorStop(1, 'rgba(255, 255, 255, 1)');
    colorWhite.addColorStop(0.9, 'rgba(255, 255, 255, 1)');
    colorWhite.addColorStop(0.1, 'rgba(255, 255, 255, 0)');
    contextBorder.fillStyle = colorWhite;
    contextBorder.fillRect(0, 0, colorBorderBoxWidth, colorBorderBoxHeight);

    let colorBlack = hueContextBorder.createLinearGradient(0, 0, 0, colorBorderBoxHeight);
    colorBlack.addColorStop(0.1, 'rgba(0, 0, 0, 0)');
    colorBlack.addColorStop(0.9, 'rgba(0, 0, 0, 1)');
    colorBlack.addColorStop(1, 'rgba(0, 0, 0, 1)');
    contextBorder.fillStyle = colorBlack;
    contextBorder.fillRect(0, 0, colorBorderBoxWidth, colorBorderBoxHeight);
};


// PickerCursor
let positionBorderHueX = 0;
let positionBorderHueY = 0;
let shiftBorderHueX = 20;
let shiftBorderHueY = 20;

function colorPickerBorderGetColor() {
    document.addEventListener('mousedown', getBorderColorCursor);
    document.addEventListener('mousemove', getBorderColorCursor);
    document.addEventListener('mousemove', onMouseMoveBorderCursor);
    document.addEventListener('mouseup', onMouseUpBorderHueCursor);
};

colorCanvasBorder.addEventListener('mousedown', (event) => {
    event.preventDefault();
    onMouseMoveBorderCursor(event);
    colorPickerBorderGetColor();
});

pickerCursorBorder.onmousedown = (event) => {
    event.preventDefault();
    shiftBorderHueX = event.clientX - pickerCursorBorder.getBoundingClientRect().left;
    shiftBorderHueY = event.clientY - pickerCursorBorder.getBoundingClientRect().top;
    colorPickerBorderGetColor();
};

function onMouseMoveBorderCursor(event) {
    let newLeft = event.clientX - shiftBorderHueX - colorBoxBorder.getBoundingClientRect().left;
    let newTop = event.clientY - shiftBorderHueY - colorBoxBorder.getBoundingClientRect().top;
    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;

    let rightEdge = colorBoxBorder.offsetWidth - pickerCursorBorder.offsetWidth;
    let topEdge = colorBoxBorder.offsetHeight - pickerCursorBorder.offsetHeight;

    if (newLeft > rightEdge) newLeft = rightEdge;
    if (newTop > topEdge) newTop = topEdge;

    pickerCursorBorder.style.left = newLeft + 'px';
    pickerCursorBorder.style.top = newTop + 'px';

    positionBorderHueX = newLeft;
    positionBorderHueY = newTop;
};

function onMouseUpBorderHueCursor() {
    document.removeEventListener('mousedown', getBorderColorCursor);
    document.removeEventListener('mousemove', getBorderColorCursor);
    document.removeEventListener('mousemove', onMouseMoveBorderCursor);
    document.removeEventListener('mouseup', onMouseUpBorderHueCursor);
};

function getBorderColorCursor() {
    let dataImage = contextBorder.getImageData(positionBorderHueX, positionBorderHueY, 1, 1).data;
    let [r, g, b] = dataImage;
    let [h, s, l] = RGBToHSL(r, g, b);
    let hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);

    layOutHeader.style.borderBottom = `2px solid rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    layOutFooter.style.borderTop = `2px solid rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;

    colorForSave = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    rgbIndexBorder.innerHTML = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    hslIndexBorder.innerHTML = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    hexIndexBorder.innerHTML = `#${hex(r)}${hex(g)}${hex(b)}`;
};

// ///////////////////////// IMAGE

// Canvas Box
const colorCanvasImage = document.getElementById('color__canvas__Image');
const contextImage = colorCanvasImage.getContext('2d', {willReadFrequently: true});
const colorBoxImage = document.querySelector('.color__box__Image');
const pickerCursorImage = document.querySelector('.picker__cursor__Image');

// Spectrum
const hueCanvasImage = document.getElementById('hue__canvas__Image');
const hueContextImage = hueCanvasImage.getContext('2d', {willReadFrequently: true});
const colorSpectrumImage = document.querySelector('.color__spectrum__Image'); 
const pickerImage = document.querySelector('.picker__Image');

// Index
const rgbIndexImage = document.querySelector('.rgb__index__Image');
const hslIndexImage = document.querySelector('.hsl__index__Image');
const hexIndexImage = document.querySelector('.hex__index__Image');


// // LinearGradiet IMAGE
let widthSpectrumContextImage = colorSpectrumImage.width;
let heightSpectrumContextImage = colorSpectrumImage.height;
let colorSpectrumImageBackGround = hueContextImage.createLinearGradient(0, 0, 0, heightSpectrumContextImage);
colorSpectrumImageBackGround.addColorStop(0.03, "hsl(0, 100%, 50%)");
colorSpectrumImageBackGround.addColorStop(0.17, "hsl(298.8, 100%, 50%)");
colorSpectrumImageBackGround.addColorStop(0.33, "hsl(241.2, 100%, 50%)");
colorSpectrumImageBackGround.addColorStop(0.50, "hsl(180, 100%, 50%)");
colorSpectrumImageBackGround.addColorStop(0.67, "hsl(118.8, 100%, 50%)");
colorSpectrumImageBackGround.addColorStop(0.83, "hsl(61.2, 100%, 50%)");
colorSpectrumImageBackGround.addColorStop(1.00, "hsl(360, 100%, 50%)");
hueContextImage.fillStyle = colorSpectrumImageBackGround;
hueContextImage.fillRect(0, 0, widthSpectrumContextImage, heightSpectrumContextImage);

rgbIndexImage.innerHTML = 'rgb(255, 255, 255)';
hslIndexImage.innerHTML = 'hsl(0, 0%, 100%)';
hexIndexImage.innerHTML = `#ffffff`;


// Spectrum IMAGE
let ImagePositionHue = 0;
let ImageShiftY = 20;

hueCanvasImage.addEventListener('mousedown', (event) => {
    event.preventDefault();
    hueImageMouseY(event);
    document.addEventListener('mousemove', hueImageMouseY);
    document.addEventListener('mousedown', getImageColor);
    document.addEventListener('mousemove', getImageColor);
    document.addEventListener('mousedown', getImageColorCursor);
    document.addEventListener('mouseup', mouseImageHueUp);
});

pickerImage.onmousedown = (event) => {
    event.preventDefault();
    ImageShiftY = event.clientY - pickerImage.getBoundingClientRect().top;
    document.addEventListener('mousemove', hueImageMouseY);
    document.addEventListener('mousemove', getImageColor);
    document.addEventListener('mouseup', mouseImageHueUp);
};

function hueImageMouseY(event) {
    let newHueTop = event.clientY - ImageShiftY - colorSpectrumImage.getBoundingClientRect().top;
    if (newHueTop < 0) newHueTop = 0;
    let topHueEdge = colorSpectrumImage.offsetHeight - pickerImage.offsetHeight;
    if (newHueTop > topHueEdge) newHueTop = topHueEdge;
    pickerImage.style.top = newHueTop + 'px';
    ImagePositionHue = newHueTop;
};

function getImageColor() {
    let imageDataHue = hueContextImage.getImageData(0, ImagePositionHue, 1, 1).data;
    let [r, g, b] = imageDataHue;
    let [h, s, l] = RGBToHSL(r, g, b);
    rgbMainImage = `rgb(${imageDataHue[0]}, ${imageDataHue[1]}, ${imageDataHue[2]})`;

    colorForSave = `rgb(${imageDataHue[0]}, ${imageDataHue[1]}, ${imageDataHue[2]})`;
    let hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);
    document.addEventListener('mousemove', getImageColorCursor);
    document.addEventListener('mouseup', mouseImageHueUp);
    setImageColorPicker();
};

function mouseImageHueUp() {
    document.removeEventListener('mousedown', getImageColorCursor);
    document.removeEventListener('mousedown', getImageColor);
    document.removeEventListener('mousemove', getImageColor)
    document.removeEventListener('mousemove', hueImageMouseY)
    document.removeEventListener('mouseup', hueBorderMouseY)
};


// LinearGradiet ColorPicker
let colorImageBoxWidth = colorBoxImage.width;
let colorImageBoxHeight = colorBoxImage.height;

let rgbMainImage = `rgba(255, 0, 0, 1)`;
contextImage.rect(0, 0, colorImageBoxWidth, colorImageBoxHeight);
setImageColorPicker();

function setImageColorPicker() {
    contextImage.fillStyle = rgbMainImage;
    contextImage.fillRect(0, 0, colorImageBoxWidth, colorImageBoxHeight);
    let colorWhite = hueContextImage.createLinearGradient(colorBorderBoxWidth, 0, 0, 0);
    colorWhite.addColorStop(1, 'rgba(255, 255, 255, 1)');
    colorWhite.addColorStop(0.9, 'rgba(255, 255, 255, 1)');
    colorWhite.addColorStop(0.1, 'rgba(255, 255, 255, 0)');
    contextImage.fillStyle = colorWhite;
    contextImage.fillRect(0, 0, colorImageBoxWidth, colorImageBoxHeight);

    let colorBlack = hueContextImage.createLinearGradient(0, 0, 0, colorImageBoxHeight);
    colorBlack.addColorStop(0.1, 'rgba(0, 0, 0, 0)');
    colorBlack.addColorStop(0.9, 'rgba(0, 0, 0, 1)');
    colorBlack.addColorStop(1, 'rgba(0, 0, 0, 1)');
    contextImage.fillStyle = colorBlack;
    contextImage.fillRect(0, 0, colorImageBoxWidth, colorImageBoxHeight);
};


// PickerCursor
let positionImageHueX = 0;
let positionImageHueY = 0;
let shiftImageHueX = 20;
let shiftImageHueY = 20;

function colorPickerImageGetColor() {
    document.addEventListener('mousedown', getImageColorCursor);
    document.addEventListener('mousemove', getImageColorCursor);
    document.addEventListener('mousemove', onMouseMoveImageCursor);
    document.addEventListener('mouseup', onMouseUpImageHueCursor);
};

colorCanvasImage.addEventListener('mousedown', (event) => {
    event.preventDefault();
    onMouseMoveImageCursor(event);
    colorPickerImageGetColor();
});

pickerCursorImage.onmousedown = (event) => {
    event.preventDefault();
    shiftImageHueX = event.clientX - pickerCursorImage.getBoundingClientRect().left;
    shiftImageHueY = event.clientY - pickerCursorImage.getBoundingClientRect().top;
    colorPickerImageGetColor();
};

function onMouseMoveImageCursor(event) {
    let newLeft = event.clientX - shiftImageHueX - colorBoxImage.getBoundingClientRect().left;
    let newTop = event.clientY - shiftImageHueY - colorBoxImage.getBoundingClientRect().top;
    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;

    let rightEdge = colorBoxImage.offsetWidth - pickerCursorImage.offsetWidth;
    let topEdge = colorBoxImage.offsetHeight - pickerCursorImage.offsetHeight;

    if (newLeft > rightEdge) newLeft = rightEdge;
    if (newTop > topEdge) newTop = topEdge;

    pickerCursorImage.style.left = newLeft + 'px';
    pickerCursorImage.style.top = newTop + 'px';

    positionImageHueX = newLeft;
    positionImageHueY = newTop;
};

function onMouseUpImageHueCursor() {
    document.removeEventListener('mousedown', getImageColorCursor);
    document.removeEventListener('mousemove', getImageColorCursor);
    document.removeEventListener('mousemove', onMouseMoveImageCursor);
    document.removeEventListener('mouseup', onMouseUpImageHueCursor);
};

function getImageColorCursor() {
    let dataImage = contextImage.getImageData(positionImageHueX, positionImageHueY, 1, 1).data;
    let [r, g, b] = dataImage;
    let [h, s, l] = RGBToHSL(r, g, b);
    let hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);

    imageMainLayout.style.backgroundColor = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;

    colorForSave = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    rgbIndexImage.innerHTML = `rgb(${dataImage[0]}, ${dataImage[1]}, ${dataImage[2]})`;
    hslIndexImage.innerHTML = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    hexIndexImage.innerHTML = `#${hex(r)}${hex(g)}${hex(b)}`;
};
