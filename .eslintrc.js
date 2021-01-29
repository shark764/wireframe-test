module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  ignorePatterns: ['**/src/tests/*'],
  rules: {
    'no-param-reassign': ['warn', { props: false }],
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignorePattern: 'd="([\\s\\S]*?)"',
      },
    ],
    'import/no-named-as-default': 'warn',
    'import/order': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-deprecated': 'warn',
    'react/prop-types': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/control-has-associated-label': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
  },
};
