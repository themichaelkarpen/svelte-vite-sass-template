# Dev Server built in with Vite - it's amazing

`npm run dev`

<br>

## Proxy and Host

If using, update `vite.config.js` in `defineConfig(...)`

```js
server: {
  host: 'your.domain.com',
  proxy: {
    '/api': {
      target: 'https://api.domain.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, 'api')
    },
  }
},
```
