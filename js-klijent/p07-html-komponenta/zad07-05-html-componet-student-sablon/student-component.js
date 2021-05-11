class Student extends HTMLElement {
    constructor() {
        super(); // always call super() first in the constructor.
        const templateContent = document
            .getElementById('uvit-student-template')
            .content;
        // Attach a shadow root to <uvit-student>.
        const shadowRoot = this.attachShadow({ mode: 'open' })
            .appendChild(templateContent.cloneNode(true));
    }

    connectedCallback() {}

    disconnectedCallback() {}

    attributeChangedCallback(attrName, oldVal, newVal) {}
}

// new element
let StudentComponent = customElements.define('uvit-student', Student);