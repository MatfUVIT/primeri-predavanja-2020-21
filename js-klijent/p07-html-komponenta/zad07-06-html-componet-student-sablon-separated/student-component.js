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
        // увек у конструктору на почетку позвати super()
        super();
        // придруживање ДОМ сенке уз корен 
        const senkaKoren = this.attachShadow({ mode: 'open' })
            .appendChild(sablon.cloneNode(true));
    }

    connectedCallback() {}

    disconnectedCallback() {}

    attributeChangedCallback(attrName, oldVal, newVal) {}
}

// нови елеменат
let StudentComponent = customElements.define('uvit-student', Student);