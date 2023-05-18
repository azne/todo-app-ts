module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended"],
  overrides: [],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  }
}
