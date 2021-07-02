const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  scrollLeft = slider.scrollLeft;
  slider.classList.add('active');
  console.log(e.pageX)
  startX = e.pageX - slider.offsetLeft
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft; 
  const walk = (x - startX) *3;
  if (!isDown) return;
  slider.scrollLeft = scrollLeft - walk;
});