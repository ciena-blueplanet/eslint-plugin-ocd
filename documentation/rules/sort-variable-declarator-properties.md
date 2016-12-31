# sort-variable-declarator-properties

This rule ensures variable declarator properties are always sorted alphabetically.

**ESLint Configuration**

```json
{
  "rules": {
    "ocd/sort-variable-declarator-properties": 2
  }
}
```

**Valid**

```js
import Ember from 'ember'
const {Component, Logger} = Ember
```

**Invalid**

```js
import Ember from 'ember'
const {Logger, Component} = Ember
```
