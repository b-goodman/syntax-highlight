
import style from "./prism.css";

export default class SyntaxHighlight extends HTMLElement {

    static get observedAttributes() {
        return ["font-family", "font-size"];
    }

    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `
            <style>${style}</style>
            <style id="customTheme">${this.customTheme()}</style>
        `;
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));

        this.customThemeEl = shadowRoot.querySelector<HTMLStyleElement>("#customTheme")!;
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

    get fontFamily(): string {
        return this.getAttribute("font-family") || this.defaultFontFamily;
    }

    set fontFamily(newFont: string) {
        this.setAttribute("font-family", newFont);
    }

    get fontSize(): string {
        return this.getAttribute("font-size") || this.defaultFontSize;
    }

    set fontSize(newSize: string) {
        this.setAttribute("font-size", newSize);
    }

    public attributeChangedCallback(name: string, _oldVal: string, newVal: string) {
        if ( (name === "font-family" || name === "font-size") && _oldVal !== newVal) {
            this.customThemeEl.innerHTML = this.customTheme();
            console.log(this.customTheme)
        }
    }

    private customThemeEl: HTMLStyleElement;

    private defaultFontFamily: string = "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace";
    private defaultFontSize: string = "1em";

    private customTheme (): string {
        return (
            `pre {
                font-family: ${this.fontFamily} !important;
                font-size: ${this.fontSize} !important;
            }`
        );
    };

}

window.customElements.define('syntax-highlight', SyntaxHighlight);
