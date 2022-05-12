<!--idoc:ignore:start-->
babel-plugin-transform-replace-export-default
===
<!--idoc:ignore:end-->

[![NPM version](https://img.shields.io/npm/v/babel-plugin-transform-replace-export-default.svg?style=flat)](https://npmjs.org/package/babel-plugin-transform-replace-export-default)
[![CI](https://github.com/kktjs/babel-plugin-transform-replace-export-default/actions/workflows/ci.yml/badge.svg)](https://github.com/kktjs/babel-plugin-transform-replace-export-default/actions/workflows/ci.yml)
[![Coverage Status](https://kktjs.github.io/babel-plugin-transform-replace-export-default/coverage/badges.svg)](https://kktjs.github.io/babel-plugin-transform-replace-export-default/coverage/lcov-report)
[![Downloadss](https://img.shields.io/npm/dm/babel-plugin-transform-replace-export-default.svg?style=flat)](https://npmjs.org/package/babel-plugin-transform-replace-export-default)

Replace `export default` with `return`, or just remove `export default`.

## Usage

```bash
npm install babel-plugin-transform-replace-export-default --save-dev
```

Via `.babelrc` or `babel-loader`.

```json
{
  "plugins": [
    "babel-plugin-transform-replace-export-default"
  ]
}
```

Or

```json
{
  "plugins": [
    ["babel-plugin-transform-replace-export-default", {
      "removeExportDefault": true
    }]
  ]
}
```


## Replace `export default` to `return`

### Example 1

```js
// Input Code
const demo = 0;
export default demo;

// 👇👇👇 Output   ↓ ↓ ↓ ↓ ↓ ↓
const demo = 0;
return demo;
```

Output Result

```diff
const demo = 0;
- export default demo;
+ return demo;
```

### Example 2

```js
// Input Code
function demo() {};
export default demo;

// 👇👇👇 Output   ↓ ↓ ↓ ↓ ↓ ↓
function demo() {};
return demo;
```

Output Result

```diff
function demo() {};
- export default demo;
+ return demo;
```

### Example 3

```js
// Input Code
class demo { constructor() { } };
export default demo;

// 👇👇👇 Output   ↓ ↓ ↓ ↓ ↓ ↓
class demo { constructor() { } };
return demo;
```

Output Result

```diff
class demo { constructor() { } };
- export default demo;
+ return demo;
```

### Example 4

```js
// Input Code
export default class demo { constructor() { } };

// 👇👇👇 Output   ↓ ↓ ↓ ↓ ↓ ↓
return class demo { constructor() { } };
```

Output Result

```diff
- export default class demo { constructor() { } };
+ return class demo { constructor() { } };
```

### Example 5

```js
// Input Code
export default class demo { constructor() { } };

// 👇👇👇 Output   ↓ ↓ ↓ ↓ ↓ ↓
return class demo { constructor() { } };
```

Output Result

```diff
- export default function demo() {};
+ return function demo() {};
```

## Remove `export default`

```json
{
  "plugins": [
    ["babel-plugin-transform-replace-export-default", {
      "removeExportDefault": true
    }]
  ]
}
```

### Example 1

```js
// Input Code
export default class demo {}

// 👇👇👇 Output   ↓ ↓ ↓ ↓ ↓ ↓
class demo {}
```

Output Result

```diff
- export default class demo {}
+ class demo {}
```

### Example 2

```js
// Input Code
export default function demo() {}

// 👇👇👇 Output   ↓ ↓ ↓ ↓ ↓ ↓
function demo() {}
```

Output Result

```diff
- export default function demo() {}
+ function demo() {}
```

### Example 3

```js
// Input Code
class demo {}
export default demo;

// 👇👇👇 Output   ↓ ↓ ↓ ↓ ↓ ↓
class demo {}
```

Output Result

```diff
class demo {}
- export default demo;
```

### Example 4

```js
// Input Code
function demo() {}
export default demo;

// 👇👇👇 Output   ↓ ↓ ↓ ↓ ↓ ↓
function demo() {}
```

Output Result

```diff
function demo() {}
- export default demo;
```

### Example 5

```js
// Input Code
const demo = 0;
export default demo;

// 👇👇👇 Output   ↓ ↓ ↓ ↓ ↓ ↓
const demo = 0;
```

Output Result

```diff
const demo = 0;
- export default demo;
```


## Programmatic Usage

```js
import plugin from 'babel-plugin-transform-replace-export-default';
import { transformSync } from '@babel/core';
 
function replace(code) {
  return transformSync(code, {
    babelrc: false,
    plugins: [
      [plugin, {
        removeExportDefault: true
      }]
    ],
  }).code;
}
 
replace("export default function demo() {}");
//=> "function demo() {}"
```

## Related

- [markdown-react-code-preview-loader](https://github.com/kktjs/markdown-react-code-preview-loader)
- [babel-plugin-transform-remove-imports](https://github.com/uiwjs/babel-plugin-transform-remove-imports)

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/kktjs/babel-plugin-transform-replace-export-default/graphs/contributors">
  <img src="https://kktjs.github.io/babel-plugin-transform-replace-export-default/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

MIT © [`Kenny Wong`](https://github.com/jaywcjlove)


<!--idoc:config:
footer: |
  Released under the MIT License. Copyright © 2022 Kenny Wong<br />
  Generated by <a href="https://github.com/jaywcjlove/idoc" target="_blank">idoc</a> v{{idocVersion}}
-->