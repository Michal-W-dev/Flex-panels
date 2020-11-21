const panels = document.querySelectorAll('.panel')
console.log(panels);

panels.forEach(panel => panel.addEventListener('click', toogleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toogleActive))

function toogleOpen() {
    this.classList.toggle('open');
}
function toogleActive(evt) {
    console.log(evt.propertyName)
    if (evt.propertyName.includes('flex')) {
        this.classList.toggle('active');
    }
}
