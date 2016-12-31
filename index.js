module.exports = {
  configs: {
    'ocd': {
      rules: {
        'ocd/sort-import-declarations': 2,
        'ocd/sort-variable-declarator-properties': 2
      }
    }
  },
  rules: {
    'sort-import-declarations': require('./rules/sort-import-declarations'),
    'sort-variable-declarator-properties': require('./rules/sort-variable-declarator-properties')
  }
}
