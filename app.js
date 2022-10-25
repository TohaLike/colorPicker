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
// const context = canvas.getContext("2d", { colorSpace: "colorCircle" });

let positionX = 0;
let positionY = 0;


pickerColor.onmousedown = (event) => {
    let shiftX = event.clientX - pickerColor.getBoundingClientRect().left;
    let shiftY = event.clientY - pickerColor.getBoundingClientRect().top;


    document.body.append(pickerColor);
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        pickerColor.style.left = pageX - shiftX + 'px';
        pickerColor.style.top = pageY - shiftY + 'px';
        
    };

    function getPickerColor(event) { 
        positionX = pickerColor.style.left;
        positionY = pickerColor.style.top; 

        let currentY = event.clientY - pickerColor.offsetTop;
        let currentX = event.clientX - pickerColor.offsetLeft;
        if (positionX > currentX && positionY > currentY) {
            pickerColor.onmousedown = false;
        }
    };

   

    function OneMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    };

    document.addEventListener('mousemove', OneMouseMove)
    document.addEventListener('mousemove', getPickerColor)

    
    pickerColor.onmouseup = () => {
        document.removeEventListener('mousemove', OneMouseMove)
        pickerColor.onmousemove = false;
        pickerColor.onmouseup = false;
    };
};

// pickerColor.ondragstart = () => {
//     return false;
// };
