# `dotenv` ships with `Vite` by default, so no need to install any packages

## Included vars

ie: Detect if on app and prod.  
There are others as well, visit Vite docs for more info

```js
import.meta.env.PROD
import.meta.env.DEV
```

<br>

## Usage in app `.env` file

Any custom vars need to be prefixed with `VITE_`

```js
import.meta.env.VITE_MY_VAR
```
