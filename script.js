// 1. Get DOM elements
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// 2. Initialize drawing state
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// 3. Set up canvas drawing properties
ctx.strokeStyle = '#000000'; // Black line
ctx.lineWidth = 2;
ctx.lineCap = 'round'; // Smooth ends

// 4. Start drawing on mousedown
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

// 5. Draw on mousemove
canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }
});

// 6. Stop drawing on mouseup or mouseout
canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});
canvas.addEventListener('mouseout', () => {
  isDrawing = false;
});

// 7. Function to clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}