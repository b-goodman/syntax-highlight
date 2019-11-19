# syntax-highlight

Cusom element for displaying code with syntax highlighting using [Prism](https://prismjs.com/).

## Installation

```bash
npm install @bgoodman/syntax-highlight

yarn add @bgoodman/syntax-highlight
```

## Usage

```html
<html>

<head>
    <script type="module" src="./dist/index.js"></script>
</head>

<body>

    <syntax-highlight class="language-css">
        <pre><code class="language-css">p { color: red }</code></pre>
    </syntax-highlight>

    <syntax-highlight class="language-html" font-family="monospace" font-size="18px">
        <pre><code class="language-html">&lt;syntax-highlight
    class="language-html"
    font-family="monospace"
    font-size="18px"&gt;
&lt;/syntax-highlight&gt;</code></pre>
    </syntax-highlight>

</body>

</html>
```

## Attrbiutes

### `font-family`

Pass any valid css value for `font-family` to the element.

### `font-size`

Pass any valid css value for `font-size` to the element.
