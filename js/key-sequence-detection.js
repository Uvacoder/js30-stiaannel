console.log('Hope you know the konami code 😇😇😇')
keypress = [];
code = ["ArrowUp", "ArrowDown", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b",
  "a", "Enter"
];
window.addEventListener('keyup', (e) => {
  keypress.push(e.key);
  keypress.splice(-code.length - 1, keypress.length - code.length)
  if (keypress.join("").includes(code.join(""))) {
    console.log('⬆, ⬇, ⬆, ⬇, ⬅, ➡, ⬅, ➡, 🅱, 🅰, ⏎')
    cornify_add();
  }
});