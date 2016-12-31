var RuleTester = require('eslint').RuleTester
var rule = require('../rules/sort-variable-declarator-properties')

var ruleTester = new RuleTester()

ruleTester.run('sort-variable-declarator-properties', rule, {
  invalid: [
    {
      code: 'import Ember from "ember"\n' +
            'const {Logger, Component} = Ember',
      errors: [
        {
          column: 8,
          line: 2,
          message: 'Expected Component instead of Logger',
          type: 'Property'
        },
        {
          column: 16,
          line: 2,
          message: 'Expected Logger instead of Component',
          type: 'Property'
        }
      ],
      output: 'import Ember from "ember"\n' +
              'const {Component, Logger} = Ember',
      parser: 'babel-eslint'
    },
    {
      code: 'import Ember from "ember"\n' +
            'const {\n' +
            '  Logger,\n' +
            '  Component\n' +
            '} = Ember',
      errors: [
        {
          column: 3,
          line: 3,
          message: 'Expected Component instead of Logger',
          type: 'Property'
        },
        {
          column: 3,
          line: 4,
          message: 'Expected Logger instead of Component',
          type: 'Property'
        }
      ],
      output: 'import Ember from "ember"\n' +
              'const {\n' +
              '  Component,\n' +
              '  Logger\n' +
              '} = Ember',
      parser: 'babel-eslint'
    },
    {
      code: 'import Ember from "ember"\n' +
            'const {A, Logger, Component} = Ember',
      errors: [
        {
          column: 11,
          line: 2,
          message: 'Expected Component instead of Logger',
          type: 'Property'
        },
        {
          column: 19,
          line: 2,
          message: 'Expected Logger instead of Component',
          type: 'Property'
        }
      ],
      output: 'import Ember from "ember"\n' +
              'const {A, Component, Logger} = Ember',
      parser: 'babel-eslint'
    },
    {
      code: 'import Ember from "ember"\n' +
            'const {\n' +
            '  A,\n' +
            '  Logger,\n' +
            '  Component\n' +
            '} = Ember',
      errors: [
        {
          column: 3,
          line: 4,
          message: 'Expected Component instead of Logger',
          type: 'Property'
        },
        {
          column: 3,
          line: 5,
          message: 'Expected Logger instead of Component',
          type: 'Property'
        }
      ],
      output: 'import Ember from "ember"\n' +
              'const {\n' +
              '  A,\n' +
              '  Component,\n' +
              '  Logger\n' +
              '} = Ember',
      parser: 'babel-eslint'
    },
    {
      code: 'import Ember from "ember"\n' +
            'const {Logger, Component, set} = Ember',
      errors: [
        {
          column: 8,
          line: 2,
          message: 'Expected Component instead of Logger',
          type: 'Property'
        },
        {
          column: 16,
          line: 2,
          message: 'Expected Logger instead of Component',
          type: 'Property'
        }
      ],
      output: 'import Ember from "ember"\n' +
              'const {Component, Logger, set} = Ember',
      parser: 'babel-eslint'
    },
    {
      code: 'import Ember from "ember"\n' +
            'const {\n' +
            '  Logger,\n' +
            '  Component,\n' +
            '  set\n' +
            '} = Ember',
      errors: [
        {
          column: 3,
          line: 3,
          message: 'Expected Component instead of Logger',
          type: 'Property'
        },
        {
          column: 3,
          line: 4,
          message: 'Expected Logger instead of Component',
          type: 'Property'
        }
      ],
      output: 'import Ember from "ember"\n' +
              'const {\n' +
              '  Component,\n' +
              '  Logger,\n' +
              '  set\n' +
              '} = Ember',
      parser: 'babel-eslint'
    }
  ],
  valid: [
    {
      code: 'import Ember from "ember"\n' +
            'const {Component} = Ember',
      parser: 'babel-eslint'
    },
    {
      code: 'import Ember from "ember"\n' +
            'const {Component, Logger} = Ember',
      parser: 'babel-eslint'
    },
    {
      code: 'import Ember from "ember"\n' +
            'const {A, Component, Logger} = Ember',
      parser: 'babel-eslint'
    },
    {
      code: 'import Ember from "ember"\n' +
            'const {A, Component, Logger, set} = Ember',
      parser: 'babel-eslint'
    },
    {
      code: 'import Ember from "ember"\n' +
            'const {\n' +
            '  Component\n' +
            '} = Ember',
      parser: 'babel-eslint'
    },
    {
      code: 'import Ember from "ember"\n' +
            'const {\n' +
            '  Component,\n' +
            '  Logger\n' +
            '} = Ember',
      parser: 'babel-eslint'
    },
    {
      code: 'import Ember from "ember"\n' +
            'const {\n' +
            '  A,\n' +
            '  Component,\n' +
            '  Logger\n' +
            '} = Ember',
      parser: 'babel-eslint'
    },
    {
      code: 'import Ember from "ember"\n' +
            'const {\n' +
            '  A,\n' +
            '  Component,\n' +
            '  Logger,\n' +
            '  set\n' +
            '} = Ember',
      parser: 'babel-eslint'
    }
  ]
})
