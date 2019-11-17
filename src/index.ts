
import style from "./prism.css";

export default class SyntaxHighlight extends HTMLElement {

    private customTheme: string = "font-family: monospace; font-size: 16px;";

    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `<style>${style}${this.customTheme}</style>`;
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        Array.from(this.children).forEach( el => {
            import("./prism").then( (Prism) => {
                Prism.default.highlightElement(el, false, () => {
                    this.shadowRoot!.appendChild(el)
                });
            })
        });
    }

}

window.customElements.define('syntax-highlight', SyntaxHighlight);
