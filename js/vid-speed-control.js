const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function changeRate(e) {
  const y = e.pageY - this.offsetTop;
  const perc = y / this.offsetHeight;
  const min = 0.4
  const max = 10
  const height = Math.round(perc * 100) + '%';
  const rate = perc * (max - min) + min;
  bar.textContent = rate.toFixed(2);
  bar.style.height = height;
  video.playbackRate = rate;
}
speed.addEventListener('mousemove', changeRate);
