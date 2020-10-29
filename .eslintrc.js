module.exports = {
  root: true,
  extends: "@react-native-community",
  rules: {
    // https://eslint.org/docs/rules/comma-dangle
    "comma-dangle": ["error", "only-multiline"],
    // https://eslint.org/docs/rules/max-len
    "max-len": [
      "error",
      {
        code: 120,
      },
    ],
    "no-console": "error",
    "no-param-reassign": [
      "error",
      {
        props: false,
      },
    ],
    // https://eslint.org/docs/rules/quotes
    quotes: ["error", "single"],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    "react/forbid-prop-types": ["off"],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    "react/prop-types": [
      "error",
      {
        skipUndeclared: true,
      },
    ],
    // https://eslint.org/docs/rules/sort-keys
    // "sort-keys": ["warn", "asc", { caseSensitive: false }],

    // Add overrides here
    "arrow-parens": "off",
    "implicit-arrow-linebreak": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "no-confusing-arrow": "off",
    "object-curly-newline": "off",
    "operator-linebreak": "off",
    radix: "off",
    "react/jsx-filename-extension": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    // Removed because it collides with prettier's formatting
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-curly-newline": "off",
  },
};
