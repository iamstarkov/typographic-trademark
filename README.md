# typographic-trademark

[![Greenkeeper badge](https://badges.greenkeeper.io/iamstarkov/typographic-trademark.svg)](https://greenkeeper.io/)

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

## License

MIT © [Vladimir Starkov](https://iamstarkov.com/)

[rtfm]: http://practicaltypography.com/trademark-and-copyright-symbols.html
[habits]: http://practicaltypography.com/typewriter-habits.html

[npm-url]: https://npmjs.org/package/typographic-trademark
[npm-image]: http://img.shields.io/npm/v/typographic-trademark.svg

[travis-url]: https://travis-ci.org/iamstarkov/typographic-trademark
[travis-image]: http://img.shields.io/travis/iamstarkov/typographic-trademark.svg

[coveralls-url]: https://coveralls.io/r/iamstarkov/typographic-trademark
[coveralls-image]: http://img.shields.io/coveralls/iamstarkov/typographic-trademark.svg

[depstat-url]: https://david-dm.org/iamstarkov/typographic-trademark
[depstat-image]: https://david-dm.org/iamstarkov/typographic-trademark.svg

[depstat-dev-url]: https://david-dm.org/iamstarkov/typographic-trademark
[depstat-dev-image]: https://david-dm.org/iamstarkov/typographic-trademark/dev-status.svg
