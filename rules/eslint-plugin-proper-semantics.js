module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce proper semantics for TypeScript files',
      category: 'Best Practices',
      recommended: true,
    },
    schema: [],
  },
  create: function(context) {
    return {
      TSEnumDeclaration: function(node) {
        const fileName = context.getFilename();
        if (!fileName.endsWith('.enum.ts')) {
          context.report({
            node,
            message: 'Enums should be defined only in files with .enum.ts extension',
          });
        }
      },
      
      TSInterfaceDeclaration: function(node) {
        const fileName = context.getFilename();
        if (!fileName.endsWith('.interface.ts')) {
          context.report({
            node,
            message: 'Interfaces should be defined only in files with .interface.ts extension',
          });
        }
      },

      TSTypeAliasDeclaration: function(node) {
        const fileName = context.getFilename();
        if (!fileName.endsWith('.type.ts')) {
          context.report({
            node,
            message: 'Types should be defined only in files with .type.ts extension',
          });
        }
      },
    };
  },
};