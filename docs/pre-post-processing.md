# Pre and Post Processing

## Using `svelte-preprocess` and `node-sass` for global sass and scoped sass processing (on component level)

```bash
npm install -D svelte-preprocess
npm install -D node-sass
```

**Update `vite.config.js`**

```js
import autoPreprocess from 'svelte-preprocess'

plugins: [
  svelte({
    preprocess: autoPreprocess(/* options obj */),
  }),
],
```

**Add `svelte.config.js`**

```js
// eslint-disable-next-line import/no-extraneous-dependencies
const preprocess = require('svelte-preprocess')
module.exports = { preprocess: preprocess() }
```

<br>

## Using `node-sass`

`package.json` should have these scripts for sass processing, output paths may differ depending on project directory setup

```json
"scripts": {
  "css-build": "node-sass -w src/sass/global.scss public/global.css --output-style compressed",
  "css-build-dev": "node-sass --omit-source-map-url src/sass/global.scss public/global.css",
  "css-watch": "npm run css-build-dev -- --watch",
  "css-start": "npm run css-watch"
}
```

> Note: Make sure `npm run css-start` is running when making sass updates
