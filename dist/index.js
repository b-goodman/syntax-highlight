var css = "/* PrismJS 1.17.1\nhttps://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+typescript&plugins=line-highlight+line-numbers+toolbar+show-language */\n/**\n * okaidia theme for JavaScript, CSS and HTML\n * Loosely based on Monokai textmate theme by http://www.monokai.nl/\n * @author ocodia\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: #f8f8f2;\n\tbackground: none;\n\ttext-shadow: 0 1px rgba(0, 0, 0, 0.3);\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\tfont-size: 1em;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tborder-radius: 0.3em;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #272822;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray;\n}\n\n.token.punctuation {\n\tcolor: #f8f8f2;\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #f92672;\n}\n\n.token.boolean,\n.token.number {\n\tcolor: #ae81ff;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #a6e22e;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: #f8f8f2;\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n\tcolor: #e6db74;\n}\n\n.token.keyword {\n\tcolor: #66d9ef;\n}\n\n.token.regex,\n.token.important {\n\tcolor: #fd971f;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n\npre[data-line] {\n\tposition: relative;\n\tpadding: 1em 0 1em 3em;\n}\n\n.line-highlight {\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\tpadding: inherit 0;\n\tmargin-top: 1em; /* Same as .prism’s padding-top */\n\n\tbackground: hsla(24, 20%, 50%,.08);\n\tbackground: linear-gradient(to right, hsla(24, 20%, 50%,.1) 70%, hsla(24, 20%, 50%,0));\n\n\tpointer-events: none;\n\n\tline-height: inherit;\n\twhite-space: pre;\n}\n\n\t.line-highlight:before,\n\t.line-highlight[data-end]:after {\n\t\tcontent: attr(data-start);\n\t\tposition: absolute;\n\t\ttop: .4em;\n\t\tleft: .6em;\n\t\tmin-width: 1em;\n\t\tpadding: 0 .5em;\n\t\tbackground-color: hsla(24, 20%, 50%,.4);\n\t\tcolor: hsl(24, 20%, 95%);\n\t\tfont: bold 65%/1.5 sans-serif;\n\t\ttext-align: center;\n\t\tvertical-align: .3em;\n\t\tborder-radius: 999px;\n\t\ttext-shadow: none;\n\t\tbox-shadow: 0 1px white;\n\t}\n\n\t.line-highlight[data-end]:after {\n\t\tcontent: attr(data-end);\n\t\ttop: auto;\n\t\tbottom: .4em;\n\t}\n\n.line-numbers .line-highlight:before,\n.line-numbers .line-highlight:after {\n\tcontent: none;\n}\n\npre[class*=\"language-\"].line-numbers {\n\tposition: relative;\n\tpadding-left: 3.8em;\n\tcounter-reset: linenumber;\n}\n\npre[class*=\"language-\"].line-numbers > code {\n\tposition: relative;\n\twhite-space: inherit;\n}\n\n.line-numbers .line-numbers-rows {\n\tposition: absolute;\n\tpointer-events: none;\n\ttop: 0;\n\tfont-size: 100%;\n\tleft: -3.8em;\n\twidth: 3em; /* works for line-numbers below 1000 lines */\n\tletter-spacing: -1px;\n\tborder-right: 1px solid #999;\n\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n}\n\n\t.line-numbers-rows > span {\n\t\tpointer-events: none;\n\t\tdisplay: block;\n\t\tcounter-increment: linenumber;\n\t}\n\n\t\t.line-numbers-rows > span:before {\n\t\t\tcontent: counter(linenumber);\n\t\t\tcolor: #999;\n\t\t\tdisplay: block;\n\t\t\tpadding-right: 0.8em;\n\t\t\ttext-align: right;\n\t\t}\n\ndiv.code-toolbar {\n\tposition: relative;\n}\n\ndiv.code-toolbar > .toolbar {\n\tposition: absolute;\n\ttop: .3em;\n\tright: .2em;\n\ttransition: opacity 0.3s ease-in-out;\n\topacity: 0;\n}\n\ndiv.code-toolbar:hover > .toolbar {\n\topacity: 1;\n}\n\n/* Separate line b/c rules are thrown out if selector is invalid.\n   IE11 and old Edge versions don't support :focus-within. */\ndiv.code-toolbar:focus-within > .toolbar {\n\topacity: 1;\n}\n\ndiv.code-toolbar > .toolbar .toolbar-item {\n\tdisplay: inline-block;\n}\n\ndiv.code-toolbar > .toolbar a {\n\tcursor: pointer;\n}\n\ndiv.code-toolbar > .toolbar button {\n\tbackground: none;\n\tborder: 0;\n\tcolor: inherit;\n\tfont: inherit;\n\tline-height: normal;\n\toverflow: visible;\n\tpadding: 0;\n\t-webkit-user-select: none; /* for button */\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n}\n\ndiv.code-toolbar > .toolbar a,\ndiv.code-toolbar > .toolbar button,\ndiv.code-toolbar > .toolbar span {\n\tcolor: #bbb;\n\tfont-size: .8em;\n\tpadding: 0 .5em;\n\tbackground: #f5f2f0;\n\tbackground: rgba(224, 224, 224, 0.2);\n\tbox-shadow: 0 2px 0 0 rgba(0,0,0,0.2);\n\tborder-radius: .5em;\n}\n\ndiv.code-toolbar > .toolbar a:hover,\ndiv.code-toolbar > .toolbar a:focus,\ndiv.code-toolbar > .toolbar button:hover,\ndiv.code-toolbar > .toolbar button:focus,\ndiv.code-toolbar > .toolbar span:hover,\ndiv.code-toolbar > .toolbar span:focus {\n\tcolor: inherit;\n\ttext-decoration: none;\n}\n\n";

class SyntaxHighlight extends HTMLElement {
    constructor() {
        super();
        this.customTheme = "font-family: monospace; font-size: 16px;";
        const template = document.createElement('template');
        template.innerHTML = `<style>${css}${this.customTheme}</style>`;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        Array.from(this.children).forEach(el => {
            import('./prism-8f0996ad.js').then((Prism) => {
                Prism.default.highlightElement(el, false, () => {
                    this.shadowRoot.appendChild(el);
                });
            });
        });
    }
}
window.customElements.define('syntax-highlight', SyntaxHighlight);

export default SyntaxHighlight;
