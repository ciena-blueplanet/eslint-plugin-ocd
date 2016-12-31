# sort-import-declaration-specifiers

This rule ensures import declaration specifiers are always sorted alphabetically.

**ESLint Configuration**

```json
{
  "rules": {
    "ocd/sort-import-declaration-specifiers": 2
  }
}
```

**Valid**

```js
import {describe, it} from 'mocha'
```

**Invalid**

```js
import {it, describe} from 'mocha'
```
