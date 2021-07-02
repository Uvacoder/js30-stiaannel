const endpoint =
'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = []

fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data));

function findMatch(word, cities) {
return cities.filter(place => {
    // Uhhhhhhhh City//State//Matches?
    const regex = new RegExp(word, 'gi');
    return place.city.match(regex) || place.state.match(regex);
})
};

function displayMatch() {
const matchArray = findMatch(this.value, cities);
const html = matchArray.map(place => {
    const rex = new RegExp(this.value, 'gi')
    const cname = place.city.replace(rex, `<span class="hl">${this.value}</span>`)
    const sname = place.state.replace(rex, `<span class="hl">${this.value}</span>`)
    return `
    <li>
        <span class="name">${cname}, ${sname}</span>
        <span class="population">${place.population}</span> 
    </li>
    `
}).join('');
suggest.innerHTML = html
};

const searchInp = document.querySelector('.search');
const suggest = document.querySelector('.suggestions');

searchInp.addEventListener('change', displayMatch);
searchInp.addEventListener('keyup', displayMatch);