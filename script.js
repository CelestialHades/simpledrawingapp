// 1. Get DOM elements
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const colorSelect = document.getElementById('colorSelect');
const lineWidth = document.getElementById('lineWidth');

// 2. Initialize drawing state
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// 3. Set initial canvas drawing properties
ctx.strokeStyle = colorSelect.value; // Start with selected color
ctx.lineWidth = lineWidth.value;     // Start with selected width
ctx.lineCap = 'round';

// 4. Update drawing properties on change
colorSelect.addEventListener('change', () => {
  ctx.strokeStyle = colorSelect.value;
});

lineWidth.addEventListener('input', () => {
  ctx.lineWidth = lineWidth.value;
});

// 5. Start drawing on mousedown
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

// 6. Draw on mousemove
canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }
});

// 7. Stop drawing on mouseup or mouseout
canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});
canvas.addEventListener('mouseout', () => {
  isDrawing = false;
});

// 8. Function to clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}