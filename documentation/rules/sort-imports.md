# sort-imports

This rule ensures imports are always sorted alphabetically by source.

**ESLint Configuration**

```json
{
  "rules": {
    "ocd/sort-imports": 2
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
