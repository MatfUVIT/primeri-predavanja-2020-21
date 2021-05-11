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
            // АКо је ослушкивач онемогућен, клик се игнорише
            if (this.disabled)
                return;
            this.pomeriFioku();
        });

    }

    connectedCallback() {}

    disconnectedCallback() {}

    // A getter/setter for an open property.
    get otvoreno() {
        return this.hasAttribute('otvoreno');
    }

    set otvoreno(val) {
        // Reflect the value of the open property as an HTML attribute.
        if (val) {
            this.setAttribute('otvoreno', '');
        } else {
            this.removeAttribute('otvoreno');
        }
    }

    // A getter/setter for a disabled property.
    get disabled() {
        return this.hasAttribute('disabled');
    }

    set disabled(val) {
        // Reflect the value of the disabled property as an HTML attribute.
        if (val) {
            this.setAttribute('disabled', '');
        } else {
            this.removeAttribute('disabled');
        }
    }

    static get observedAttributes() {
        return ['disabled', 'otvoreno'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // When the drawer is disabled, update keyboard/screen reader behavior.
        if (this.disabled) {
            this.setAttribute('tabindex', '-1');
            this.setAttribute('aria-disabled', 'true');
        } else {
            this.setAttribute('tabindex', '0');
            this.setAttribute('aria-disabled', 'false');
        }
        // TODO: also react to the open attribute changing.
    }

    pomeriFioku() {
        this.otvoreno = !this.otvoreno;
        console.log(`Fioka je pomerena. Status fioke: ${this.hasAttribute('otvoreno')?'otovoreno':'zatvoreno'}`);
    }

}

// нови елеменат
let FiokaComponent = customElements.define('uvit-fioka', Fioka);