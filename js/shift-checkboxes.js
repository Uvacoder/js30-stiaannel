const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastBox;

function selectAll(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(box => {
            if (box === this || box === lastBox) {
                inBetween = !inBetween
            }
            if (inBetween) {
                box.checked = true
            }
        });
    }
    lastBox = this;
}

checkboxes.forEach(box => box.addEventListener('click', selectAll));