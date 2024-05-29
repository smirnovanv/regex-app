/* eslint-env node */
/* eslint-disable filenames-simple/naming-convention */
/* eslint-disable @stylistic/array-element-newline */
/* eslint-disable @stylistic/array-bracket-newline */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  plugins: [
    '@stylistic',
    '@stylistic/plus',
    'modules-newlines',
    'filenames-simple',
    'import',
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@conarti/feature-sliced/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
  },
  rules: {
    '@stylistic/semi': 'error',
    '@stylistic/member-delimiter-style': ['error'],
    '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/no-extra-semi': 'error',
    '@stylistic/brace-style': 'error',
    '@stylistic/linebreak-style': ['error', 'unix'],
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/object-property-newline': 'error',
    '@stylistic/object-curly-newline': ['error', {
      ObjectExpression: {
        multiline: true,
        minProperties: 2,
        consistent: true,
      },
      ObjectPattern: {
        multiline: true,
        consistent: true,
      },
      ImportDeclaration: {
        multiline: true,
      },
      ExportDeclaration: {
        multiline: true,
        minProperties: 2,
        consistent: true,
      },
    }],
    '@stylistic/no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 0,
      maxBOF: 0,
    }],
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/no-mixed-spaces-and-tabs': 'error',
    '@stylistic/no-tabs': 'error',
    '@stylistic/eol-last': 'error',
    '@stylistic/no-whitespace-before-property': 'error',
    '@stylistic/arrow-parens': 'error',
    '@stylistic/array-element-newline': ['error', {
      multiline: true,
      minItems: 2,
    }],
    '@stylistic/array-bracket-newline': ['error', { multiline: true }],
    '@stylistic/plus/indent-binary-ops': ['error', 2],
    '@stylistic/plus/type-generic-spacing': ['error'],
    '@stylistic/plus/type-named-tuple-spacing': ['error'],
    '@stylistic/array-bracket-spacing': 'error',
    '@stylistic/arrow-spacing': 'error',
    '@stylistic/block-spacing': 'error',
    '@stylistic/comma-spacing': 'error',
    '@stylistic/computed-property-spacing': 'error',
    '@stylistic/function-call-spacing': 'error',
    '@stylistic/key-spacing': 'error',
    '@stylistic/keyword-spacing': 'error',
    '@stylistic/rest-spread-spacing': 'error',
    '@stylistic/semi-spacing': 'error',
    '@stylistic/space-before-blocks': 'error',
    '@stylistic/space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    '@stylistic/space-in-parens': 'error',
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/space-unary-ops': 'error',
    '@stylistic/spaced-comment': 'error',
    '@stylistic/switch-colon-spacing': 'error',
    '@stylistic/template-curly-spacing': 'error',
    '@stylistic/template-tag-spacing': 'error',
    '@stylistic/type-annotation-spacing': 'error',
    '@stylistic/function-paren-newline': ['error', 'consistent'],

    complexity: ['error', 10],
    'no-restricted-imports': ['error', {
      patterns: ['src/*'],
    }],

    'vue/no-empty-component-block': 'error',
    'vue/block-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/block-tag-newline': 'error',
    'vue/script-indent': 'error',
    'vue/no-undef-components': ['error', {
      'ignorePatterns': ['a(\\-\\w+)+'],
    }],

    'modules-newlines/import-declaration-newline': 'error',
    'modules-newlines/export-declaration-newline': 'error',

    'filenames-simple/naming-convention': ['error', { rule: 'kebab-case' }],

    'import/newline-after-import': ['error', { 'count': 1 }],
    'import/no-cycle': 'error',

    '@typescript-eslint/consistent-type-imports': ['error', {
      fixStyle: 'inline-type-imports',
    }],

    '@conarti/feature-sliced/public-api': ['error', { level: 'segments' }],
    '@conarti/feature-sliced/layers-slices': ['error', { ignorePatterns: ['@/entities/request'] }],
  },
  settings: {
    'typescript': true,
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      node: {
        paths: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
        moduleDirectory: ['node_modules'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parserOptions: {
        project: ['./tsconfig.app.json'],
      },
      rules: {
        '@typescript-eslint/consistent-type-exports': ['error', {
          fixMixedExportsWithInlineTypeSpecifier: true,
        }],
      },
    },
    {
      files: ['!src/**/*'],
      parserOptions: {
        project: ['./tsconfig.node.json'],
      },
    },
  ],
};
