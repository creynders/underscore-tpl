# underscore-tpl

> `_.template` for objects

## Installation

### Bower

```shell
bower install underscore-tpl
```

### Npm

```shell
npm install underscore-tpl
```

## Usage

```js
var _tpl = require( 'underscore-tpl' );
var values = {
    foo    : "foo",
    badass : "Jules Winfield",
    qux    : {
        mofo : "mofo"
    }
};

var config = {
    baz          : "<%= qux.mofo %>",
    major         : {
        badass : "<%= badass %>"
    },
    "<%= foo %>" : "bar"
};

console.log( _tpl( config, values ) );
```
```shell
# output
{ baz: 'mofo', major: { badass: 'Jules Winfield' }, foo: 'bar' }
```

More to come soon!

## License

Released under [MIT license](LICENSE-MIT)