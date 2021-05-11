class Student extends HTMLElement {
    constructor() {
        super(); // always call super() first in the constructor.
        // Attach a shadow root to <uvit-student>.
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML =
            `<h2>
                Ovo je student (SwadowDOM)!
            </h2>`;
    }

    connectedCallback() {}

    disconnectedCallback() {}

    attributeChangedCallback(attrName, oldVal, newVal) {}
}

// new element
let StudentComponent = customElements.define('uvit-student', Student);