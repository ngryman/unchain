# simulator [![npm][npm-image]][npm-url] [![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/unchain.svg?style=flat
[npm-url]: https://npmjs.org/package/unchain
[travis-image]: https://img.shields.io/travis/ngryman/unchain.svg?style=flat
[travis-url]: https://travis-ci.org/ngryman/unchain

> Synchronous function chaining with delay support.


## Install

```
$ npm install --save unchain
```


## Usage

```js
var chain = require('unchain')

function foo() { console.log('foo') }
function bar() { console.log('bar') }
function baz() { console.log('baz') }

// chain sync functions
chain(foo, bar)()
//=> foo bar

// pass arrays of functions
chain([foo, bar])()
//=> foo bar

// delay some functions
chain(foo, 100, bar, 200, baz)
//=> foo bar (100ms later) baz (200ms later)
```


### `chain(fn1|delay, [fn2|delay], [fn3|delay, ...])`

Chains functions from left to right. If a `number` is specified, the next function in the chain
will be delayed in `ms`.


## License

MIT © [Nicolas Gryman](http://ngryman.sh)
