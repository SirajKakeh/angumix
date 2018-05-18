# General Guidlines

## 1- Configuring Webpack

* correctly configure `tsconfig`
* add index.ts, a place to bundle all AngularJS code
* inside index.ts import all `.js` files which `index.html` is imporintg **except vendor files**
* create `config` folder on root
* create `webpack.dev.js`
* create `helpers.js` utility file for webpack
* create `index.html` in config folder and add to to it the bundle outcome files

## 2- Adding Angular

* remove manual bootstrapping from AngulaJS
* create main.ts in `public` folder, which is Angular entry point
* bootstrap AngulaJS inside main.ts
* create Angular folder, where all Angular code will live
* create `app.module.ts` & `app.component.ts`
* bootstrap `AppModule` into `main.ts`
* update webpack to add Angular bundle
* 