# Gaspard
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

From npm
```shell
npm install gaspard
```

### Usage

Via ES2015 import statement
```javascript
import * as Gaspard from 'gaspard'
// or just a function
import { addClass } from 'gaspard'
```

Via commonjs (the entire library will be imported)
```javascript
const Gaspard = require('gaspard')
```

Via `<script>`
```html
<script src="node_modules/gaspard/dist/gaspard.umd.js"></script>
<!-- or using jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/gaspard"></script>
<script>
Gaspard.documentReady(function () {
  Gaspard.find('html').addClass('dom-loaded');
});
</script>
```

### API

[Documentation](https://github.com/lucaperret/gaspard/blob/master/docs/API.md)

## Developing

### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/lucaperret/gaspard.git
cd gaspard/
npm install
npm run dev
```

## Tests

Describe and show how to run the tests with code examples.
Explain what these tests test and why.

```shell
npm run test
```

### Building


```shell
npm run build
```

Here again you should state what actually happens when the code above gets
executed.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).


## Thanks

Thanks to the community of [You might not need jQuery](http://youmightnotneedjquery.com)

Made with help of [project-guidelines](https://github.com/wearehive/project-guidelines)

## Licensing

MIT License Copyright (c) 2017 Luca Perret
