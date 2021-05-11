class Student extends HTMLElement {
    constructor() {
        super(); // always call super() first in the constructor.
    }
    connectedCallback() {
        this.innerHTML =
            `<h2>
                Ovo je student (connected Callback)!
            </h2>`;
    }
    disconnectedCallback() {}
    attributeChangedCallback(attrName, oldVal, newVal) {}
}

// new element
let StudentComponent = customElements.define('uvit-student', Student);