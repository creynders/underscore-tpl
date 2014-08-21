# _tpl

> `_.template` for objects

## Installation

### Bower

```shell
bower install _tpl
```

### Npm

```shell
npm install _tpl
```

## Usage

```js
var _tpl = require( '_tpl' );
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
