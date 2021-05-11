// Create a class for the element
class Kocka extends HTMLElement {
    // Specify observed attributes so that
    // attributeChangedCallback will work
    static get observedAttributes() {
        return ['c', 'l'];
    }

    constructor() {
        // Always call super first in constructor
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const div = document.createElement('div');
        const style = document.createElement('style');
        shadow.appendChild(style);
        shadow.appendChild(div);
    }

    connectedCallback() {
        console.log('Custom square element added to page.');
        updateStyle(this);
    }

    disconnectedCallback() {
        console.log('Custom square element removed from page.');
    }

    adoptedCallback() {
        console.log('Custom square element moved to new page.');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Custom square element attributes changed.');
        updateStyle(this);
    }
}

customElements.define('uvit-kocka', Kocka);

function updateStyle(elem) {
    const shadow = elem.shadowRoot;
    shadow.querySelector('style').textContent =
        `div {
        width: ${elem.getAttribute('l')}px;
        height: ${elem.getAttribute('l')}px;
        background-color: ${elem.getAttribute('c')};
        }`;
}

const add = document.querySelector('.add');
const update = document.querySelector('.update');
const remove = document.querySelector('.remove');
let kockica;

update.disabled = true;
remove.disabled = true;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

add.onclick = function() {
    // Create a custom square element
    kockica = document.createElement('uvit-kocka');
    kockica.setAttribute('l', '100');
    kockica.setAttribute('c', 'red');
    document.body.appendChild(kockica);

    update.disabled = false;
    remove.disabled = false;
    add.disabled = true;
};

update.onclick = function() {
    // Randomly update square's attributes
    kockica.setAttribute('l', random(50, 200));
    kockica.setAttribute('c', `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);
};

remove.onclick = function() {
    // Remove the square
    document.body.removeChild(kockica);

    update.disabled = true;
    remove.disabled = true;
    add.disabled = false;
};