const colorBox = document.querySelector('.color__box');
const pickerColor = document.querySelector('.picker');
const colorContainer = document.querySelector('.color__container');

let colorStorage = []; 

for (let i = 0; i <= 360; i++) {
    colorStorage.push(`hsl(${i - 5}, 100%, 50%)`);
};

colorStorage = colorStorage.toString();
colorBox.style.background = `conic-gradient(${colorStorage})`;

// ---------------------------------------------------------------

pickerColor.onmousedown = (event) => {
    event.preventDefault();

    // let canvas = document.getElementById('colorCanvas');
    // let ctx = canvas.getContex('2d');
    // ctx.fillStyle = 'rgba( 1, 1, 1, 1)';
    // ctx.fillRect(0, 0, colorBox.getAttribute("height"), colorBox.getAttribute("width"));

    let shiftX = event.clientX - pickerColor.getBoundingClientRect().left;
    let shiftY = event.clientY - pickerColor.getBoundingClientRect().top;
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - colorBox.getBoundingClientRect().left;
        let newTop = event.clientY - shiftY - colorBox.getBoundingClientRect().top;
        if (newLeft < 0) {
            newLeft = 0;
        };
        if (newTop < 0) {
            newTop = 0;
        };
        let rightEdge = colorBox.offsetWidth - pickerColor.offsetWidth;
        let topEdge = colorBox.offsetHeight - pickerColor.offsetHeight;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;    
        };
        if (newTop > topEdge) {
            newTop = topEdge;
        };
        pickerColor.style.left = newLeft + 'px';
        pickerColor.style.top = newTop + 'px';    
    };

    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
        pickerColor.onmousemove = false;
        pickerColor.onmouseup = false;
    };
};

