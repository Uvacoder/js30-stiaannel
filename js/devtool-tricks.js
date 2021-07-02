const dogs = [{
  name: 'Snickers',
  age: 2
}, {
  name: 'hugo',
  age: 8
}];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// clearing
console.clear();

// Regular
console.log('Greetings Human');

// Interpolated
console.log('Hi I am a %s string!', '😉🤔❌✅');

// Styled
console.log('%c Hi I am a string!', 'font-size: 50px;');

// warning!
console.warn('You might have fucked up.');

// Error :|
console.error('You DEFINITELY fucked up.');

// Info
console.info('Okay I lied You didn\'t fuck up!')

// Testing
const p = document.querySelector('p')
console.assert(p.classList.contains('ouch'), "P tag is not hurt!")

// Viewing DOM Elements
console.log(p)
console.dir(p)

// table
console.table(dogs)


// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} yo`);
  console.log(`${dog.name} is ${dog.age * 7} in dogyears`);
  console.groupEnd(`${dog.name}`)
})

dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} yo`);
  console.log(`${dog.name} is ${dog.age * 7} in dogyears`);
  console.groupEnd(`${dog.name}`)
})

// counting
console.count('stiaannel')
console.count('stiaannel')
console.count('notstiaannel')
console.count('stiaannel')
console.count('stiaannel')


// timing
console.time('fetching data:');
fetch('https://api.github.com/users/stiaannel')
  .then(data => data.json())
  .then(data => {
      console.timeEnd('fetching data:')
      console.log(data)
  });