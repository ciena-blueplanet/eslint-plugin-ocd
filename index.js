module.exports = {
  configs: {
    'ocd': {
      rules: {
        'ocd/sort-imports': 2
      }
    }
  },
  rules: {
    'sort-imports': require('./rules/sort-imports')
  }
}
