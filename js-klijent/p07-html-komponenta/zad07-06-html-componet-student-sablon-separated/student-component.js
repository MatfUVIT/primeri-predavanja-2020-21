const sablon = document.createElement('uvit-student-template');
sablon.innerHtml =
    `<style>
        h2 {
            color: white;
            background-color: #999;
            padding: 5px;
        }
    </style>
    <h2>
        Ovo je student (template)!
    </h2>`;

class Student extends HTMLElement {
    constructor() {
        super(); // always call super() first in the constructor.
        // Attach a shadow root to <uvit-student>.
        const shadowRoot = this.attachShadow({ mode: 'open' })
            .appendChild(sablon.cloneNode(true));
    }

    connectedCallback() {}

    disconnectedCallback() {}

    attributeChangedCallback(attrName, oldVal, newVal) {}
}

// new element
let StudentComponent = customElements.define('uvit-student', Student);