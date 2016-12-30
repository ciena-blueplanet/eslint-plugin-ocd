/**
 * @typedef {Object} SortCheckResult
 * @property {Array<ESLintNode>} expected - import declaration nodes in expected order
 * @property {Boolean} notSorted - whether or not imports are not already sorted
 */

/**
 * Check if import declarations are sorted alphabetically by source
 * @param {ESLintContext} context - context
 * @param {Array<ESLintNode>} importDeclarations - import declaration nodes
 * @returns {SortCheckResult} sort check result
 */
function checkIfImportsAreSorted (context, importDeclarations) {
  var expected = importDeclarations
    .slice(0) // Shallow clone of array
    .sort(importDeclarationSorter)

  var notSorted = expected
    .some(function (node, index) {
      return node !== importDeclarations[index]
    })

  if (notSorted) {
    expected
      .forEach(function (node, index) {
        var importDeclaration = importDeclarations[index]
        var message = (node !== importDeclaration ? 'Expected import of ' + node.source.value : '')

        context.report({
          fix: function (fixer) {
            // We must keep first import declaration in tree so we can replace it with sorted list
            if (index === 0) {
              return fixer
            }

            return fixer.remove(importDeclaration)
          },
          message: message,
          node: importDeclaration
        })
      })
  }

  return {
    expected: expected,
    notSorted: notSorted
  }
}

/**
 * Sort import declarations by source
 * @param {ESLintNode} a - first import declaration
 * @param {ESLintNode} b - second import declaration
 * @returns {Number} number indiciating sort order
 */
function importDeclarationSorter (a, b) {
  return a.source.value > b.source.value
}

/**
 * Added imports to beginning of program
 * @param {ESLintContext} context - context
 * @param {ESLintNode} node - program node
 * @param {Array<ESLintNode>} importDeclarations - import declaration nodes
 * @param {ESLintNode} firstImportDeclaration - first import declaration node
 */
function insertImports (context, node, importDeclarations, firstImportDeclaration) {
  var sourceText = context.getSourceCode().getText()

  var insertText = importDeclarations
    .map(function (importDeclaration) {
      return sourceText.slice(importDeclaration.start, importDeclaration.end)
    })
    .join('\n')

  context.report({
    fix: function (fixer) {
      return fixer.replaceText(firstImportDeclaration, insertText)
    },
    message: '',
    node: node
  })
}

module.exports = {
  create: function (context) {
    var importDeclarations = []

    return {
      /**
       * Track imports for sorting later
       * @param {ESLintNode} node - import declaration node
       */
      ImportDeclaration: function (node) {
        importDeclarations.push(node)
      },

      'Program:exit': function (node) {
        if (importDeclarations.length === 0) {
          return
        }

        var result = checkIfImportsAreSorted(context, importDeclarations)

        if (result.notSorted) {
          insertImports(context, node, result.expected, importDeclarations[0])
        }
      }
    }
  },
  meta: {
    deprecated: false,
    docs: {
      category: 'Stylistic Issues',
      description: 'Ensure import declarations are alphabetically sorted by source',
      recommended: true
    },
    fixable: 'code'
  }
}
