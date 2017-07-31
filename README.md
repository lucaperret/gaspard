![Gaspard Logo](./crab.svg)

# Gaspard
> Lightweight DOM helpers

Gaspard makes DOM manipulations easier. Attributes, querying, dimensions, you could import each function indenpendantly to save bytes with the power of webpack's [Tree Shaking](https://webpack.js.org/guides/tree-shaking/).

## Getting started

### Installing

From npm
```shell
npm install gaspard
```
Or with yarn
```shell
yarn add gaspard
```

### Usage
Import it via ES2015 module
```javascript
import * as Gaspard from 'gaspard'
// or just a function
import { addClass } from 'gaspard'
```
Via commonjs
```javascript
const Gaspard = require('gaspard')
```
Via `<script>`
```html
<script src="path/to/gaspard.min.js"></script>
```
> Gaspard is also available through [jsDelivr](https://cdn.jsdelivr.net/gaspard/0.1.0/gaspard.min.js) or [CloudFlare](https://cdnjs.cloudflare.com/ajax/libs/gaspard/0.1.0/gaspard.min.js) CDNs

```javascript
Gaspard.documentReady(() => {
  Gaspard.find('html').addClass('dom-loaded')
})
```

Here you should say what actually happens when you execute the code above.

## Developing

### Built With
ES2015

### Prerequisites
Node >= 4.0.0, npm >= 3.0.0


### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/lucaperret/gaspard.git
cd gaspard/
yarn install
```

And state what happens step-by-step. If there is any virtual environment, local server or database feeder needed, explain here.

### Building

If your project needs some additional steps for the developer to build the
project after some code changes, state them here. for example:

```shell
./configure
make
make install
```

Here again you should state what actually happens when the code above gets
executed.

### Deploying / Publishing
give instructions on how to build and release a new version
In case there's some step you have to take that publishes this project to a
server, this is the right time to state it.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).


## Configuration

Here you should write what are all of the configurations a user can enter when
using the project.

## Tests

Describe and show how to run the tests with code examples.
Explain what these tests test and why.

```shell
npm run test
```

## Style guide

[JavaScript Standard Style](https://standardjs.com)


## Thanks

Made with help of [project-guidelines](https://github.com/wearehive/project-guidelines)

## Licensing

MIT License Copyright (c) 2017 Luca
