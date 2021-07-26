module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'max-len': [ 'warn', { code: 160 } ],
    'vue/no-duplicate-attributes': [
      'error',
      {
        allowCoexistClass: true,
        allowCoexistStyle: true
      }
    ],
    'vue/no-v-html': 0,
    'vue/no-use-v-if-with-v-for': [
      'warn',
      {
        allowUsingIterationVar: true
      }
    ],
    'vue/html-closing-bracket-newline': [
      'warn',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/max-attributes-per-line': [ 'error', {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: true
      }
    }],
    'import/extensions': [
      'error',
      'never',
      {
        js: 'never',
        ts: 'never',
        mjs: 'never',
        jsx: 'never',
        tsx: 'never',
        vue: 'never'
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 0,
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/no-cycle':'off',
    'no-underscore-dangle': 'off',
    'prefer-const': 'off',
    'global-require': 'off',
    'no-use-before-define': 'off',
    "import/no-extraneous-dependencies": [
      0,
      {
        "devDependencies": false,
        "optionalDependencies": false,
        "peerDependencies": false
      }],
    allowImportExportEverywhere: 0,
    'import/no-dynamic-import': 'off',
    'func-names': 'off',
    'object-curly-newline': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};