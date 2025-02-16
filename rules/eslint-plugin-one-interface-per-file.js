module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforce one TypeScript interface per file.",
      category: "TypeScript",
      recommended: true,
    },
    schema: [],
  },

  create: function(context) {
    let interfaceCount = 0;

    return {
      TSInterfaceDeclaration: function(node) {
        interfaceCount++;

        if (interfaceCount > 1) {
          context.report({
            node,
            message: "Only one TypeScript interface is allowed per file.",
          });
        }
      },

      "Program:exit": function() {
        interfaceCount = 0; // Reset the counters for the next file
      },
    };
  },
};