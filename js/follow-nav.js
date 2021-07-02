const triggers = document.querySelectorAll('.cool > li');
const bg = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter')
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150)
  bg.classList.add('open');
  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  console.log(dropdownCoords)
  console.log(navCoords)
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - nav.offsetTop,
    left: dropdownCoords.left - nav.offsetLeft
  }
  bg.style.setProperty('width', `${coords.width}px`)
  bg.style.setProperty('height', `${coords.height}px`)
  bg.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)
}

function handleExit() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  bg.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleExit));