function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing')
}

function playSound(e) {
  const aud = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!aud) return;

  key.classList.add('playing');
  aud.currentTime = 0;
  aud.play();
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // When Pressing Keyboard Keys
window.addEventListener('keydown', playSound);

keys.forEach(key => key.addEventListener('click', function (e) { // When Clickiing on the Div
  clickPlay(this.dataset.key);

  function clickPlay(a) {
    const aud = document.querySelector(`audio[data-key="${a}"]`)
    const key = document.querySelector(`.key[data-key="${a}"]`)
    if (!aud) return;

    key.classList.add('playing');
    aud.currentTime = 0;
    aud.play();
  }
}))

function resetKeys() {
  if (document.querySelectorAll('.playing').length != 0) {
    const bugTransition = document.querySelectorAll('.playing')
    bugTransition.forEach(key => key.classList.remove('playing'))
  }
}
setInterval(resetKeys, 1000);