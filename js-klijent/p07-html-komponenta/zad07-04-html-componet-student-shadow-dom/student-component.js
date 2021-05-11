class Student extends HTMLElement {
    constructor() {
        // увек у конструктору на почетку позвати super()
        super();
        // придруживање ДОМ сенке уз корен 
        const senkaKoren = this.attachShadow({ mode: 'open' });
        senkaKoren.innerHTML =
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