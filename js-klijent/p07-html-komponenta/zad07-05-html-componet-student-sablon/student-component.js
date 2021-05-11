class Student extends HTMLElement {
    constructor() {
        // увек у конструктору на почетку позвати super()
        super();
        // постављање шаблона
        const sablon = document
            .getElementById('uvit-student-template')
            .content;
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