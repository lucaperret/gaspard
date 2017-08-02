# Gaspard
> Lightweight DOM helpers

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
<script>
Gaspard.documentReady(function () {
  Gaspard.find('html').addClass('dom-loaded');
});
</script>
```

### API



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
