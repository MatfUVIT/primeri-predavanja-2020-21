class Fioka extends HTMLElement {
    constructor() {
        // увек у конструктору на почетку позвати super()
        super();
        // постављање шаблона
        const sablon = document
            .getElementById('uvit-fioka-template')
            .content;
        // придруживање ДОМ сенке уз корен 
        const senkaKoren = this.attachShadow({ mode: 'open' })
            .appendChild(sablon.cloneNode(true));
        // постављање ослушкивача догађаја за click
        this.addEventListener('click', e => {
            // ако је ослушкивач онемогућен, клик се игнорише
            if (this.disabled)
                return;
            this.pomeriFioku();
        });
    }

    // читање особине otvoreno
    get otvoreno() {
        return this.hasAttribute('otvoreno');
    }

    // постављање особине otvoreno
    set otvoreno(val) {
        // Reflect the value of the open property as an HTML attribute.
        if (val) {
            this.setAttribute('otvoreno', '');
        } else {
            this.removeAttribute('otvoreno');
        }
    }

    // читање особине disabled
    get disabled() {
        return this.hasAttribute('disabled');
    }

    // постављање особине disabled
    set disabled(val) {
        // Reflect the value of the disabled property as an HTML attribute.
        if (val) {
            this.setAttribute('disabled', '');
        } else {
            this.removeAttribute('disabled');
        }
    }

    // операција
    pomeriFioku() {
        this.otvoreno = !this.otvoreno;
        console.log(`Fioka je pomerena. Status fioke: ${this.hasAttribute('otvoreno')?'otovoreno':'zatvoreno'}`);
    }

    connectedCallback() {}

    disconnectedCallback() {}

    attributeChangedCallback(attrName, oldVal, newVal) {}


}

// нови елеменат
let FiokaComponent = customElements.define('uvit-fioka', Fioka);