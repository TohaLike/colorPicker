const colorBox = document.querySelector('.color__box');
const pickerColor = document.querySelector('.picker');
const colorContainer = document.querySelector('.color__container');

const canvas = document.getElementById('colorCanvas');
const context = canvas.getContext('2d', { willReadFrequently: true });   
   

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

    colorBox.style.backgroundColor = colorBackGround;

    context.fillStyle = colorBackGround;
    context.fillRect(0, 0, width, height);
// ---------------------------------------------------------------

pickerColor.onmousedown = (event) => {
    event.preventDefault();
    let shiftX = event.clientX - pickerColor.getBoundingClientRect().left;
    let shiftY = event.clientY - pickerColor.getBoundingClientRect().top;
        
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousemove', getColorPicker);
    document.addEventListener('mouseup', onMouseUp);
    
    let positionX = 0;
    let positionY = 0;

    function onMouseMove(event) { 
        let newLeft = event.clientX - shiftX - colorBox.getBoundingClientRect().left;
        let newTop = event.clientY - shiftY - colorBox.getBoundingClientRect().top;
        if (newLeft < 0) newLeft = 0;
        if (newTop < 0) newTop = 0;
        let rightEdge = colorBox.offsetWidth - pickerColor.offsetWidth;
        let topEdge = colorBox.offsetHeight - pickerColor.offsetHeight;
        if (newLeft > rightEdge) newLeft = rightEdge;
        if (newTop > topEdge) newTop = topEdge;
        pickerColor.style.left = newLeft + 'px';
        pickerColor.style.top = newTop + 'px'; 
        positionX = newLeft;
        positionY = newTop;
    };
       
    function getColorPicker() { 
        let imageData = context.getImageData(positionX, positionY, 1, 1).data;
        colorContainer.style.backgroundColor = `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`;
    };
    
    
    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mousemove', getColorPicker);
        pickerColor.onmousemove = false;
        pickerColor.onmouseup = false;
    };
};
