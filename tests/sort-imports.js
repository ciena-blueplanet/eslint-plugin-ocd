var RuleTester = require('eslint').RuleTester
var rule = require('../rules/sort-imports')

var ruleTester = new RuleTester()

ruleTester.run('sort-imports', rule, {
  invalid: [
    {
      code: 'import Baz from "baz"\n' +
            'import Bar from "bar"',
      errors: [
        {
          column: 1,
          line: 1,
          message: 'Expected import of bar',
          type: 'ImportDeclaration'
        },
        {
          column: 1,
          line: 1,
          message: '',
          type: 'Program'
        },
        {
          column: 1,
          line: 2,
          message: 'Expected import of baz',
          type: 'ImportDeclaration'
        }
      ],
      output: 'import Bar from "bar"\n' +
              'import Baz from "baz"\n',
      parser: 'babel-eslint'
    },
    {
      code: 'import Foo from "foo"\n' +
            'import Bar from "bar"\n' +
            'import Baz from "baz"',
      errors: [
        {
          column: 1,
          line: 1,
          message: 'Expected import of bar',
          type: 'ImportDeclaration'
        },
        {
          column: 1,
          line: 1,
          message: '',
          type: 'Program'
        },
        {
          column: 1,
          line: 2,
          message: 'Expected import of baz',
          type: 'ImportDeclaration'
        },
        {
          column: 1,
          line: 3,
          message: 'Expected import of foo',
          type: 'ImportDeclaration'
        }
      ],
      output: 'import Bar from "bar"\n' +
              'import Baz from "baz"\n' +
              'import Foo from "foo"\n\n',
      parser: 'babel-eslint'
    },
    {
      code: 'import Bar from "bar"\n' +
            'import Foo from "foo"\n' +
            'import Baz from "baz"',
      errors: [
        {
          column: 1,
          line: 1,
          message: '',
          type: 'ImportDeclaration'
        },
        {
          column: 1,
          line: 1,
          message: '',
          type: 'Program'
        },
        {
          column: 1,
          line: 2,
          message: 'Expected import of baz',
          type: 'ImportDeclaration'
        },
        {
          column: 1,
          line: 3,
          message: 'Expected import of foo',
          type: 'ImportDeclaration'
        }
      ],
      output: 'import Bar from "bar"\n' +
              'import Baz from "baz"\n' +
              'import Foo from "foo"\n\n',
      parser: 'babel-eslint'
    },
    {
      code: 'import Foo from "foo"\n' +
            'import Baz from "baz"\n' +
            'import Bar from "bar"',
      errors: [
        {
          column: 1,
          line: 1,
          message: 'Expected import of bar',
          type: 'ImportDeclaration'
        },
        {
          column: 1,
          line: 1,
          message: '',
          type: 'Program'
        },
        {
          column: 1,
          line: 2,
          message: '',
          type: 'ImportDeclaration'
        },
        {
          column: 1,
          line: 3,
          message: 'Expected import of foo',
          type: 'ImportDeclaration'
        }
      ],
      output: 'import Bar from "bar"\n' +
              'import Baz from "baz"\n' +
              'import Foo from "foo"\n\n',
      parser: 'babel-eslint'
    },
    {
      code: 'import Baz from "baz"\n' +
            'import Bar from "bar"\n' +
            'import Foo from "foo"',
      errors: [
        {
          column: 1,
          line: 1,
          message: 'Expected import of bar',
          type: 'ImportDeclaration'
        },
        {
          column: 1,
          line: 1,
          message: '',
          type: 'Program'
        },
        {
          column: 1,
          line: 2,
          message: 'Expected import of baz',
          type: 'ImportDeclaration'
        },
        {
          column: 1,
          line: 3,
          message: '',
          type: 'ImportDeclaration'
        }
      ],
      output: 'import Bar from "bar"\n' +
              'import Baz from "baz"\n' +
              'import Foo from "foo"\n\n',
      parser: 'babel-eslint'
    },
    {
      code: 'import A from "baz"\n' +
            'import B from "bar"',
      errors: [
        {
          column: 1,
          line: 1,
          message: 'Expected import of bar',
          type: 'ImportDeclaration'
        },
        {
          column: 1,
          line: 1,
          message: '',
          type: 'Program'
        },
        {
          column: 1,
          line: 2,
          message: 'Expected import of baz',
          type: 'ImportDeclaration'
        }
      ],
      output: 'import B from "bar"\n' +
              'import A from "baz"\n',
      parser: 'babel-eslint'
    },
    {
      code: 'import A from "baz"\n' +
            'import B from "bar"\n' +
            'import C from "foo"',
      errors: [
        {
          column: 1,
          line: 1,
          message: 'Expected import of bar',
          type: 'ImportDeclaration'
        },
        {
          column: 1,
          line: 1,
          message: '',
          type: 'Program'
        },
        {
          column: 1,
          line: 2,
          message: 'Expected import of baz',
          type: 'ImportDeclaration'
        },
        {
          column: 1,
          line: 3,
          message: '',
          type: 'ImportDeclaration'
        }
      ],
      output: 'import B from "bar"\n' +
              'import A from "baz"\n' +
              'import C from "foo"\n\n',
      parser: 'babel-eslint'
    }
  ],
  valid: [
    {
      code: 'import Bar from "bar"\n',
      parser: 'babel-eslint'
    },
    {
      code: 'import Bar from "bar"\n' +
            'import Baz from "baz"',
      parser: 'babel-eslint'
    },
    {
      code: 'import Bar from "bar"\n' +
            'import Baz from "baz"\n' +
            'import Foo from "foo"',
      parser: 'babel-eslint'
    },
    {
      code: 'import B from "bar"\n' +
            'import A from "baz"',
      parser: 'babel-eslint'
    },
    {
      code: 'import C from "bar"\n' +
            'import A from "baz"\n' +
            'import B from "foo"',
      parser: 'babel-eslint'
    }
  ]
})
