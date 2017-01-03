var RuleTester = require('eslint').RuleTester
var rule = require('../rules/sort-import-declaration-specifiers')

var ruleTester = new RuleTester()

ruleTester.run('sort-import-declaration-specifiers', rule, {
  invalid: [
    {
      code: 'import {it, describe} from "mocha"',
      errors: [
        {
          column: 9,
          line: 1,
          message: 'Expected describe instead of it',
          type: 'ImportSpecifier'
        },
        {
          column: 13,
          line: 1,
          message: 'Expected it instead of describe',
          type: 'ImportSpecifier'
        }
      ],
      output: 'import {describe, it} from "mocha"',
      parser: 'babel-eslint'
    },
    {
      code: 'import {describe, beforeEach, it} from "mocha"',
      errors: [
        {
          column: 9,
          line: 1,
          message: 'Expected beforeEach instead of describe',
          type: 'ImportSpecifier'
        },
        {
          column: 19,
          line: 1,
          message: 'Expected describe instead of beforeEach',
          type: 'ImportSpecifier'
        }
      ],
      output: 'import {beforeEach, describe, it} from "mocha"',
      parser: 'babel-eslint'
    }
  ],
  valid: [
    {
      code: 'import {it} from "mocha"',
      parser: 'babel-eslint'
    },
    {
      code: 'import {describe, it} from "mocha"',
      parser: 'babel-eslint'
    },
    {
      code: 'import {beforeEach, describe, it} from "mocha"',
      parser: 'babel-eslint'
    },
    {
      code: 'import {afterEach, beforeEach, describe, it} from "mocha"',
      parser: 'babel-eslint'
    },
    {
      code: 'import {\n' +
            '  it\n' +
            '} from "mocha"',
      parser: 'babel-eslint'
    },
    {
      code: 'import {\n' +
            '  describe,\n' +
            '  it\n' +
            '} from "mocha"',
      parser: 'babel-eslint'
    },
    {
      code: 'import {\n' +
            '  beforeEach,\n' +
            '  describe,\n' +
            '  it\n' +
            '} from "mocha"',
      parser: 'babel-eslint'
    },
    {
      code: 'import {\n' +
            '  afterEach,\n' +
            '  beforeEach,\n' +
            '  describe,\n' +
            '  it\n' +
            '} from "mocha"',
      parser: 'babel-eslint'
    },
    {
      code: 'import Ember from "ember"',
      parser: 'babel-eslint'
    }
  ]
})
