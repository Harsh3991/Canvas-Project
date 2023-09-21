let canvasBoard = document.querySelector('#canvas-board');
let context = canvasBoard.getContext('2d');
let inputColor = document.querySelector('#input');
inputColor.addEventListener('change', pickColor);
function pickColor() {
  let color = inputColor.value;
  context.strokeStyle = color;
}
let lineWidthRange = document.querySelector('#input-range');
let lineWidthLabel = document.querySelector('#range-label');

lineWidthRange.addEventListener('change', pickWidth);

function pickWidth(event) {
  let width = lineWidthRange.value;
  lineWidthLabel.innerText = `${width} px`;
  context.lineWidth = width;
}
canvasBoard.addEventListener('mousedown', startDrawing);
canvasBoard.addEventListener('mousemove', drawLine);
canvasBoard.addEventListener('mouseup', stopDrawing);
canvasBoard.addEventListener('mouseout', stopDrawing);

let x = 0;
let y = 0;
let isMouseDown = false;

function startDrawing(event) {
  isMouseDown = true;
  x = event.offsetX;
  y = event.offsetY;
}

function drawLine(event) {
  if (isMouseDown == true) {
    let newX = event.offsetX;
    let newY = event.offsetY;

    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(newX, newY);
    context.stroke();
    x = newX;
    y = newY;
  }
}

function stopDrawing() {
  isMouseDown = false;
}