const colorCircle = document.querySelector('.color__circle');

let colorStorage = []; 

for (let i = 0; i <= 360; i++) {
    colorStorage.push(`hsl(${i - 5}, 100%, 50%)`);
    // console.log(colorStorage);
};

colorStorage = colorStorage.toString();
colorCircle.style.background = `conic-gradient(${colorStorage})`;


// ---------------------------------------------------------------


const pickerColor = document.querySelector('.picker');
const colorContainer = document.querySelector('.color__container');

pickerColor.onmousedown = (event) => {
    event.preventDefault()

    let shiftX = event.clientX - pickerColor.getBoundingClientRect().left;
    let shiftY = event.clientY - pickerColor.getBoundingClientRect().top;
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - colorCircle.getBoundingClientRect().left;
        let newTop = event.clientY - shiftY - colorCircle.getBoundingClientRect().top
        
        if (newLeft < 0) {
            newLeft = 0;
        };
        if (newTop < 0) {
            newTop = 0;
        };
        
        let rightEdge =  colorCircle.offsetWidth - pickerColor.offsetWidth;
        let topEdge = colorCircle.offsetHeight - pickerColor.offsetHeight;

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
        document.removeEventListener('mouseup', onMouseUp)
        document.removeEventListener('mousemove', onMouseMove);
        pickerColor.onmousemove = false;
        pickerColor.onmouseup = false;
    };
};

