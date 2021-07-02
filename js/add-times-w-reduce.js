const timeNodes = [...document.querySelectorAll('[data-time]')]
const seconds = timeNodes
// Map And Reduce
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
    console.log(mins,secs)
  })
  .reduce((total, sec) => total + sec)

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(timeNodes);
console.log(`${hours}h ${mins}m ${secondsLeft}s`);