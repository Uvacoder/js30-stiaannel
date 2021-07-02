const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
let isDrawing = false,
    lastX = 0,
    lastY = 0,
    hue = 0,
    dir = true;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

function draw(e) {
    if (!isDrawing) return; // Stop when not drawing
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath();
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]
    hue++
    if (hue >= 360) {
        hue = 0
    }
    if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
        dir = !dir
    }
    if (dir) {
        ctx.lineWidth++
    } else {
        ctx.lineWidth--
    }
}
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]

});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);