const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];
const clearBtn = document.getElementById('cls'),
  clearSelBtn = document.getElementById('uca'),
  selectAllBtn = document.getElementById('ca'),
  btnsDiv = document.getElementById('buttons')

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  }
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items))
  this.reset();
};

function populateList(plate = [], platesList) {
  if (plate.length > 0) {
    platesList.innerHTML = plate.map((item, i) => {
      return `<li><input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''}/><label for="item${i}">${item.text}</label></li>`;
    }).join('');
    btnsDiv.classList.remove('hidden')
  } else {
    platesList.innerHTML = `<li>Loading Tapas...</li>`;
  }
};

function doneToggle(e) {
  if (!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  console.log(items);
  console.log(itemsList);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
};

function clearAll() {
  items = []
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items))
}

function selectAll() {
  items.map((i) => i.done = true);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items))
}

function deselectAll() {
  items.map((i) => i.done = false);
  console.log(items)
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items))
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', doneToggle);
clearBtn.addEventListener('click', clearAll);
clearSelBtn.addEventListener('click', deselectAll);
selectAllBtn.addEventListener('click', selectAll);
populateList(items, itemsList);