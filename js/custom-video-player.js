// Get elements
const player = document.querySelector('.player');
const vid = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const fullscreenBtn = player.querySelector('.fullscreen')
const ranges = player.querySelectorAll('.player__slider')

// Functions
function togglePlay() {
  vid.paused ? vid.play() : vid.pause()
}

function updateBtn() {
  toggle.textContent = this.paused ? '▶' : '▌▐'
}

function skip() {
  vid.currentTime += parseFloat(this.dataset.skip);
}

function rangeUpdate() {
  vid[this.name] = this.value
}

function handleProgress() {
  const perc = (vid.currentTime / vid.duration) * 100
  progressBar.style.flexBasis = `${perc}%`
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * vid.duration
  vid.currentTime = scrubTime
}

function fullOn() {
  vid.requestFullscreen();
}

// Listeners
vid.addEventListener('click', togglePlay);
vid.addEventListener('play', updateBtn);
vid.addEventListener('pause', updateBtn);
vid.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(btn => btn.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', rangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', rangeUpdate));
fullscreenBtn.addEventListener('click', fullOn);
let clicking = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => clicking && scrub(e));
progress.addEventListener('mousedown', () => clicking = true);
progress.addEventListener('mouseup', () => clicking = false);