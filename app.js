const colorBox = document.querySelector('.color__box');
const pickerCursor = document.querySelector('.picker__cursor');
const colorContainer = document.querySelector('.color__container');
const colorIndex = document.querySelector('.color__index');
const canvas = document.getElementById('color__canvas');
const context = canvas.getContext('2d', { willReadFrequently: true });   
const rgbInput = document.querySelector('.rgb__input'); 
const hslInput = document.querySelector('.hsl__input');
const hexInput = document.querySelector('.hex__input');

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
    rgbInput.value = 'rgb(255, 255, 255);';

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
    
    function rgbToHsl(r, g, b) {
        (r /= 255), (g /= 255), (g /= 255);
        let max = Math.max(r, g, b),
            min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max == min) {
            h = s = 0; 
        } else {
            let d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
            };
            h /= 6;
        };
        return [ h, s, l ]
    };
            
    function getColorPicker() { 
        let imageData = context.getImageData(positionX, positionY, 1, 1).data;
        let [h, s, l] = imageData;
        imageData = rgbToHsl(r, g, b);
        // colorContainer.style.backgroundColor = `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`; 
        rgbInput.value = `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]});`; 
        colorContainer.style.backgroundColor = `hsl(${Math.round(360 * h)},${Math.round(100 * s)}%,${Math.round(100 * l)}%)`;  
        hslInput.value = `hsl(${[Math.round(360 * h)]},${Math.round(100 * s)}%,${Math.round(100 * l)}%)`;


        if (positionX === 0 && positionY === 0) {
            colorContainer.style.backgroundColor = 'rgb(255, 255, 255)';
            rgbInput.value = 'rgb(255, 255, 255);';
        } else if (positionX === 325 && positionY === 0) {
            colorContainer.style.backgroundColor = 'rgb(255, 255, 255)';
            rgbInput.value = 'rgb(255, 255, 255);';
        };
        if (positionX === 0 && positionY === 325) {
            colorContainer.style.backgroundColor = 'rgb(0, 0, 0)';
            rgbInput.value = 'rgb(0, 0, 0);';
        } else if (positionX === 325 && positionY === 325) {
            colorContainer.style.backgroundColor = 'rgb(0, 0, 0)';
            rgbInput.value = 'rgb(0, 0, 0);';
        };  
    }; 



    
    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mousemove', getColorPicker);
    };
};