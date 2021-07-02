function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}


const images = document.querySelectorAll('.slide-in')

function checkSlide(e) {
  console.log(e);
  // Loop image
  images.forEach(image => {
    const peekValue = (window.scrollY + window.innerHeight) - image.height / 2
    const hideValue = image.offsetTop + image.height
    const isHalfShown = peekValue > image.offsetTop
    const isNotPassed = window.scrollY < hideValue

    if (isHalfShown && isNotPassed) {
      image.classList.add('active')
    } else {
      image.classList.remove('active')
    }
    console.log(peekValue);
  });
}

window.addEventListener('scroll', debounce(checkSlide));