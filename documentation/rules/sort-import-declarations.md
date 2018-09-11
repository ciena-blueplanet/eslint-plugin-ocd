# sort-import-declarations

This rule ensures imports are always sorted alphabetically by source.

**ESLint Configuration**

```json
{
  "rules": {
    "ocd/sort-import-declarations": 2
  }
}
```

**Valid**

```js
import chai from 'chai'
import {describe, it} from 'mocha'
```

**Invalid**

```js
import {describe, it} from 'mocha'
import chai from 'chai'
```

## Separate External and Internal Imports

If you prefer to separate external packages from internal packages you can configure this rule to ensure each section is sorted properly.

```json
{
  "rules": {
    "ocd/sort-import-declarations": [
      2,
      {
        "localPrefixes": [
          "../",
          "./",
          "dummy/"
        ]
      }
    ]
  }
}
```

**Valid**

```js
import alpha from 'alpha'

import bar from '../bar'
import baz from './baz'
import spam from 'dummy/spam'
```

## Ignore certain packages

Sometimes you may find yourself wanting to import certain modules first, such as polyfills, however their names aren't first alphabetically.
To do this you can simply ignore these packages so the lint rule won't care where they are located relative to the remaining imports.

```
{
  "rules": {
    "ocd/sort-import-declarations": [
      2,
      {
        "ignore": [
          "polyfill-1",
          "some-other-polyfill"
        ]
      }
    ]
  }
}
```
