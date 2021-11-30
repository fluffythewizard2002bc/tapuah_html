const container = document.querySelector('div');
const box = document.createElement('div');

const changeColor1 = function() {
    if (this.style.backgroundColor == 'transparent')
        this.style.backgroundColor = 'yellow';
    else
        this.style.backgroundColor = 'transparent';
    console.log(this);
}
box.classList.add('box');
container.appendChild(box);

box.style.backgroundColor = "transparent";
box.addEventListener('click', changeColor1);