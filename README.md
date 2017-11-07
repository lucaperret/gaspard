[![gaspard](./gaspard.png)](https://github.com/lucaperret/gaspard)
# Gaspard

[![Greenkeeper badge](https://badges.greenkeeper.io/lucaperret/gaspard.svg)](https://greenkeeper.io/)
> Lightweight DOM helpers without dependency

[![Gaspard size](https://badges.herokuapp.com/size/npm/gaspard/dist/gaspard.umd.js?gzip=true)](https://www.npmjs.com/package/gaspard)
[![Build Status](https://travis-ci.org/lucaperret/gaspard.svg?branch=master)](https://travis-ci.org/lucaperret/gaspard)
[![Coverage Status](https://coveralls.io/repos/github/lucaperret/gaspard/badge.svg?branch=master)](https://coveralls.io/github/lucaperret/gaspard?branch=master)

[![npm version](https://badge.fury.io/js/gaspard.svg)](https://badge.fury.io/js/gaspard)
[![devDependency Status](https://david-dm.org/lucaperret/gaspard/dev-status.svg)](https://david-dm.org/lucaperret/gaspard.svg#info=devDependencies)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

The goal is to implement each [You might not need jQuery](http://youmightnotneedjquery.com)'s functions as ES modules. Enabling the power of Tree-shaking in [webpack](https://webpack.js.org/guides/tree-shaking/) or [rollup](https://rollupjs.org/#tree-shaking).


## Getting started

### Installing

npm | yarn | bower | jsDelivr
------------ | ------------- | ------------- | -------------
npm install gaspard | yarn add gaspard | bower install gaspard |  [gaspard.umd.js](https://cdn.jsdelivr.net/npm/gaspard@latest/dist/gaspard.umd.js)

**The Vue.js plugin [Vue-gaspard](https://github.com/lucaperret/vue-gaspard) is also available!**

### Usage

Include gaspard on your project
```javascript
// Via ES2015 import statement
import * as Gaspard from 'gaspard'

// or via Commonjs
const Gaspard = require('gaspard')
```

:fire: Use gaspard's [Collection](https://github.com/lucaperret/gaspard/blob/master/docs/API.md#srccollectionjs) to queries elements and perform actions on each :fire:
```javascript
import { Collection } from 'gaspard'
const collection = new Collection('div.highlight')
collection
  .css('background-color', 'green')
  .find('p:first-child') // returns a new gaspard collection
  .addClass('introduction')
  .fadeIn(400)
  .elements // Array of matched elements
  .forEach(element => {
    console.log('div.highlight first paragraph', element)
  })
```
And import methods (listed in the [API Documentation](#API))
```javascript
import { documentReady } from 'gaspard'
documentReady(() => {
  addClass(document.documentElement, 'dom-loaded')
})
```

Or use gaspard within a `<script>`
```html
<script src="https://cdn.jsdelivr.net/npm/gaspard@latest/dist/gaspard.umd.js"></script>
<script>
Gaspard.documentReady(function () {
  Gaspard.addClass(document.documentElement, 'dom-loaded');
});
</script>
```


### API documentation

- [![Latest Documentation](https://doxdox.org/images/badge-flat.svg)](https://doxdox.org/lucaperret/gaspard)

- [Markdown](https://github.com/lucaperret/gaspard/blob/master/docs/API.md)


## Contribute


- Fork the repository
- Clone it locally and install dependencies with npm (or yarn)
  ```shell
  npm install
  ```
- Create a new branch
- Develop your feature/fix with tests running
  ```shell
  npm run test:watch
  ```
- Commit, Push your branch and make a pull request on gaspard repository


## Thanks

Thanks to the open source community of [You might not need jQuery](http://youmightnotneedjquery.com), jQuery, and [cash](https://github.com/kenwheeler/cash/)


## Licensing

MIT License Copyright (c) 2017 Luca Perret
