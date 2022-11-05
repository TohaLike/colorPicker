const colorBox = document.querySelector('.color__box');
const pickerCursor = document.querySelector('.picker__cursor');
const colorResult = document.querySelector('.color__result');
const colorIndex = document.querySelector('.color__index');
const canvas = document.getElementById('color__canvas');
const context = canvas.getContext('2d', { willReadFrequently: true });   
const rgbIndex = document.querySelector('.rgb__index'); 
const hslIndex = document.querySelector('.hsl__index');
const hexIndex = document.querySelector('.hex__index');

const rgbR = document.getElementById('rgb__r');
const rgbG = document.getElementById('rgb__g');
const rgbB = document.getElementById('rgb__b');



const inputRGB = document.querySelector('.color__search__rgb');
const inputHEX = document.querySelector('.color__search__hex');
const typeColorRgb = document.querySelector('.type__color__rgb');
const typeColorHex = document.querySelector('.type__color__hex');

// ColorPicker
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
    hslIndex.innerHTML = 'hsl(0, 100%, 100%)';
    hexIndex.innerHTML = `#ffffff`;

pickerCursor.onmousedown = (event) => {
    event.preventDefault();
    let shiftX = event.clientX - pickerCursor.getBoundingClientRect().left;
    let shiftY = event.clientY - pickerCursor.getBoundingClientRect().top;
    let positionX = 0;
    let positionY = 0;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousemove', getColorPicker);
    document.addEventListener('mouseup', onMouseUp);

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
            
    function getColorPicker() { 
        let imageData = context.getImageData(positionX, positionY, 1, 1).data;
        let [r, g, b] = imageData;
        let [h, s, l] = RGBToHSL(r, g, b);
        let hex = (num) => (Math.round(num) < 16 ? '0' : '') + Math.round(num).toString(16);
        colorResult.style.backgroundColor = `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`; 
        rgbIndex.innerHTML = `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`; 
        hslIndex.innerHTML = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
        hexIndex.innerHTML = `#${hex(r)}${hex(g)}${hex(b)}`; 

        rgbR.value = `${imageData[0]}`;
        rgbG.value = `${imageData[1]}`;
        rgbB.value = `${imageData[2]}`;



        if (positionX === 0 && positionY === 0) {
            colorResult.style.backgroundColor = 'rgb(255, 255, 255)';
            rgbIndex.innerHTML = 'rgb(255, 255, 255)';
            hexIndex.innerHTML = `#ffffff`;
        } else if (positionX === 325 && positionY === 0) {
            colorResult.style.backgroundColor = 'rgb(255, 255, 255)';
            rgbIndex.innerHTML = 'rgb(255, 255, 255)';
            hexIndex.innerHTML = `#ffffff`;
        };
        if (positionX === 0 && positionY === 325) {
            colorResult.style.backgroundColor = 'rgb(0, 0, 0)';
            rgbIndex.innerHTML = 'rgb(0, 0, 0)';
            hslIndex.innerHTML = 'hsl(0, 100%, 0%)';
            hexIndex.innerHTML = `#000000`;
        } else if (positionX === 325 && positionY === 325) {
            colorResult.style.backgroundColor = 'rgb(0, 0, 0)';
            rgbIndex.innerHTML = 'rgb(0, 0, 0)';
            hslIndex.innerHTML = 'hsl(0, 100%, 0%)';
            hexIndex.innerHTML = `#000000`;
        };  
    }; 

    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mousemove', getColorPicker);
    };
};


// ColorSearch
let colorStorage = [];

// inputBtn.addEventListener('click', () => {
//     if (!colorInput.value) return;
//     colorResult.style.backgroundColor = `${colorInput.value}`;
    
// });


typeColorRgb.addEventListener('click', () => {
    if (inputHEX.style.display = 'none') {
        inputRGB.style.display = 'none';
        inputHEX.style.display = 'block';
    };
});

typeColorHex.addEventListener('click', () => {
    if (inputRGB.style.display = 'none') {
        inputRGB.style.display = 'block';
        inputHEX.style.display = 'none';
    };
});
