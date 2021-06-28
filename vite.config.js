import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import autoPreprocess from 'svelte-preprocess' // added for sass

// https://vitejs.dev/config/
// https://vitejs.dev/config/#server-host

export default defineConfig({
  plugins: [
    svelte({
      preprocess: autoPreprocess(/* options obj */),
    }),
  ],
  rollupdedupe: ['svelte'],
  // server: {
  //   host: 'your.domain.com',
  //   proxy: {
  //     '/api': {
  //       target: 'https://api.domain.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, 'api'),
  //     },
  //   },
  // },
})
