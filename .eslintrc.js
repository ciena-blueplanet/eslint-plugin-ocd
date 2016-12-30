module.exports = {
  extends: ['standard'],
  rules: {
    camelcase: 2,
    complexity: [2, 5],
    'max-len': [2, 120, 4, {
      ignoreComments: true,
      ignoreUrls: true
    }],
    'require-jsdoc': 2,
    'valid-jsdoc': [
      2,
      {
        prefer: {
          const: 'constant',
          'constructor': 'class',
          arg: 'param',
          argument: 'param',
          defaultvalue: 'default',
          desc: 'description',
          emits: 'fires',
          exception: 'throws',
          extends: 'augments',
          fileoverview: 'file',
          func: 'function',
          host: 'external',
          method: 'function',
          overview: 'file',
          return: 'returns',
          var: 'member',
          virtual: 'abstract'
        },
        requireReturn: false
      }
    ]
  }
}
