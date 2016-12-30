/**
 * Sort import declarations by source
 * @param {ESLintNode} a - first import declaration
 * @param {ESLintNode} b - second import declaration
 * @returns {Number} number indiciating sort order
 */
function importDeclarationSorter (a, b) {
  return a.source.value > b.source.value
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

      'Program:exit': function () {
        importDeclarations
          .slice(0) // Shallow clone of array
          .sort(importDeclarationSorter)
          .forEach(function (node, index) {
            var importDeclaration = importDeclarations[index]

            if (node !== importDeclaration) {
              context.report({
                message: 'Expected import of ' + node.source.value,
                node: importDeclaration
              })
            }
          })
      }
    }
  },
  meta: {
    deprecated: false,
    docs: {
      category: 'Stylistic Issues',
      description: 'Ensure import declarations are alphabetically sorted by source',
      recommended: true
    }
  }
}
