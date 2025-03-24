module.exports = {
  extends: ["react-app"],
  rules: {
    "jsx-a11y/iframe-has-title": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
};
