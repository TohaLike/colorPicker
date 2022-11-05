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

    pickerCursor.style.top = 0;
    pickerCursor.style.left = 0;


pickerCursor.onmousedown = (event) => {
    event.preventDefault();    
    
    canvas.addEventListener('mousedown', (e) => {
        e.preventDefault()
        canvas.addEventListener('mousemove', onMouseMove(e, pickerCursor));
        document.addEventListener('mousedown', getColorPicker);
        document.addEventListener('mousemove', getColorPicker);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

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
        hexIndex.innerHTML = `#${hex(r)}${hex(g)}${hex(b)}`; 
        hslIndex.innerHTML = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
        rgbR.value = `${imageData[0]}`;
        rgbG.value = `${imageData[1]}`;
        rgbB.value = `${imageData[2]}`;
        hexInputIndex.value = `#${hex(r)}${hex(g)}${hex(b)}`;
        hslH.value = `${Math.round(h)}`;
        hslS.value = `${Math.round(s)}`;
        hslL.value = `${Math.round(l)}`;
        if (positionX === 0 && positionY === 0) {
            colorResult.style.backgroundColor = 'rgb(255, 255, 255)';
            rgbIndex.innerHTML = 'rgb(255, 255, 255)';
            hexIndex.innerHTML = `#ffffff`;
            rgbR.value = 255; rgbG.value = 255; rgbB.value = 255;
            hexInputIndex.value = `#ffffff`;
        } else if (positionX === 325 && positionY === 0) {
            colorResult.style.backgroundColor = 'rgb(255, 255, 255)';
            rgbIndex.innerHTML = 'rgb(255, 255, 255)';
            hexIndex.innerHTML = `#ffffff`;
            hexIndex.value = '#ffffff'
            rgbR.value = 255; rgbG.value = 255; rgbB.value = 255;
            hexInputIndex.value = `#ffffff`;
        };
        if (positionX === 0 && positionY === 325) {
            colorResult.style.backgroundColor = 'rgb(0, 0, 0)';
            rgbIndex.innerHTML = 'rgb(0, 0, 0)';
            hslIndex.innerHTML = 'hsl(0, 100%, 0%)';
            hexIndex.innerHTML = '#000000';
            rgbR.value = 0; rgbG.value = 0; rgbB.value = 0;
            hexInputIndex.value = `#000000`;
            hslH.value = 0; hslS.value = 0; hslL.value = 0;
        } else if (positionX === 325 && positionY === 325) {
            colorResult.style.backgroundColor = 'rgb(0, 0, 0)';
            rgbIndex.innerHTML = 'rgb(0, 0, 0)';
            hslIndex.innerHTML = 'hsl(0, 100%, 0%)';
            hexIndex.innerHTML = `#000000`;
            rgbR.value = 0; rgbG.value = 0; rgbB.value = 0;
            hexInputIndex.value = '#000000';
            hslH.value = 0; hslS.value = 0; hslL.value = 0;
        };  
    }; 

    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mousemove', getColorPicker);
    };
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