module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "plugin:jsx-a11y/recommended", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["tsconfig.json"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "jsx-a11y"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-tabs": ["error", { allowIndentationTabs: true }],
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/triple-slash-reference": "off",
  },
};
