## About

This is a custom ESLint plugin that enforces a bunch of best practices for TypeScript projects. For eg. one-interface-per-file will make sure you only have one interface defined for a single file reducing the chances of circular dependencies.

## Usage

In your `.eslintrc.json` file, add the following in the `plugins` section:

```json
"plugins": [
    ...
    "eslint-plugin-tsify"
],
```

In the `rules` section, add the rules you want to enforce.

```json
"rules": {
    ...
    "tsify/one-interface-per-file": "error",
}
```

## Rules

### one-interface-per-file

Enforces that only one TypeScript interface is defined per file.

### one-enum-per-file

Enforces that only one TypeScript enum is defined per file.

