/**
 * Sort properties alphabetically by source
 * @param {Array<ESLintNode>} items - properties
 * @returns {Array<ESLintNode>} sorted properties
 */
function deterministicSort (items) {
  var remainingItems = Array.from(items)
  var sortedItems = []

  while (remainingItems.length !== 0) {
    var nextItem = remainingItems[0]
    var nextItemIndex = 0

    remainingItems
      .forEach(function (item, index) {
        if (item.key.name < nextItem.key.name) {
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
 * Sort properties alphabetically
 * @param {ESLintContext} context - context
 * @param {Array<ESLintNode>} properties - property nodes
 */
function sortProperties (context, properties) {
  var expected = deterministicSort(properties)
  var sourceTextArray = context.getSourceCode().getText().split('')

  properties
    .forEach(function (property, index) {
      var expectedProperty = expected[index]

      if (property === expectedProperty) {
        return
      }

      var expectedPropertyText = sourceTextArray
        .slice(
          expectedProperty.range[0],
          expectedProperty.range[1]
        )
        .join('')

      context.report({
        fix: function (fixer) {
          return fixer.replaceText(property, expectedPropertyText)
        },
        message: 'Expected ' + expectedProperty.key.name + ' instead of ' + property.key.name,
        node: property
      })
    })
}

module.exports = {
  create: function (context) {
    return {
      /**
       * Make sure variable declarator properties are sorted
       * @param {ESLintNode} node - variable declarator node
       */
      VariableDeclarator: function (node) {
        var properties = node.id.properties

        if (!properties || properties.length === 0) {
          return
        }

        sortProperties(context, properties)
      }
    }
  },
  meta: {
    deprecated: false,
    docs: {
      category: 'Stylistic Issues',
      description: 'Ensure variable declarators are alphabetically sorted',
      recommended: true
    },
    fixable: 'code'
  }
}
