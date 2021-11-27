"use strict";
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('clicked');
});
function add(a, b) {
    if (a > 10) {
        return a + b;
    }
    return;
}
