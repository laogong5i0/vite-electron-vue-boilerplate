# electron-vite-vue

π₯³ Really simple `Electron20` + `Vue2` + `Vite` boilerplate.

laogong5i0/electron-vite-vue-template

## Features

π¦ Out of the box  
π― Based on the official [template-vue-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-vue-ts), less invasive  
π± Extensible, really simple directory structure  
πͺ Support using Node.js API in Electron-Renderer  
π© Support C/C++ native addons  
π₯ It's easy to implement multiple windows  

## Quick Start

```sh
// θΏθ‘εΌεη―ε’
npm run dev
// εεΈ
npm run build
```

## Directory

```diff
+ βββ¬ electron
+ β βββ¬ main
+ β β βββ index.ts    entry of Electron-Main
+ β βββ¬ preload
+ β   βββ index.ts    entry of Preload-Scripts
  βββ¬ src
  β βββ main.ts       entry of Electron-Renderer
  βββ index.html
  βββ package.json
  βββ vite.config.ts
```

## Be aware

π¨ By default, this template integrates Node.js in the Renderer process. If you don't need it, you just remove the option below. [Because it will modify the default config of Vite](https://github.com/electron-vite/vite-plugin-electron/tree/main/packages/electron-renderer#config-presets-opinionated).

```diff
# vite.config.ts

electron({
- renderer: {}
})
```

