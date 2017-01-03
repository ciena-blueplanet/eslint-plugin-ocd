/**
 * Sort import specifiers alphabetically by imported name
 * @param {Array<ESLintNode>} items - import specifiers
 * @returns {Array<ESLintNode>} sorted import specifiers
 */
function deterministicSort (items) {
  var remainingItems = Array.from(items)
  var sortedItems = []

  while (remainingItems.length !== 0) {
    var nextItem = remainingItems[0]
    var nextItemIndex = 0

    remainingItems
      .forEach(function (item, index) {
        if (item.imported.name < nextItem.imported.name) {
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
 * Sort import specifiers alphabetically
 * @param {ESLintContext} context - context
 * @param {Array<ESLintNode>} ImportSpecifiers - import specifier nodes
 */
function sortImportSpecifiers (context, ImportSpecifiers) {
  var expected = deterministicSort(ImportSpecifiers)
  var sourceTextArray = context.getSourceCode().getText().split('')

  ImportSpecifiers
    .forEach(function (importSpecifier, index) {
      var expectedImportSpecifier = expected[index]

      if (importSpecifier === expectedImportSpecifier) {
        return
      }

      var expectedPropertyText = sourceTextArray
        .slice(
          expectedImportSpecifier.range[0],
          expectedImportSpecifier.range[1]
        )
        .join('')

      context.report({
        fix: function (fixer) {
          return fixer.replaceText(importSpecifier, expectedPropertyText)
        },
        message: 'Expected ' + expectedImportSpecifier.imported.name + ' instead of ' + importSpecifier.imported.name,
        node: importSpecifier
      })
    })
}

module.exports = {
  create: function (context) {
    return {
      /**
       * Make sure import declarator properties are sorted
       * @param {ESLintNode} node - import declarator node
       */
      ImportDeclaration: function (node) {
        var nonDefaultSpecifiers = node.specifiers
          .filter(function (specifier) {
            return specifier.type === 'ImportSpecifier'
          })

        if (nonDefaultSpecifiers.length === 0) {
          return
        }

        sortImportSpecifiers(context, nonDefaultSpecifiers)
      }
    }
  },
  meta: {
    deprecated: false,
    docs: {
      category: 'Stylistic Issues',
      description: 'Ensure import declarators are alphabetically sorted',
      recommended: true
    },
    fixable: 'code'
  }
}
