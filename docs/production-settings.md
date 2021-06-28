# Production Builds

Notes:

- anything in `/public/` folder gets pushed into `/dist/` folder.
- anything in `/src/assets/` folder gets created and added to '`/dist/assets/` folder.
- any scoped css gets pushed into `/dist/assets/` folder.
- any vendor css gets pushed into the `/dist/assets/` folder.

**Everything gets built into the `dist` folder perfectly**

<br>

## Building Assets in a non-root path

- easily update build script to include base path
- this carries through to the dist folder when building

update `package.json` like this for the `build` script

```json
"scripts": {
    "build": "vite build --base=/test/folder/dist/",
  },
```
