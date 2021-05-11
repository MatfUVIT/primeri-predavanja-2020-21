class Student extends HTMLElement {
    constructor() {
        // увек у конструктору на почетку позвати super()
        super();
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

// нови елеменат
let StudentComponent = customElements.define('uvit-student', Student);