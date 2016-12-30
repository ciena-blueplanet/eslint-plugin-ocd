/**
 * @typedef {Object} SortCheckResult
 * @property {Array<ESLintNode>} expected - import declaration nodes in expected order
 * @property {Boolean} notSorted - whether or not imports are not already sorted
 */

/**
 * Sort import declarations alphabetically by source
 * @param {Array<ESLintNode>} items - import declarations
 * @returns {Array<ESLintNode>} sorted import declarations
 */
function deterministicSort (items) {
  var remainingItems = Array.from(items)
  var sortedItems = []

  while (remainingItems.length !== 0) {
    var nextItem = remainingItems[0]
    var nextItemIndex = 0

    remainingItems
      .forEach(function (item, index) {
        if (item.source.value < nextItem.source.value) {
          nextItem = item
          nextItemIndex = index
        }
      })

    sortedItems.push(nextItem)
    remainingItems.splice(nextItemIndex, 1)
  }

  return sortedItems
}

/**
 * Sort import declarations alphabetically by source
 * @param {ESLintContext} context - context
 * @param {Array<ESLintNode>} importDeclarations - import declaration nodes
 */
function sortImportDeclarations (context, importDeclarations) {
  var expected = deterministicSort(importDeclarations)
  var sourceTextArray = context.getSourceCode().getText().split('')

  importDeclarations
    .forEach(function (importDeclaration, index) {
      var expectedImportDeclaration = expected[index]

      if (importDeclaration === expectedImportDeclaration) {
        return
      }

      var expectedImportDeclarationText = sourceTextArray
        .slice(
          expectedImportDeclaration.range[0],
          expectedImportDeclaration.range[1]
        )
        .join('')

      context.report({
        fix: function (fixer) {
          return fixer.replaceText(importDeclaration, expectedImportDeclarationText)
        },
        message: 'Expected import of ' + expectedImportDeclaration.source.value,
        node: importDeclaration
      })
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

        sortImportDeclarations(context, importDeclarations)
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
