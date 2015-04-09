# typographic-trademark

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> [Don’t use alphabetic substitutes][rtfm]

Micro module to help eliminate one of the [bad typewriter habits][habits].


## Install

```sh
npm install --save typographic-trademark
```


## Usage

```js
var trademark = require('typographic-trademark');

trademark(`2013 MegaCorp (TM)`); // 2013 MegaCorp™
```


## Real world examples

Check complex usage with real world examples in [typographic playground][playground].

[playground]: https://github.com/matmuchrapna/typographic-playground


## License

MIT © [Vladimir Starkov](http://vstarkov.com/)

[rtfm]: http://practicaltypography.com/trademark-and-copyright-symbols.html
[habits]: http://practicaltypography.com/typewriter-habits.html

[npm-url]: https://npmjs.org/package/typographic-trademark
[npm-image]: http://img.shields.io/npm/v/typographic-trademark.svg

[travis-url]: https://travis-ci.org/matmuchrapna/typographic-trademark
[travis-image]: http://img.shields.io/travis/matmuchrapna/typographic-trademark.svg

[coveralls-url]: https://coveralls.io/r/matmuchrapna/typographic-trademark
[coveralls-image]: http://img.shields.io/coveralls/matmuchrapna/typographic-trademark.svg

[depstat-url]: https://david-dm.org/matmuchrapna/typographic-trademark
[depstat-image]: https://david-dm.org/matmuchrapna/typographic-trademark.svg

[depstat-dev-url]: https://david-dm.org/matmuchrapna/typographic-trademark
[depstat-dev-image]: https://david-dm.org/matmuchrapna/typographic-trademark/dev-status.svg
