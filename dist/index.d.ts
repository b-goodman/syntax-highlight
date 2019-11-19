declare class SyntaxHighlight extends HTMLElement {
    static get observedAttributes(): string[];
    constructor();
    connectedCallback(): void;
    get fontFamily(): string;
    set fontFamily(newFont: string);
    get fontSize(): string;
    set fontSize(newSize: string);
    attributeChangedCallback(name: string, _oldVal: string, newVal: string): void;
    private customThemeEl;
    private defaultFontFamily;
    private defaultFontSize;
    private customTheme;
}

export default SyntaxHighlight;
