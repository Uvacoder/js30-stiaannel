const divs = document.querySelectorAll('div');
const btn = document.querySelector('button');

function logText(e) {
  e.stopPropagation(); // Basically "Stop Bubbling!!!"
  console.log(this.classList.value)
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
}));

btn.addEventListener('click', () => {
  console.log('clicked!!!');
}, {
  once: true // unbind after 1 click
  }
);